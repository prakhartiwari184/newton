/*let x = function (x,y){ // first class function 
    return x*y;
}

let y = (x,y)=>x*y; // arrow function

console.log(y(3,2));

// 1. when function has multiple lines 
let myfunction = (arg1,arg2,...argN)=>{
    // code lines 
    statements(s); // code lines of the function 
}
// 2. when function has single return statement 

let myFunction = (arg1,arg2,...argN)=>expression 


//1. no param or args arrow func
let abc=()=>console.log("testing no param or args function");
//abc();

//2. arrow function with single param or argument

let xyz=x=>console.log(x);

//xyz("func returning single param passed");



 //3. arrow function as an expression 

let age=5;

let welcome= (age <18)?()=>console.log("baby"):()=>console.log("Adult")




//if(age>18){}else{}

//(age>18)?console.log("Hi"):console.log("bye")



// 4. Multiline arrow function 

let sum = (a,b) => {
    let result=a+b;
    return result;
}
let result1=sum(2,4);
console.log(result1);



// Inside a regular func this keyword refers to the function where it is called 

function person (){
    this.name ='jack';
    this.age = 25;
    this.sayName=function (){
        console.log(this.age);
        function innerFunction(){ // regular func cannot refer to parent scopes
            console.log(this.age)
            console.log(this);
        }
        innerFunction();
    }
}
function person1 (){
    this.name ='jack';
    this.age = 25;
    this.sayName=function (){
        console.log(this.age);
        let innerFunction=()=>console.log(this.age);// arrow function refers to parent scope so can use attributes of parent 
        innerFunction();
    }
}
let x= new person();
let y= new person1();

//x.sayName();
y.sayName();


let x= function(){
    console.log(arguments[1]);
}

//x(4,5,6);

let y=(...v)=>console.log(v[1]); // spread opertor which denotes as three dots ...
y(1,2,3);
*/
let person={
    name:"Prakhar",
    age:16,
    sayName:function (){
        console.log(this);
    }
};
person.sayName();
