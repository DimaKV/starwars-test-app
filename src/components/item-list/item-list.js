import React , {Component} from 'react';
import './item-list.css';

import Spinner from '../spinner';

import {connect} from 'react-redux';
import *as actions from '../../actions';

import withSWT from '../hoc';


class ItemList extends Component{
    constructor(){
        super();       
    };


    componentDidMount(){
        const {getData, fetchPeopleRequested} = this.props;
        fetchPeopleRequested(); // переводит loaded в false для отображения спинера. Это нужно при смене страницы только
        getData()
        .then( (data) =>  
            this.props.fetchPeople(data) 
        );       
                
    }

    getObj (id) {        
        const {getDataDetails, fetchPerson, fetchPersonRequested} = this.props;
        fetchPersonRequested(); //для спиннера
        getDataDetails(id)
        .then( (data) => {            
            fetchPerson(data);
        } );

    }
    

    render(){
       
        const {data, loaded } = this.props; // получаем от mapStateToProps
        // console.log('dada', data)
              
        const showItemList = data.map( (item, indx) => {
            return (
                <li 
                    className="list-group-item list-group-item-action"
                    onClick = { () => { this.getObj(indx);} } 
                    key={item.id}>

                        {item.name}, {item.gender}

                </li>
            )
        } );
        // console.log('showItemList', showItemList);

        const showContent = loaded ? showItemList : <Spinner />
        

        return(
        
            <div className="col-md-6">
                <div className="list-group list-item">
                    <ul className="list-group">
                        {showContent}
                    </ul>
                </div>
            </div>            
       
        )

    }
};


const mapStateToProps = (state) => {    
    return {
      data: state.peopleList.people,
      loaded: state.peopleList.loaded
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchPeople: (newPeople) => {
//             return dispatch(
//                 {
//                     type: 'FETCH_PEOPLE',
//                     payload: newPeople
//                 }
//             )
//         },
//         fetchPeopleRequested: () => {
//             return dispatch(
//                 {
//                     type: 'FETCH_PEOPLE_REQUESTED'
//                 }
//             )
//         },
//         fetchPerson: (newPerson) => {
//             return dispatch(
//                 {
//                     type: 'FETCH_PERSON',
//                     payload: newPerson
//                 }
//             )
//         },
//         fetchPersonRequested: () => {
//             return dispatch(
//                 {
//                     type: 'FETCH_PERSON_REQUESTED'
//                 }
//             )
//         }

//     }
// }


export default connect(mapStateToProps, actions)(ItemList);