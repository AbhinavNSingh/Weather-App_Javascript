//classical for loop, very famous
//let num = [1, 5, 6, 7, 9, 4, 33]

// for(let i=0; i<num.length; i++){
//     console.log(num[i])

// }

// for each loop
// num.forEach((Element)=>{ //Square
//     console.log(Element*Element);
    
// }
// )

// Array from  method / use to create an array from othe robject, making array from string
// let name = "Harry"
// let arr = Array.from(name)

// console.log(arr);

//for.. of method - to access array elements, shortcuts, very famous
// for (let i of num){
//     console.log(i);
    
// }

//for... in
// for (let i in num){
//     console.log(num[i]);
    
// }


//for each loop - calls a function, once for each array element, same array
//higher oder reduce methods - Map, Filter and reduce
//Map Method - creates new array
// let arr = [1, 5, 7]  // it contains, values, (1,5,7), index (0,1,2) and array, overall
// arr.map((value, index, array)=>{
//     console.log(value, index, array)

// })
// //console.log(arr)

//Fitler mathod, they don't modify our original array, create new one
// let arr2 = [1, 5, 7, 23, 98 ,5]
// let A2 = arr2.filter((a)=>{ // Passing a function, making a new array A2
//     return a<10 // if less than 10
// }
// )
// console.log(A2);


//Reduce method - run function by value, reduces an array to a single value
let arr3 = [1, 3, 5, 1, 2 ,5]
let newarr3 = arr3.reduce((Abhi1, Abhi2)=>{
return (Abhi1 + Abhi2)

})
console.log(newarr3);
