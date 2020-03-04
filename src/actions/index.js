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

const fetchPerson = (newPerson) => {
    return {
        type: 'FETCH_PERSON',
        payload: newPerson
    }
}

const fetchPersonHandler = (newPerson) => {
    return {
        type: 'FETCH_PERSON_HANDLER',
        payload: newPerson
    }
}

export {
    fetchPeople,
    fetchPeopleRequested,
    fetchPerson
};