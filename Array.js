

// let marks_class_12 = [51, 62, 53, 24, null, false, "not present"];
// console.log(marks_class_12);
// console.log(marks_class_12[0]);
// console.log(marks_class_12[1]);
// console.log(marks_class_12[2]);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[4]);
// console.log(marks_class_12[10]);
// console.log("The lenght of marks are  " ,  marks_class_12.length);


//Array Methods
//to string method
// let num = [1, 2, 3, 8, 9]
// let b = num.toString() //b is now a string
// console.log(b);

// join method
// let c = num.join("_")
// console.log(c, typeof c);

// pop method
// num.pop()
// console.log(num);
// let r = num.pop()
// console.log(num, r)

//push method
// let r = num.push(10)
// console.log(num, r);

// Shift methid
// let r = num.shift()
// console.log(r, num); //pop out

//Unshift - removes an element fromt eh start of array, returns new array lenght
// let r = num.unshift(55)
// console.log(r, num);


// Delete method, it's an operator, array lenght will not change / Interview
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// delete num[6]
// console.log(num.length);

//concat - to add 2 or more arrays, does not change existing array
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16]
// let newarray = num.concat(num_more)
// console.log(newarray, newarray.length);

//sort method, considering string / Interview
// let a = [5, 96, 14, 86, 21, 1, 12, 6963, 11, 13]
// a.sort() //sorting alphabetically
// console.log(a);

//sort method, considering string / Interview / Numerical sorting, function
// let a = [5, 96, 14, 86, 21, 1, 12, 6963, 11, 13]
// let compare = (a, b)=>{
// return a - b

// }
// a.sort(compare)
// console.log(a)

//Reverse method
// a.reverse()
// console.log(a);


//Splice and Slice - Imporant concepts, interview
//Splice - To add new items in an array, modify existing array
//Slice Slice out a piece from an array, never modify original array, creates new
// let num = [5, 96, 14, 86, 21, 1, 12, 6963, 11, 13]
// num.splice(3, 1, 88, 99) // 3 = position to add, 1 = no of elements to remove, 88, 99 = elements to be added
// console.log(num);

let num = [5, 96, 14, 86, 21, 1, 12, 6963, 11, 13]
// num.slice(21)
// console.log(num);//Wrong method

let newNum = num.slice(4, 6) //will not include 6th 
console.log(newNum);


 







