import React from 'react';

import {connect} from 'react-redux';
import *as actions from '../../actions';
import {bindActionCreators} from 'redux';


import ItemList from '../item-list';
import PersonalDetails from '../personal-details';


import withSWT from '../hoc';

const PlanetsPage = (props) => {
    const {
        testServiceData, data, loaded, 
        fetchObjs, fetchObjsRequested,
        fetchOneObj, fetchOneObjRequested, 
        onePlanet, onePlanetLoading,
        clearOneObjData
    } = props;
    
    return (
        <div className="row">
            <ItemList
                {...props}                
                getData = {testServiceData.getPlanets}               
                getDataDetails = {testServiceData.getPlanet}               
                renderItem = { (item) => {
                    return `${item.name}, diam.: ${item.diameter}`                    
                } }               
                itemArr = {data}               
                loaded = {loaded}                
                fetchObjs = {fetchObjs}              
                fetchOneObj = {fetchOneObj}                
                fetchObjsRequested = {fetchObjsRequested}                
                fetchOneObjRequested = {fetchOneObjRequested}
                clearOneObjData = {clearOneObjData}
                />              
            <PersonalDetails
                itemDetails = {onePlanet}
                itemLoading = {onePlanetLoading}               
                renderItemDetail = { ( item ) => {
                        return (
                            <div className="media-body">
                                <h5 className="mt-0">{item.name}</h5>
                                <ul>
                                    <li>Rotation Period <strong>{item.rotationPeriod}</strong></li>
                                    <li>Population <strong>{item.population}</strong></li>                                                                    
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
    return {
        data : state.planetsList.planets,
        loaded: state.planetsList.loaded,
        onePlanet: state.planetsList.onePlanet,
        onePlanetLoading: state.planetsList.onePlanetLoading,
        localSearch: state.search.localSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    const {fetchPlanets, fetchPlanetsRequested, fetchOnePlanet, fetchOnePlanetRequested, clearOnePlanetData} = bindActionCreators(actions, dispatch);
    return {
        fetchObjs: (newPlanets) => {
            fetchPlanets(newPlanets)
        },
        fetchObjsRequested: fetchPlanetsRequested,
        fetchOneObj: (newOnePlanet) => {
            fetchOnePlanet(newOnePlanet)
        },
        fetchOneObjRequested: fetchOnePlanetRequested,
        clearOneObjData: clearOnePlanetData
    }
}

export default withSWT()(connect(mapStateToProps, mapDispatchToProps)(PlanetsPage));