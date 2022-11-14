// How a function is or called with a variable
/*
function abc(){
    console.log("hi");
}
//abc();



var xyz=function(){
    console.log("hi");
    return true;
}
console.log(xyz());



// run out decision I have to wait to update further score ball and individual score
// 1. first balls number gets updated.
// 2. runs gets updated.
// 3. particular player runs gets updated.



function abc(name,callback){
    console.log('Hi' + '---' + name);
    callback();
}

function xyz(){
    console.log("hi I am a devil and callback function");
}

abc('anjana',xyz);






setTimeout(test1,2000);
test2('prakhar');

function test1(){
    console.log("hi there");
}
function test2(name){
    console.log('Hi ----',name);
}


setTimeout(test1,2000,'test',test2);
//setTimeout(test2,3000);

function test1(name,callback){
    console.log("hi there");
    callback(name);
}
function test2(name){
    console.log('Hi ----',name);
}

*/
var i=0;
for(i;i<10;i++){
    abc(i);
    
}
function abc(i){
    setTimeout(function(){
        console.log(i);
    },50000);
}