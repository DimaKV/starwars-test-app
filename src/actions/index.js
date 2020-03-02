const fetchPeople = (newPeople) => {
    return {
        type: 'FETCH_PEOPLE',
        payload: newPeople
    }
};

const fetchPeopleRequested  = () => {
    return {
        type: "FETCH_PEOPLE_REQUESTED"
    }
} 

export {
    fetchPeople,
    fetchPeopleRequested
};