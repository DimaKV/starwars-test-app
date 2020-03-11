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
    
    if (state===undefined) {       
        return state;
    }
    switch (action.type){
        //этот action нужен для того, что бы сбросить loaded в false. Что бы спинер отображался при смене страниц, например
        case 'FETCH_PEOPLE_REQUESTED': {
            return {
                ...state,
                peopleList: {
                    ...state.peopleList,
                    people : [],
                    loaded: false                     
                }
            }
        }
        case 'FETCH_PEOPLE': {            
            return {
                ...state,                
                peopleList: {
                    ...state.peopleList,
                    people : action.payload,
                    loaded: true 
                }
                
            } 
        }
        //задача этого action -  personLoading сделать true, что бы отобразился спиннер,
        //пока данные не загрузились
        case 'FETCH_PERSON_REQUEST': {            
            return {
                ...state,
                peopleList: {
                    ...state.peopleList,                    
                    personLoading: true
                }
            }
        }
        case 'FETCH_PERSON': {            
            return {
                ...state,
                peopleList: {
                    ...state.peopleList,
                    person: action.payload,
                    personLoading: false
                }
            }
        }
        default: {            
            return state;
        }

        

    }
    
}

export default reducer;