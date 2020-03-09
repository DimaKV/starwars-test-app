import React , {Component} from 'react';
import './item-list.css';

import Spinner from '../spinner';

import {connect} from 'react-redux';

import withSWT from '../hoc';


class ItemList extends Component{
    constructor(){
        super();       
    };


    componentDidMount(){
        const {testServiceData, peopleFetchRequested} = this.props;
        peopleFetchRequested(); // переводит loaded в false для отображения спинера. Это нужно при смене страницы только
        testServiceData.getPeople()
        .then( (data) =>  
            this.props.peopleFetch(data) 
        );       
                
    }

    getPerson (id) {        
        const {testServiceData, personFetch, personFetchRequest} = this.props;
        personFetchRequest(); //для спиннера
        testServiceData.getPerson(id)
        .then( (data) => {            
            personFetch(data);
        } );

    }
    

    render(){
       
        const {data, loaded } = this.props; // получаем от mapStateToProps
        // console.log('dada', data)
              
        const showItemList = data.map( (item, indx) => {
            return (
                <li 
                    className="list-group-item list-group-item-action"
                    onClick = { () => { this.getPerson(indx);} } 
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

const mapDispatchToProps = (dispatch) => {
    return {
        peopleFetch: (newPeople) => {
            return dispatch(
                {
                    type: 'FETCH_PEOPLE',
                    payload: newPeople
                }
            )
        },
        peopleFetchRequested: () => {
            return dispatch(
                {
                    type: 'FETCH_PEOPLE_REQUESTED'
                }
            )
        },
        personFetch: (newPerson) => {
            return dispatch(
                {
                    type: 'FETCH_PERSON',
                    payload: newPerson
                }
            )
        },
        personFetchRequest: () => {
            return dispatch(
                {
                    type: 'FETCH_PERSON_REQUEST'
                }
            )
        }

    }
}


export default withSWT()( connect(mapStateToProps, mapDispatchToProps)(ItemList) );