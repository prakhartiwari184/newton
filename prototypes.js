/*function person(){
    this.name="abc",
    this.age=24
}

const person1=new person();
const person2=new person();
console.log(person.prototype);
person.prototype.gender="male";
console.log(person.prototype);
console.log(person1);

person1.gender="prakhar";
console.log(person1.gender);
console.log(person2.gender);
//console.log(person1.gender);
//console.log(person2.gender)

person.prototype.greet=function(){
    console.log('hello bro'+ ' '+ this.name);
}
person1.greet=function(){
    console.log("no idea will it change");
}
console.log(person.prototype);
person1.greet()
person2.greet()
*/

// Prototype chaining

function person(){
    this.name="abc"
}
person.prototype.name="male";
person.prototype.age=23;
const person1=new person();
console.log(person.prototype);
console.log(person1.name);
console.log(person1.age);
