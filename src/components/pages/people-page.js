import React from 'react';

import {connect} from 'react-redux';
import *as actions from '../../actions';
import {bindActionCreators} from 'redux';


import ItemList from '../item-list';
import PersonalDetails from '../personal-details';


import withSWT from '../hoc';

const PeoplePage = (props) => {
    // console.log('PeoplePage', props);
    const {
        testServiceData, data, loaded, localSearch,
        fetchPeople, fetchPeopleRequested,
        fetchPerson, fetchPersonRequested, 
        person, personLoading, clearOneObjData
    } = props;

    
    
    return (
       
       
        <div className="row">
            
            <ItemList
                {...props}
                //функция для получения всего массива людей                
                getData = {testServiceData.getPeople}

                //фуннкция для получения данных одного человека
                getDataDetails = {testServiceData.getPerson}
                
                //шаблон данных для вывода людей в списке
                renderItem = { (item) => {
                    return `${item.name}, ${item.gender}`                    
                } }
                
                //данные людей, которые хранятся в sate
                itemArr = {data}

                //фраза поиска по списку
                localSearch = {localSearch}
                
                // индикатор: загружен компонент или нет
                loaded = {loaded}
                
                //очищает person
                clearOneObjData = {clearOneObjData}
                               
                // action для получения данных с сервера и записи их в state 
                fetchObjs = {fetchPeople}
                
                // action для получения данных по конкретному человеку с сервера и записи их в state
                fetchOneObj = {fetchPerson}
                
                // action для перевода состояния компонента "загруженны ли данные" в false и записи это состояниы в state
                fetchObjsRequested = {fetchPeopleRequested}
                
                // action для перевода состояния компонента "данные загружаются" в true и записи это состояниы в state
                fetchOneObjRequested = {fetchPersonRequested}               
                
                />              
            <PersonalDetails               
                itemDetails = {person}
                itemLoading = {personLoading}
                //функция, которая определяет шаблон вывода деталей по конкретному объекту
                renderItemDetail = { ( item ) => {
                        return (
                            <div className="media-body">
                                <h5 className="mt-0">{item.name}</h5>
                                <ul>
                                    <li>Gender <strong>{item.gender}</strong></li>
                                    <li>Eye Color <strong>{item.eyeColor}</strong></li>
                                    <li>Birth Year <strong>{item.birthYear}</strong></li>
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
        data : state.peopleList.people,
        loaded: state.peopleList.loaded,
        person: state.peopleList.person,
        personLoading: state.peopleList.personLoading,
        localSearch: state.search.localSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    const {fetchPeople, fetchPeopleRequested, fetchPerson, fetchPersonRequested, clearPersonData} = bindActionCreators(actions, dispatch);
    return {
        fetchPeople: (newPeople) => {
            fetchPeople(newPeople)
        },
        fetchPeopleRequested: fetchPeopleRequested,
        fetchPerson: (newPerson) => {
            fetchPerson(newPerson)
        },
        fetchPersonRequested: fetchPersonRequested,
        clearOneObjData: clearPersonData
    }
}

export default withSWT()(connect(mapStateToProps, mapDispatchToProps)(PeoplePage));