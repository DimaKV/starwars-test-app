const init = {   
    peopleList: {
        people: [
            {id: 1, name: 'Aq', gender: 'male' },
            {id: 2, name: 'B', gender: 'female'}
        ],
        loaded: false,
        personLoading: false,
        person: {}     
    },
    randomPlanet: {
        planet:{
            id:1,
            name: 'Earth',
            rotationPeriod: 365,
            diameter: 10000,
            population: 7000000 
        },
        loading: false
    },
    planetsList: {
        planets: [],
        loaded: false,
        onePlanetLoading: false,
        onePlanet: {}     
    },
    starshipsList: {
        starships: [
            {id: 1, name: 'Aq', gender: 'male' },
            {id: 2, name: 'B', gender: 'female'}
        ],
        loaded: false,
        oneStarshipLoading: false,
        oneStarship: {}     
    },
};


const reducer = (state = init, action) => {

    return {
        peopleList: updatePeopleList(state, action),
        randomPlanet: updateRandomPlanet(state, action),
        planetsList: updatePlanetsList(state, action),
        starshipsList: updateStarshipsList(state, action)
    };
};


const updatePeopleList = (state, action) => {
    if (state === undefined) {
        return state.peopleList;
    }

    switch (action.type) {

        //этот action нужен для того, что бы сбросить loaded в false. 
        //Что бы спинер отображался при смене страниц, например
        case 'FETCH_PEOPLE_REQUESTED': {
            return {                
                ...state.peopleList,
                people : [],
                loaded: false   
            }
        }
        case 'FETCH_PEOPLE': {            
            return {                               
                ...state.peopleList,
                people : action.payload,
                loaded: true 
                
            } 
        }
        //задача этого action -  personLoading сделать true, что бы отобразился спиннер,
        //пока данные не загрузились
        case 'FETCH_PERSON_REQUESTED': {            
            return {                
                ...state.peopleList,                    
                personLoading: true
            }
        }
        case 'FETCH_PERSON': {            
            return {                
                ...state.peopleList,
                person: action.payload,
                personLoading: false
            }
        }

        default: 
        return state.peopleList;

    }
};

const updateRandomPlanet = (state, action) => {

    if (state===undefined) {       
        return state.randomPlanet;
    }


    switch (action.type){       
        

        //задача этого action -  loading сделать true, что бы отобразился спиннер,
        //один раз при первой подгузке планеты
        case 'FETCH_RANDOM_PLANET_REQUESTED': {
            return {              
                planet: [],
                loading: true
            }
        }
        case 'FETCH_RANDOM_PLANET': {
            return {                
                planet: action.payload,
                loading: false
            }
        }
        default: {            
            return state.randomPlanet;
        }
    }

};

const updatePlanetsList = (state, action) => {

    if (state === undefined) {
        return state.planetsList;
    }

    switch (action.type) {

        
        case 'FETCH_PLANETS_REQUESTED': {
            return {                
                ...state.planetsList,
                planets : [],
                loaded: false   
            }
        }
        case 'FETCH_PLANETS': {            
            return {                               
                ...state.planetsList,
                planets : action.payload,
                loaded: true 
                
            } 
        }
        //задача этого action -  personLoading сделать true, что бы отобразился спиннер,
        //пока данные не загрузились
        case 'FETCH_ONE_PLANET_REQUESTED': {            
            return {                
                ...state.planetsList,                    
                onePlanetLoading: true
            }
        }
        case 'FETCH_ONE_PLANET': {            
            return {                
                ...state.planetsList,
                onePlanet: action.payload,
                onePlanetLoading: false
            }
        }

        default: 
        return state.planetsList;

    }

};


const updateStarshipsList = (state, action) => {

    if (state === undefined) {
        return state.starshipsList;
    }

    switch (action.type) {

        
        case 'FETCH_STARSHIPS_REQUESTED': {
            return {                
                ...state.starshipsList,
                starships : [],
                loaded: false   
            }
        }
        case 'FETCH_STARSHIPS': {            
            return {                               
                ...state.starshipsList,
                starships : action.payload,
                loaded: true 
                
            } 
        }
        //задача этого action -  personLoading сделать true, что бы отобразился спиннер,
        //пока данные не загрузились
        case 'FETCH_ONE_STARSHIP_REQUESTED': {            
            return {                
                ...state.starshipsList,                    
                oneStarshipLoading: true
            }
        }
        case 'FETCH_ONE_STARSHIP': {            
            return {                
                ...state.starshipsList,
                oneStarship: action.payload,
                oneStarshipLoading: false
            }
        }

        default: 
        return state.starshipsList;

    }
};





 

export default reducer;