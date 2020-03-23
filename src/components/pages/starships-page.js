import React from 'react';

import {connect} from 'react-redux';
import *as actions from '../../actions';
import {bindActionCreators} from 'redux';


import ItemList from '../item-list';
import PersonalDetails from '../personal-details';


import withSWT from '../hoc';

const StarshipsPage = (props) => {
    const {
        testServiceData, data, loaded, 
        fetchObjs, fetchObjsRequested,
        fetchOneObj, fetchOneObjRequested, 
        oneObj, oneObjLoading
    } = props;
    
    return (
        <div className="row">
            <ItemList                
                getData = {testServiceData.getStarships}               
                getDataDetails = {testServiceData.getStarship}               
                renderItem = { (item) => {
                    return `${item.name}, crew: ${item.crew}`                    
                } }               
                itemArr = {data}               
                loaded = {loaded}                
                fetchObjs = {fetchObjs}              
                fetchOneObj = {fetchOneObj}                
                fetchObjsRequested = {fetchObjsRequested}                
                fetchOneObjRequested = {fetchOneObjRequested}
                />              
            <PersonalDetails
                itemDetails = {oneObj}
                itemLoading = {oneObjLoading}               
                renderItemDetail = { ( item ) => {
                        return (
                            <div className="media-body">
                                <h5 className="mt-0">{item.name}</h5>
                                <ul>
                                    <li>Rotation Period <strong>{item.model}</strong></li>
                                    <li>Cost in Credits <strong>{item.costInCredits}</strong></li>
                                    <li>Crew <strong>{item.crew}</strong></li>
                                    <li>Passengers <strong>{item.passengers}</strong></li>                                                                    
                                </ul>
                            </div>                                
                        );
                    } 
                }

            />                           
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state.starshipsList);
    return {
        data : state.starshipsList.starships,
        loaded: state.starshipsList.loaded,
        oneObj: state.starshipsList.oneStarship,
        oneObjLoading: state.starshipsList.oneStarshipLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    const {
        fetchStarships, fetchStarshipsRequested, 
        fetchOneStarship, fetchOneStarshipRequested
    } = bindActionCreators(actions, dispatch);

    return {
        fetchObjs: (newStarships) => {
            fetchStarships(newStarships)
        },
        fetchObjsRequested: fetchStarshipsRequested,
        fetchOneObj: (newOneStarship) => {
            fetchOneStarship(newOneStarship)
        },
        fetchOneObjRequested: fetchOneStarshipRequested
    }
}

export default withSWT()(connect(mapStateToProps, mapDispatchToProps)(StarshipsPage));