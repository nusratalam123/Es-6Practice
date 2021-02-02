//function expression
// function add(num){
//     return num*2;
// }
//function declaration
// const total=add(20);
// const double = function(num){
//     return num*2
// }


 const double= num => num*2;
 const result=double(10)
 const add = (x,y) => x+y;
 const result1=add(10,25)
 const give=()=>5;
 const res=give()
 const multiple=(x,y)=>{
     const sum=x+y;
     const subtraction=x-y;
     const multi=sum*subtraction;
     return multi;
 }
 const result3=multiple(7,5);
 console.log(result3)
 
//console.log(res)