import React, { Component } from 'react';
import './Journey.css';
import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig }  from '../ConfigFirebase/config';
import NewJourney from './NewJourney';
import JourneyDetails from './JourneyDetails';
import JourneyEdit from './JourneyEdit';

class Journey extends Component{

    constructor(props){
        super(props);

        this.app = firebase.initializeApp(firebaseConfig);
        this.database = this.app.database().ref().child('journeys');
        this.addNewJourney = this.addNewJourney.bind(this);
        this.changeAddNewJourney = this.changeAddNewJourney.bind(this);
        this.removeJourney = this.removeJourney.bind(this);

        this.state = {
            journeys: [],
            addNewJourney: true,
            textButton: 'Dodaj wycieczkę',
            isOpen: false,
            toDetailId: '',
            toDetailPlace: '',
            toDetailDescription: '',
            toDetailStartDate: '',
            toDetailEndDate: '',
            toDetailCost: ''

        }
    }

    componentWillMount(){
        
        const previousJourneys = this.state.journeys;

        this.database.on('child_added', snap => {
            previousJourneys.push({
                id: snap.key,
                place: snap.val().place,
                description: snap.val().description,
                startDate: snap.val().startDate,
                endDate: snap.val().endDate,
                cost: snap.val().cost,
            });

            this.setState({
                journeys: previousJourneys
            });
        });

        this.database.on('child_removed', snap => {
            for(var i=0; i<previousJourneys.length; i++){
                if(previousJourneys[i].id === snap.key){
                    previousJourneys.splice(i, 1);
                }
            }

            this.setState({
                journeys: previousJourneys
            });
        });
    }


    changeAddNewJourney(){

        this.setState({ addNewJourney: !this.state.addNewJourney});
        if(this.state.addNewJourney === true){
            this.setState({ textButton: 'Przeglądaj wycieczki'});
        }
        else{
            this.setState({ textButton: 'Dodaj wycieczkę'});
        }
      }

    addNewJourney(newPlace, newDescription, newStartDate, newEndDate, newCost){
        this.database.push().set({ 
            place: newPlace,
            description: newDescription,
            startDate: newStartDate,
            endDate: newEndDate,
            cost: newCost
        });
    }

    removeJourney(index){
        this.database.child(index).remove();
    }

    editJourney(){
        alert("Kierowniku pracujemy nad tym");
    }

    render(){
        return(
            <div className="journeyWrapper">
            <hr />
            
            <button className="journeyWrapper__button" onClick={this.changeAddNewJourney}> {this.state.textButton}</button>
            <hr />
            {this.state.addNewJourney ? <div className="innerWrapper">
                    <table className="table table-striped table-bordered table-hover 
                                      table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
                    <thead>
                        <tr>
                        <th scope="col">lp.</th>
                        <th scope="col">Dokąd?</th>
                        <th scope="col">Opis</th>
                        <th scope="col">Od kiedy?</th>
                        <th scope="col">Do kiedy?</th>
                        <th scope="col">Koszt</th>
                        <th scope="col">Szczegóły</th>
                        <th scope="col">Edytuj</th>
                        <th scope="col">Usuń</th>
                        </tr>
                    </thead>
                    <tbody> 
                    {this.state.journeys.map((journey, index) => {
                    return(
                        <tr key={journey.id}>
                        <td>{index+1}</td>
                        <td>{journey.place}</td>
                        <td>{journey.description}</td>
                        <td>{journey.startDate}</td>
                        <td>{journey.endDate}</td>
                        <td>{journey.cost}</td>
                        <td><button className="btn btn-info"
                            onClick={() => this.setState({
                                isOpen: true,
                                toDetailPlace: journey.place,
                                toDetailDescription: journey.description,
                                toDetailStartDate: journey.startDate,
                                toDetailEndDate: journey.endDate,
                                toDetailCost: journey.cost
                            }
                                )}
                            >Zobacz</button></td>
                        <td><button className="btn btn-warning" onClick={() => this.setState({
                                isOpen: true,
                                toDetailId: journey.id,
                                toDetailPlace: journey.place,
                                toDetailDescription: journey.description,
                                toDetailStartDate: journey.startDate,
                                toDetailEndDate: journey.endDate,
                                toDetailCost: journey.cost
                            }
                                )}>Edytuj</button></td>
                        <td><button className="btn btn-danger" onClick={() => this.removeJourney(journey.id) }>Usuń</button></td>
                    </tr>)}
                    )}
                    </tbody>
                    </table>
                </div> :
            <NewJourney addNewJourney={this.addNewJourney} /> }
            
            
            <JourneyDetails isOpen={this.state.isOpen} 
                            onClose={(event) => this.setState({ isOpen: false})}
                            place={this.state.toDetailPlace}
                            description={this.state.toDetailDescription}
                            startDate={this.state.toDetailStartDate}
                            endDate={this.state.toDetailEndDate}
                            cost={this.state.toDetailCost}
                            >
            </JourneyDetails>

            <JourneyEdit isOpen={this.state.isOpen} 
                            onClose={(event) => this.setState({ isOpen: false})}
                            id={this.state.toDetailId}
                            place={this.state.toDetailPlace}
                            description={this.state.toDetailDescription}
                            startDate={this.state.toDetailStartDate}
                            endDate={this.state.toDetailEndDate}
                            cost={this.state.toDetailCost}
                            >
            </JourneyEdit>
          </div>
        );
    }
}



export default Journey;