//How to delete , add and Update element from specific index

let arr=[1,2,3,4,5,'hello']
let splice =arr.splice(1,3) // delete
// console.log(arr,splice)

let spliceAdd=arr.splice(1,0,2,3,4,5) //add
// console.log(arr)

let spliceUpdate=arr.splice(1,3,6,7,8) //update
// console.log(arr)


// Splice vs Slice

// Splice is used for update , add and delete at specific index
// Slice is used for sub-Array from array .Returns a copy of a section of an array and does not changes original array

const subArr=arr.slice(1,4)
// console.log(subArr)


// Copying array in JS  1. shawllow copy and 2 . Deep copy

//1. Shallow Copy of Array -> const arr2 = arr1 

// This Two Points Same array. so not better 

const arr1=[1,2,3,4,5]
const arr2= arr1;
arr2.splice(1,3) //[ 1, 5 ] [ 1, 5 ]
// console.log(arr1,arr2) 

//2. Deep Copy
// spread Operator, from operator
let arr3=[1,2,3,4,5,6]

const arr4=[...arr3] //spred 

const arr5=Array.from(arr3) //from

const arr6= arr3.concat() //concat 
arr4.splice(1,3) //[ 1, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr4,arr3,arr5,arr6)


// How To add Two Array

const newArr=[...arr3,8,9,10]
const newArr2= arr.concat(arr3)
// console.log(newArr,newArr2)



// Map , Filter and Reduce

const newMapArr = arr3.map((ele,i)=>ele*ele)

// console.log(newMapArr)

const newFilterArray = arr3.filter((ele,i)=>ele>2)
// console.log(newFilterArray)

const newReduceArray=arr3.reduce((prev,curr)=>prev+curr)
// console.log(newReduceArray)


// Flat
//Making sub-arrays into same array ex: [1,2,3[4,5],6,7,[8],9] to [1,2,3,4,5,6,7,8,9]

const Arr=[1,2,3,[4,[5]],6,7,[8],9]
const newFlatArray = Arr.flat(1) //depth =2 [[]->this too removed ]
// console.log(newFlatArray)


//Filter vs Find

//filter returns  every element based on the condition 
//find returns only first satisfied conditon

const find=arr3.find((ele,i)=>ele>2)
const filter=arr3.filter((ele,i)=>ele>2)
// console.log(find,filter) // 3 [ 3, 4, 5, 6 ]