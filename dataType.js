// var let and const

// global scope and local scope
/*
var num1=2; // globalscope
var array1=[1,2,3,4]; // globalscope

function abc(){
    // local scope
    var num2=3;
}

*/
// hoisting 
/*var num1; // declared
console.log(num1);
num1=4; // initialisation


// they are local scope env

let num2=5; // let and const me declaration and initialisation happens together
console.log(num2);

const batchName="Nova";

const object1={
    name:"prakhar",secondName:"Tiwari"
};
const array1=[1,2,3,4,5];
array1.push(12);
array1[3]=90;
const floatVal=2.9999;
floatVal=3.4;
console.log(floatVal);

*/

var num1=3;

function abc(){
    let num2=3;
    num1++;
    console.log(num1,num2);
}
function xyz(){
    console.log(num1);
    num1++;
}
abc();
xyz();
console.log(num1);
