import React, { Component } from 'react';
import './JourneyDetails.css';


class JourneyDetails extends Component{
   render() {

    let details = (
        <div className="journeyDetailsStyles">
            <button className="journeyDetails_buttonStyles"
                    onClick={this.props.onClose}>Zamknij</button>
            <h2>Kierunek wycieczki: {this.props.place}</h2>
            <p>Opis: {this.props.description}</p>
            <p>Od kiedy: {this.props.startDate}</p>
            <p>Do kiedy: {this.props.endDate}</p>
            <p>Koszt: {this.props.cost}</p>
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