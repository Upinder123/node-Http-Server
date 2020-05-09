// module wrapper function is a function which is around the whole js code 
//(function(exports,require,module,__filename,__dirname))

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and i am ${this.age}`)
    }
}

module.exports = person;
// this is to export a part of code