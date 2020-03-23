import React from 'react';
import './personal-details.css';

import Spinner from '../spinner';



const PersonalDetails = ( {itemDetails, itemLoading, renderItemDetail} ) => {
        
    const {id, image} = itemDetails;
    const label = renderItemDetail(itemDetails);
    
    const personalDescr = (
        <div className="row" key={id}>
            <div className="media descr-item">
                <img src={image} className="align-self-start mr-3" alt="..." />                                   
                {label}
            </div>
        </div>
    );
    

   
    // console.log(name, personLoading);
    const showMessage = (!id && !itemLoading) ? <h5>make a choise please</h5> : null; 
    const showPersonalDescr = (id && !itemLoading) ? personalDescr : null;
    const showSpinner = (itemLoading) ? <Spinner/>: null;
    
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

// const mapStateToProps = (state) => {
//     return {
//         person: state.peopleList.person,
//         personLoading: state.peopleList.personLoading
//     }
// }

export default PersonalDetails;