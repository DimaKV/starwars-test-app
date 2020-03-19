import React from 'react';


import ItemList from '../item-list';
import PersonalDetails from '../personal-details';

import withSWT from '../hoc';

const PeoplePage = ({testServiceData}) => {
    console.log(testServiceData);
    return (
        <div className="row">
            <ItemList 
                getData = {testServiceData.getPeople}
                getDataDetails = {testServiceData.getPerson}/>              
            <PersonalDetails />                           
        </div>
    )
};

export default withSWT()(PeoplePage);