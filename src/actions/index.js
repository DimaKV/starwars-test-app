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


const fetchPlanets = (newPlanet) => {
    return {
        type: 'FETCH_PLANETS',
        payload: newPlanet
    }
};

const fetchPlanetsRequested  = () => {
    return {
        type: "FETCH_PLANETS_REQUESTED"
    }
};

const fetchOnePlanet = (newOnePlanet) => {
    return {
        type: 'FETCH_ONE_PLANET',
        payload: newOnePlanet
    }
};

const fetchOnePlanetRequested = () => {
    return {
        type: 'FETCH_ONE_PLANET_REQUESTED'
    }
};





const fetchStarships = (newStarships) => {
    return {
        type: 'FETCH_STARSHIPS',
        payload: newStarships
    }
};

const fetchStarshipsRequested  = () => {
    return {
        type: "FETCH_STARSHIPS_REQUESTED"
    }
};

const fetchOneStarship = (newOneStarship) => {
    return {
        type: 'FETCH_ONE_STARSHIP',
        payload: newOneStarship
    }
};

const fetchOneStarshipRequested = () => {
    return {
        type: 'FETCH_ONE_STARSHIP_REQUESTED'
    }
};







export {
    fetchPeople,
    fetchPeopleRequested,
    fetchPerson,
    fetchPersonRequested,
    fetchRandomPlanet,
    fetchRandomPlanetRequested,
    fetchPlanets,
    fetchPlanetsRequested,
    fetchOnePlanet,
    fetchOnePlanetRequested,
    fetchStarships,
    fetchStarshipsRequested,
    fetchOneStarship,
    fetchOneStarshipRequested
};