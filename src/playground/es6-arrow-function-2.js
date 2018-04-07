// arguments object - no londer bound with arrow function 

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));
// this keyword - no longer bound

const user =  {
    name: "Vas",
    cities: ['London', 'Exeter', 'Taunton'],
    
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city );

        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + 'has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived() );

const multiplier = { 
    numbers: [2, 6, 12, 24],
    multiplyby: 4,

    multiply() {
        return this.numbers.map((number) => this.multiplyby * number);
    }
}


console.log(multiplier.multiply() );
