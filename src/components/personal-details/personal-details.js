import React from 'react';
import './personal-details.css';

import Spinner from '../spinner';

import {connect} from 'react-redux';


const PersonalDetails = ( {person, personLoading} ) => {
        
    const {id, name, gender, eyeColor} = person;
    
    const personalDescr = (
        <div className="row" key={id}>
            <div className="media descr-item">
                <img src="https://via.placeholder.com/150x200" className="align-self-start mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">{name}</h5>
                    <ul>
                        <li>Gender <strong>{gender}</strong></li>
                        <li>Eye Color <strong>{eyeColor}</strong></li>
                    </ul>
                </div>
                </div>
        </div>
    );
    

   
    console.log(name, personLoading);
    const showMessage = (!name && !personLoading) ? <h5>make a choise please</h5> : null; 
    const showPersonalDescr = (name && !personLoading) ? personalDescr : null;
    const showSpinner = (personLoading) ? <Spinner/>: null;
    
    return (
        <div className="col-md-6">
            <div className="card border-primary mb-3">
                <div className="card-header">Description</div>
                <div className="card-body">
                    {showMessage}
                    {showPersonalDescr}
                    {showSpinner}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        person: state.peopleList.person,
        personLoading: state.peopleList.personLoading
    }
}

export default connect(mapStateToProps)(PersonalDetails);