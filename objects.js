/*const student={
    firstName:"XYZ",
    class:10
};
// What are properties 
// in js key:value pairs are called properties

const student1=new Object();

// Dot notation 

console.log(student.firstName);

// Bracket Notation 

console.log(student["firstName"]);

// Nested Objects 

const student2={
    name:"abc",
    age:20,
    marks:{
        science:70,
        math:80,
        computer:60
    }
}

// Methods inside an object

const student3={
    name:"abc",
    age:20,
   greet:function(){
       console.log('hi there!!');
   }
}
student3.greet();


// Constructor function 

function person(){
    this.name="abc";
    this.age=23;
}

const xyz=new person();// xyz={age:23,name:'abc'}
const waz=new person();// waz ={age:23,name:'abc'}
xyz.age=30;
console.log(xyz.age);
console.log(waz.age);

function person(name,age){
    this.name=name;
    this.age=age;
}
const student={
    firstName:"XYZ",
    class:10
};

const xyz=new person('abc',23);// xyz={age:23,name:'abc'}
const waz=new person('xyz',30);// waz ={age:23,name:'abc'}
//xyz.age=30;
console.log(xyz.age);
console.log(waz.age);
*/

// Tell me difference bw constructor function object and object literal

//1. You can create multiple objects through constructor function but not from object literal 

//2 . if you want to add a property you can do and update
// 3. Objects created by constructor functions are unique but object literals are single created objects
function person(name,age){
    this.name='abc';
    this.age=23;
}

let person1=new person();// unique
let person2=new person();// unique
console.log(person1.name);
console.log(peron2.name);

person2.name="ccd";

let person3={
    age:23,
    name:"abc"
}
person3.name="xyz"