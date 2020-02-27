const init = {   
    people: [
        {id: 1, name: 'Aq', gender: 'male' },
        {id: 2, name: 'B', gender: 'female'}
    ]    
};



const reducer = (state = init, action) => {
    
    if (state===undefined) {       
        return state;
    }
    switch (action.type){
        case 'FETCH_PEOPLE': {
            console.log('fetch works');
            return {                
                people : action.payload 
            } 
        }
        default: {
            console.log('defaults works');
            return state;
        }

        

    }
    
}

export default reducer;