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
    }
};


const reducer = (state = init, action) => {

    return {
        peopleList: updatePeopleList(state, action),
        randomPlanet: updateRandomPlanet(state, action)
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





 

export default reducer;