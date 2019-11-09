function Person(name, yearOfBirth){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
}

Person.prototype;
Person.__proto__;

Person.prototype.age = function(){
    return new Date().getFullYear - this.yearOfBirth;
}

const matheus = new Person('Matheus',1988);

matheus;
matheus.age(31);


matheus.prototype;
matheus.__proto__;

