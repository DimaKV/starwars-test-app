import React from 'react';

import {connect} from 'react-redux';
import *as actions from '../../actions';
import {bindActionCreators} from 'redux';


import ItemList from '../item-list';
import PersonalDetails from '../personal-details';


import withSWT from '../hoc';

const PeoplePage = ({testServiceData, data, loaded, fetchPeople, fetchPerson, fetchPeopleRequested, fetchPersonRequested}) => {
    console.log('fetchPeopleRequested', fetchPeopleRequested);
    return (
        <div className="row">
            <ItemList                
                getData = {testServiceData.getPeople}
                getDataDetails = {testServiceData.getPerson}
                data = {data}
                loaded = {loaded} 
                fetchObjs = {fetchPeople}
                fetchOneObj = {fetchPerson}
                fetchObjsRequested = {fetchPeopleRequested}
                fetchOneObjRequested = {fetchPersonRequested}
                />              
            <PersonalDetails />                           
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        data : state.peopleList.people,
        loaded: state.peopleList.loaded
    }
}

const mapDispatchToProps = (dispatch) => {
    const {fetchPeople, fetchPeopleRequested, fetchPerson, fetchPersonRequested} = bindActionCreators(actions, dispatch);
    return {
        fetchPeople: (newPeople) => {
            fetchPeople(newPeople)
        },
        fetchPeopleRequested: fetchPeopleRequested,
        fetchPerson: (newPerson) => {
            fetchPerson(newPerson)
        },
        fetchPersonRequested: fetchPersonRequested
    }
}

export default withSWT()(connect(mapStateToProps, mapDispatchToProps)(PeoplePage));