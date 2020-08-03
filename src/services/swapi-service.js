class SwapiService {
   constructor(){
       this._apiBase = 'https://swapi.dev/api';
       this._imageBase = 'https://starwars-visualguide.com/assets/img';
   }

   getResources = async (url) => {
        let res = await fetch(`${this._apiBase}${url}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",                
                "Access-Control-Allow-Credentials": true
            }
        });
        if (!res.ok) {
            throw new Error (`error with ${url} and receive ${res.status}`);
        }
        const body = await res.json();
        return body;
    }

    getPeople = async () => {
        //хотим только получить массив данных людей
        const res = await this.getResources(`/people/`);
        return res.results.map(this._transformPerson);
    }


    getPerson = async (id) => {       
        const person = await this.getResources(`/people/${id}`);
        return this._transformPerson(person);
    }

    getPlanets = async () => {
        const res = await this.getResources(`/planets/`);       
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResources(`/planets/${id}`);
        return this._transformPlanet(planet);
    }


    getStarships = async () => {
        const res = await this.getResources(`/starships/`);       
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResources(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    



    getPersonImage = (id) => {
        return `${this._imageBase}/characters/${id}.jpg`
    };
    
    getStarshipImage = (id) => {
        return `${this._imageBase}/starships/${id}.jpg`
    };
    
    getPlanetImage = (id) => {
        return `${this._imageBase}/planets/${id}.jpg`
    };
    
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };
    
    
    _transformPerson = (person) => {
        const newID = this._extractId(person);        
        return {
          id: newID,
          name: person.name,
          gender: person.gender,
          birthYear: person.birth_year,
          eyeColor: person.eye_color,
          image: this.getPersonImage(newID)
        }
    };
    
    
    _transformPlanet = (planet) => {
        const newID = this._extractId(planet);
        return {
          id: newID,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        //   image: this.getPlanetImage(newID)
       };
    };

    
    
    _transformStarship = (starship) => {
       const newID = this._extractId(starship);
       return {
          id: newID,
          name: starship.name,
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.cost_in_credits,
          length: starship.length,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargo_capacity,
          image: this.getStarshipImage(newID)
        }
    };   
    


}

export default SwapiService;