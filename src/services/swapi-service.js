const url = 'https://swapi.co/api/'

const getData = async (url) {
    const resp = await fetch(url);
    const body = await resp.json();
    return body;
}

getData(`${url}/people`)
.then ( (body) => console.log(body) );