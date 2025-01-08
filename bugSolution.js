function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a + b; 
}else{
console.error("Error: Both inputs must be numbers.");
return null;
}
}
console.log(foo(2,3)); // Outputs 5
console.log(foo(2,"3")); // Outputs Error: Both inputs must be numbers. and null