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
        peopleFetchRequested();
        testServiceData.getPeople()
        .then( (data) =>  
            this.props.peopleFetch(data) 
        );       
                
    }
    

    render(){
       
        const {data, loaded } = this.props; // получаем от mapStateToProps
        // console.log('dada', data)
              
        const showItemList = data.map( (item) => {
            return (
                <li className="list-group-item list-group-item-action" key={item.id}>
                    <a href="#">{item.name}, {item.gender}</a>
                </li>
            )
        } );

        const showComponent = loaded ? showItemList : <Spinner />
        

        return(
        
            <div className="col-md-6">
                <div className="list-group list-item">
                    <ul className="list-group">
                        {showComponent}
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
        } 
    }
}


export default withSWT()( connect(mapStateToProps, mapDispatchToProps)(ItemList) );