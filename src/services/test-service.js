export default class testService{
    
    constructor(){

        this.people = [
            {
                id:1,
                name: 'John Newton',
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


    }

    getPeople() {
        return this.people;
    }

    getPerson(id){
        return this.people[id];
    }
}