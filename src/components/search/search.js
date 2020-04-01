import React, {Component} from 'react';

import *as actions from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Search extends Component{

    componentWillUnmount(){
        this.props.cleanData();
    }

    render(){

        const {updateData,search} = this.props;

        const updateSearchState = (e) => {        
            if (e.target.value === ' ') return;
            updateData(e.target.value);
        }
    
        return (
            <div className="form-group has-success">                    
                <input type="text" 
                    value={search} placeholder="search from list by name" 
                    className="form-control" id="inputValid"
                    onChange={updateSearchState}
                />                    
            </div>
        )


    }

}

const mapStateToProps = (state) => {
    // console.log('s', state.search.localSearch)
    return {
        search: state.search.localSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    
    const {updateSearchData, cleaneSearchData} = bindActionCreators(actions, dispatch);

    return {
        updateData: (str) => {
            updateSearchData(str);
        },
        cleanData: cleaneSearchData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);