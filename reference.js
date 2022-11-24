// primitve // Value type of passing params
// Boolean// string//integer// float/etc


// Objects // Reference type od passing params 
// {} [] functions

/*
// Primitive type or value
const number=10;
 const bool=false;
 const str="HI";
 const missingInteger=null;
 const nothing=undefined;

 // Objects 

 const plainObj={
     name:"test"
 }
 const arr=[1,2,3,4];

 const functionArray=function (){
     console.log("hi");
 }


 
// Case of primitve
 let a=1;// a has copy 1
 
 let b=a; // b has another copy of 1 
 a=3;

//console.log(a,b);

// Case of Objects 

let x=[1]; // x is pointing to array

let y=x;// y is also pointing to array

y.push(2);
x.push(3);

console.log(x,y);
// [1,2] [1,2]
// Primitive datatypes in comparison ===

let one=1;
let oneCopy=one;

console.log(oneCopy === one);
//console.log(one===1);
console.log(oneCopy===1);

// only two things will be checked one is value and other is type of value it is not considering reference in case of primitive datatype;


// Object variable comparison

const ar=[1];// {name:"hi"}
const ar2=[1]; //  const ar2=ar;
// value and reference
//console.log(ar===ar2); // false 
//console.log(ar===new Array(1,2)); // false

const ar3=ar;

console.log(ar===ar3);



//console.log(ar===ar);


// 4 pillars  are
// 1.Object
// 2.Classes
// 3.Encapsulation
//4.Inheritance
//Es6 coding standard
class Vehicle {
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    getDetails(){
        return this.name
    }
}

let bike1=new Vehicle('Hayabusa','Suzuki','1340cc');
let bike2=new Vehicle('Ninja','Kawasaki','998cc');

//console.log(bike1.name);
//console.log(bike2.maker);

//console.log(bike1.getDetails());

function Vehicle (name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
}
Vehicle.prototype.getDetails=function (){
    return this.name
}
let bike1=new Vehicle('Hayabusa','Suzuki','1340cc');
let bike2=new Vehicle('Ninja','Kawasaki','998cc');
console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());


// Encapsulation : wrapping properties and functions within a single unit is enca....

class person{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    add_Address(add){
        this.add=add;
    }
    getDetails(){
        console.log(this.name,this.add);
    }
}

let person1=new person("mohd",2);

person1.add_Address('delhi');

person1.getDetails();

// Data Abstraction means hiding of data
function person(fname,lname){
    let firstName=fname;
    let secondName=lname;

    let add_Address=function (){
        return firstName+ " seperated "+secondName;
    }
    this.getDetails=function(){
        return firstName+"    "+secondName;
    }
}

let person1=new person("mohd",2);

console.log(person1.firstName);
console.log(person1.add_Address);
console.log(person1.getDetails());
*/

// Inheritance

class person{
    constructor(name){
        this.name=name;
    }
    toString(){
        return this.name;
    }
}
class student extends person{
    constructor(name,id){
        super(name);
        this.id=id;
    }
    toString(){
        return super.toString() +" id is : "+ this.id
    }
}

let student1=new student('mohd',22);
console.log(student1.toString());