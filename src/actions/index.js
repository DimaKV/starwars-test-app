const peopleFetch = (newPeople) => {
    return {
        type: 'FETCH_PEOPLE',
        action: newPeople
    }
};

export {
    peopleFetch
};