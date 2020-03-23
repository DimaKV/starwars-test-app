export default class testService{
    
    constructor(){

        this.people = [
            {
                id:1,
                name: 'John Newton!',
                gender: 'male',
                birthYear: '1643',
                eyeColor: 'brown'
            },
            {
                id:2,
                name: 'Alber Einstein',
                gender: 'male',
                birthYear: '1879',
                eyeColor: 'blue'
            },
            {
                id:3,
                name: 'Iogan Kepler',
                gender: 'male',
                birthYear: '1571',
                eyeColor: 'black'
            }
        ];


        this.planets = [
            {
                id:1,
                name: 'Planet1',
                rotationPeriod: '304',
                diameter: 10465,
                population: 200000
            },
            {
                id:2,
                name: 'Planet2',
                rotationPeriod: '305',
                diameter: 12465,
                population: 500000
            },
            {
                id:3,
                name: 'Planet3',
                rotationPeriod: '306',
                diameter: 8465,
                population: 100000
            }
        ];


    }

    //добавляем искусственную ассинхронность через setTimeout и promise
    getPeople = () => {
        return new Promise( (resolve) => {
            setTimeout( () => {resolve(this.people); }, 700);
        } );
    }

    getPerson = (id) => {
        return new Promise( (resolve) => {
            setTimeout( () => { resolve(this.people[id]); }, 700 );
        } );
    }

    getPlanets = () => {
        return new Promise( (resolve) => {
            setTimeout( () => {resolve(this.planets); }, 700);
        } );
    }

    getPlanet = (id) => {
        return new Promise( (resolve) => {
            setTimeout( () => { resolve(this.planets[id]); }, 700 );
        } );
    }
    

   
}