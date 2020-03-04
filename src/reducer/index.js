const init = {   
    peopleList: {
        people: [
            {id: 1, name: 'Aq', gender: 'male' },
            {id: 2, name: 'B', gender: 'female'}
        ],
        loaded: false,
        activePerson: undefined,
        person: {id: 1, name: 'Aq', gender: 'male', eyeColor: 'b'}     
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
                peopleList: {
                    ...state.peopleList,
                    people : [],
                    loaded: false                     
                }
            }
        }
        case 'FETCH_PEOPLE': {            
            return {                
                peopleList: {
                    ...state.peopleList,
                    people : action.payload,
                    loaded: true 
                }
                
            } 
        }
        case 'FETCH_PERSON': {
            return {
                peopleList: {
                    ...state.peopleList,
                    person: action.payload
                }
            }
        }
        default: {
            // console.log('defaults works');
            return state;
        }

        

    }
    
}

export default reducer;