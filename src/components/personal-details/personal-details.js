import React from 'react';
import './personal-details.css';

const PersonalDetails = () => {
    return (
        <div className="col-md-6">
            <div className="card border-primary mb-3">
                <div className="card-header">Description</div>
                <div className="card-body">
                    <div className="row">
                        <div className="media descr-item">
                            <img src="https://via.placeholder.com/150x200" class="align-self-start mr-3" alt="..." />
                            <div className="media-body">
                                <h5 className="mt-0">Name</h5>
                                <ul>
                                    <li>Gender <strong>female</strong></li>
                                    <li>Eye Color <strong>brown</strong></li>
                                </ul>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails;