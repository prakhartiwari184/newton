/*var a; // undefined 
a=4; // primitive type would be integer 
// It is also said that js is a dynamic data 
a="test"; // primitive type type cast to string dynamically
a='test';

a='"Its a monday"';

console.log(typeof a);

if(typeof a==integer ){
    console.log("true");
}
else{
    console.log("false");
}

//Array, Objects

var ob1={};
ob1.name="himanshu";
ob1.gender="male";
ob1.name="akash";
var array1=Array();
array1.push(1);
array1.push(2);

console.log(array1,typeof array1);
console.log(ob1,typeof ob1);




// functions 
// 1. split  it converts substring to an array also original string will not change 
// 2. splice
// 3. join
// 4 reverse
// 5. push 
// 6. shift 
// 7. sort



var a="How are you all today";

var arr=a.split(" ");
console.log(arr);


var city=["kanpur","Lucknow","Indore","Mathura"];

city.splice(2,0,"Varanasi","Prayagraj");
console.log(city);


var arr=["kanpur","Lucknow","Indore","Mathura"];
var text=arr.join("");
console.log(text);


var arr=["kanpur","Lucknow","Indore","Mathura"];
console.log(arr.reverse());


var arr=[2,5,-9,-1,-6];
console.log(arr.sort());


arr.sort(function(a,b){
    var posi= a-b>0;
});*/
var arr=[2,5,-9,-1,-6];
arr.shift()
console.log(arr);

