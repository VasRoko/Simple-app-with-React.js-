// Set up const name + age (default to 0)
// GetDescription - take in Age Vas Roko is 26 year(s) old

class Person { 
    constructor( name = 'No Name Provided', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old, `;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor() ) {
            description += `Their major is ${this.major}`;
        }

        return description;
    }
}


class Traveler extends Person {
    constructor(name, age, homelocation) {

        super(name, age);
        this.homelocation = homelocation;
    }

    getGretting(){
        let grettings = super.getGretting();
        
        if(this.homelocation) {
            grettings += ` is from ${this.homelocation}`;

        }

        return grettings;
    }
}

const me = new Traveler('Vas Roko', 23, 'Exeter');
console.log(me.getGretting() );

const other = new Traveler();
console.log(other.getGretting() );