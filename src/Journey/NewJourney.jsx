import React, { Component } from 'react';



class NewJourney extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            newPlace: '',
            newDescription: '',
            newStartDate: '',
            newEndDate: '',
            newCost: 0
        }
        
        this.handlePlaceChange = this.handlePlaceChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleCostChange = this.handleCostChange.bind(this);
        this.newJourney = this.newJourney.bind(this);
        
    }

    handlePlaceChange(event){
        this.setState({ newPlace: event.target.value});
    }

    handleDescriptionChange(event){
        this.setState({ newDescription: event.target.value});
    }

    handleStartDateChange(event){
        this.setState({ newStartDate: event.target.value});
    }

    handleEndDateChange(event){
        this.setState({ newEndDate: event.target.value});
    }

    handleCostChange(event){
        this.setState({ newCost: event.target.value});
    }

    
    newJourney() {
        console.log("Co ma w sobie this: " + this.props.addNewJourney);
        this.props.addNewJourney( 
            this.state.newPlace,
            this.state.newDescription,
            this.state.newStartDate,
            this.state.newEndDate,
            this.state.newCost );

        this.setState({
            newPlace: '',
            newDescription: '',
            newStartDate: '',
            newEndDate: '',
            newCost: 0
        });  
    }

    render() {
        return(
            <div className="containerNewJourney">
                <hr />
                <h2>Dodaj nową wycieczkę</h2>
                <hr />
                <form onSubmit={this.newJourney}>
                    <p>
                        <label>Miejsce docelowe: </label> 
                        <input type="text" 
                                placeholder="może Hiszpania?" 
                                name="newPlace" 
                                onChange={this.handlePlaceChange} />
                    </p>
                    
                    <p>
                        <label>Opis: </label> 
                        <input type="text" 
                                placeholder="Gorący klimat..." 
                                name="newDescription" 
                                onChange={this.handleDescriptionChange}/>
                    </p>
                    
                    <p>
                        <label>Od kiedy? </label> 
                        <input type="text" 
                                placeholder="DD-MM-RRRR" 
                                name="newStartDate" 
                                onChange={this.handleStartDateChange} />
                    </p>
                 
                    <p>
                        <label>Do kiedy? </label> 
                        <input type="text" 
                                placeholder="DD-MM-RRRR" 
                                name="newEndDate" 
                                onChange={this.handleEndDateChange}/>
                    </p>

                    <p>
                        <label>Koszt: </label> 
                        <input type="text" 
                                placeholder="max ile zł?" 
                                name="newCost" 
                                onChange={ this.handleCostChange}/>
                    </p>

                    <p>
                        <input type="submit" className="btn btn-success" value="Dodaj wycieczkę" />
                    </p>

                </form>
            </div>
        );
    }
}

export default NewJourney;