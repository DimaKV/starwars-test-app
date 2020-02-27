import React , {Component} from 'react';
import './item-list.css';

import {connect} from 'react-redux';

import withSWT from '../hoc';


class ItemList extends Component{
    constructor(){
        super();       
    };


    componentDidMount(){
        const {testServiceData} = this.props;
        const data = testServiceData.getPeople();
        // console.log(data);
        this.props.peopleFetch(data);        
    }
    

    render(){
       
        const data = this.props.data;        
        const showItemList = data.map( (item) => {
            return (
                <li className="list-group-item list-group-item-action" key={item.id}>
                    <a href="#">{item.name}, {item.gender}</a>
                </li>
            )
        } );

        

        return(
        
            <div className="col-md-6">
                <div className="list-group list-item">
                    <ul className="list-group">
                        {showItemList}
                    </ul>
                </div>
            </div>            
       
        )

    }
};


const mapStateToProps = (state) => {    
    return {
      data: state.people
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        peopleFetch: (newPeople) => {
            
            return {
                type: 'FETCH_PEOPLE',
                payload: newPeople
            }
        } 
    }
}


export default withSWT()( connect(mapStateToProps, mapDispatchToProps)(ItemList) );