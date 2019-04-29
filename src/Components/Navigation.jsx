import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Naviagation extends Component{
    render(){
        return(
            <div>
                <hr />
                <h1>Biuro turystyczne ButterMilk</h1>
                <hr />
                <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="nav nav-pills nav-fill mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><span className="sr-only">(current)</span> Strona Główna </Link>  
                            </li>
                            <li className="nav-item">
                                <Link to="/newjourney" className="nav-link"> Dodaj nową wycieczkę </Link>  
                            </li>
                           
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Wyszukaj wycieczkę" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Wyszukaj</button>
                        </form>
                    </div>
                </nav> 
            </div>
        );
    }
}

export default Naviagation;