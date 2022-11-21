// Global Scope 

// local scope 
/*
let glob="This is a global Scope";
i=0;
function fun(){
     glob="This is a local scope";
    
   
}

fun();
console.log(glob);

// If we do not set any of var let or const so that variable is considered as global


function fun(){
    function fun2(){
         i=100;
    }
    fun2();
    console.log(i);
}

fun();


// closure is created  a child function keep the environment of parent scope even after parent function is executed.


function xyz(){
    return 2;
}
var respNew=xyz();





function abc(outer_num){
    function innerabc(inner_num){
       
        return outer_num + inner_num;
    }
    //outer_num=9;
    return innerabc;
}

var resp=abc(5); // first class function 

console.log(resp(4)); // 13
console.log(resp(8)); // 17



function outer(){
    var arr=[];
    var i;
    for(i=0;i<4;i++){
        arr[i]=function(){
            
            return i;
        }
        
    }
    return arr;
}
var get_arr=outer();

console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());

*/

function outer(){
    function create_closure(val){
        return function(){
            return val;
        }
    }
        var arr=[];
        var i;
        for(i=0;i<4;i++){
            arr[i]=create_closure(i);
            console.log(arr);
        }
        return arr;
    }

var get_arr=outer();

console.log(get_arr[0]());
console.log(get_arr[1]());