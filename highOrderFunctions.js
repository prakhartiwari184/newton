/*function abc(num){
return num;
} // normal returning function 


// functions those return function or takes paramter as function are known as high order function

// first class functions

var resp=function(num){
    return 2*num;
}

resp(3); 


// Callback function

const isEven=function(n){
    return n%2==0;
}

let resp=function(evenFun,num){
    const isNumEven=evenFun(num);
    console.log("number is "+ num + " Is even " + isNumEven);
}

resp(isEven,4);

// 1. pass functions as parameter

function abc(xyz){

}
function xyz(){

}

// 2. return function 

function abc(){
    return function (){return 42;} // returning function inside a function 
} 

const resp=abc(); /// first  class function 


function calculate(operation,intialVal,numbers){
    let total = intialVal;
    for(var i=0;i<numbers.length;i++)
    {
        total=operation(total,numbers[i])
    }
    return total;
}
function sum(n1,n2){
    console.log(n1,n2);
return n1+n2;
}
function multiply(n1,n2){
    return n1*n2;
}

console.log(calculate(sum,0,[1,2,4]));
console.log(calculate(multiply,1,[1,2,4]));


// map functions 

const numbers=[1,2,4];

const doubles=numbers.map(function mapper(number){
    return 2*number;
});

console.log(doubles,numbers);



const numbers=[1,2,4];

const resp=numbers.map(function mapper(number){
    return number*2;
});
console.log(resp);



// filter function 

const numbers=[1,2,4];

const resp=numbers.filter(function mapper(number){
    return number>2;
});
console.log(resp);


const numbersNew=[1,2,4,6];

const respNew=numbersNew.filter(function mapper(number){
    return number%2==0;
});
console.log(respNew);




// reduce function 

const numbersNew=[1,2,4,6];

const respNew=numbersNew.reduce(function mapper(total,number){
    return total*number;
});
console.log(respNew);
*/