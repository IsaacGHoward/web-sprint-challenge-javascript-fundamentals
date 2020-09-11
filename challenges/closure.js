// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*
nestedFunction can access the variable 'internal' because iternal is one level above the scope of nestedFunction, which is inside of the function that contains nestedFunction (myFunction). Since variables from outer scopes can be used in inner scopes, this variable can be accessed from inside nestedFunction.
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num){
  if(num === 1)
    return 1;
  else 
    return summation(num-1) + num;
}
console.log(summation(4));