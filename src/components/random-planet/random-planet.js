import React from 'react';
import './random-planet.css'

const RandomPlanet = () => {
    
    return (
            <div className="row">
                <div className="col-12">
                    <div className="card border-success mb-3">
                        <div className="card-header">Random Planet</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="media planet">
                                    <img src="https://via.placeholder.com/150x200" className="align-self-start mr-3" alt="..." />
                                    <div className="media-body">
                                    <h5 className="mt-0">Name</h5>
                                    <ul>
                                        <li>Population <strong>200000</strong></li>
                                        <li>Rotation Period <strong>24</strong></li>
                                        <li>Diameter <strong>12500</strong></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )

};

export default RandomPlanet;