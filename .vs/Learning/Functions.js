/*function oneplusavg(x, y) {
    return 1+ (x+y)/2
    console.log("Done");
}

let a = 3;
let b = 5;
let c = 1;

console.log("one plus average of a and b is ", oneplusavg (a, b))
console.log("one plus average of c and b is ", oneplusavg (c, b))
console.log("one plus average of a and c is ", oneplusavg (a, c))
*/

/*
const hello = ()=>{
    console.log("How are you doing?");
    
}

hello();
*/

/*
function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30
  */

  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3)); // 6
  