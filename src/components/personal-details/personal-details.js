import React from 'react';
import './personal-details.css';

import Spinner from '../spinner';

import {connect} from 'react-redux';

import withSWT from '../hoc';

const PersonalDetails = ( {person} ) => {
    const {name, gender, eyeColor} = person;
    return (
        <div className="col-md-6">
            <div className="card border-primary mb-3">
                <div className="card-header">Description</div>
                <div className="card-body">
                    <div className="row">
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
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        person: state.peopleList.person
    }
}

export default connect(mapStateToProps)(PersonalDetails);