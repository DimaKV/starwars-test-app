import React , {Component} from 'react';
import './item-list.css';

import Spinner from '../spinner';


class ItemList extends Component{
    constructor(){
        super();       
    };


    componentDidMount(){
        const {getData, fetchObjsRequested, fetchObjs} = this.props;
        fetchObjsRequested(); // переводит loaded в false для отображения спинера. Это нужно при смене страницы только
        getData()
        .then( (data) =>  
            fetchObjs(data) 
        );       
                
    }

    getObj (id) {        
        const {getDataDetails, fetchOneObj, fetchOneObjRequested} = this.props;
        fetchOneObjRequested(); //для спиннера
        getDataDetails(id)
        .then( (data) => {            
            fetchOneObj(data);
        } );

    }
    

    render(){
       
        const {itemArr, loaded, renderItem } = this.props; // получаем от PeoplePage
        // console.log('dada ItemList', itemArr)
              
        const showItemList = itemArr.map( (item, indx) => {
            const label = renderItem(item);
            // console.log(label);
            return (
                <li 
                    className="list-group-item list-group-item-action"
                    onClick = { () => { this.getObj(item.id);} } 
                    key={item.id}>

                        {label}

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


// const mapStateToProps = (state) => {    
//     return {
//       data: state.peopleList.people,
//       loaded: state.peopleList.loaded
//     }
// };

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


export default ItemList;