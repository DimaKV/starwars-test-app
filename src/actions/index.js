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
};

const fetchPerson = (newPerson) => {
    return {
        type: 'FETCH_PERSON',
        payload: newPerson
    }
};

const fetchPersonRequested = () => {
    return {
        type: 'FETCH_PERSON_REQUESTED'
    }
};

const fetchRandomPlanet = (newPlanet) => {
    return {
        type: 'FETCH_RANDOM_PLANET',
        payload: newPlanet
    }
};

const fetchRandomPlanetRequested = () => {
    return {
        type: 'FETCH_RANDOM_PLANET_REQUESTED'
    }
};

export {
    fetchPeople,
    fetchPeopleRequested,
    fetchPerson,
    fetchPersonRequested,
    fetchRandomPlanet,
    fetchRandomPlanetRequested
};