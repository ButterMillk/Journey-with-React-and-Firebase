import React, { Component } from 'react';
import './JourneyDetails.css';


class JourneyDetails extends Component{
   render() {

    let details = (
    
 
        // updateJourney: (id, data) => {
        //     let ref = firebaseDb.ref('Journey');
        //     return ref
        //       .child(id)
        //       .update(data)
        //       .then(() => ref.once('value'))
        //       .then(snapshot => snapshot.val())
        //       .catch(error => ({
        //         errorCode: error.code,
        //         errorMessage: error.message
        //       }));
        //   }
    
       

        <div className="journeyDetailsStyles">
            <button className="journeyDetails_buttonStyles"
                    onClick={this.props.onClose}>Zamknij</button>
            <p>Kierunek wycieczki:  <input type="text" value={this.props.place} /></p>
            <p>Opis: <input type="text" value={this.props.description} /></p>
            <p>Od kiedy: <input type="text" value={this.props.startDate} /></p>
            <p>Do kiedy: <input type="text" value={this.props.endDate} /></p>
            <p>Koszt: <input type="text" value={this.props.cost} /></p>
            <p>Kierowniku pracujemy nad tą funkcją</p>
            <button>Zmień</button>
        </div>);

        if (!this.props.isOpen) {
            details = null;
        }

       return(
            <div>
                {details}
            </div>
       );
   }
}

export default JourneyDetails;