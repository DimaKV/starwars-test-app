import React, {Component} from 'react';
import './random-planet.css';

import Spinner from '../spinner';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import *as actions from '../../actions';

import withSWT from '../hoc';



class RandomPlanet extends Component {

    

    constructor(){
        super();
        this.intervalID = undefined;
    }

    // генерирует id, получает рандомную планету, перезаписывает стейт
    updateData() {
        const {testServiceData, fetchRandomPlanet } = this.props;        

        const id = Math.ceil(Math.random()*10);           
        testServiceData.getPlanet(id)
        .then( (data) => fetchRandomPlanet(data) );
    }

    
    //деалет запрос, запусает random
    uploadData () {
        const {fetchRandomPlanetRequested} = this.props;
        fetchRandomPlanetRequested();
        this.updateData ();        
        this.intervalID = setInterval( () => {
            this.updateData ();
        }, 4000 );
    }

    //фукция висит на кнопке. Останавливает или запускает рандом
    toggleRandomPlanet(){
        // console.log(this.intervalID);
        if(this.intervalID) {
            clearInterval(this.intervalID);
            this.intervalID = undefined;
        } else {
            this.uploadData();
        }
        
    }
    
    // после отрисовки компонента далет запрос к серверу для получения данных
    componentDidMount(){
        this.uploadData();
    }   

    componentWillUnmount(){
        console.log('planet gone');
        clearInterval(this.intervalID);
    }

    render(){

        const {planet, loading} = this.props;        
        const randomPlanet = (
          
                <div className="media planet">
                    <img src={planet.image} className="align-self-start mr-3" alt="..." />
                    <div className="media-body">
                        <h5 className="mt-0">{planet.name}</h5>
                        <ul>
                            <li>Population <strong>{planet.population}</strong></li>
                            <li>Rotation Period <strong>{planet.rotationPeriod}</strong></li>
                            <li>Diameter <strong>{planet.diameter}</strong></li>
                        </ul>
                        <button className="btn btn-warning" 
                            onClick={this.toggleRandomPlanet.bind(this)}> 
                            Stop/Start RandomPlanet
                        </button>                    
                    </div>
                </div>               
            
        );        
        const showContent = loading ? <Spinner /> : randomPlanet;
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card border-success mb-3">
                        <div className="card-header">Random Planet</div>
                        <div className="card-body">
                            <div className="row">
                                {showContent}
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }      
    

};

const mapStateToProps = (state) => {
    // console.log('state', state);
    return {
        planet: state.randomPlanet.planet,
        loading: state.randomPlanet.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    const {fetchRandomPlanetRequested, fetchRandomPlanet} = bindActionCreators(actions, dispatch);
    return {
        fetchRandomPlanet: (newRandomPlanet) => {
            fetchRandomPlanet(newRandomPlanet)
        },
        fetchRandomPlanetRequested : fetchRandomPlanetRequested
    }
}

export default withSWT()(connect(mapStateToProps, mapDispatchToProps)(RandomPlanet));





