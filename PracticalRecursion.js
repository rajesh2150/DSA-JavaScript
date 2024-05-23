//1. Factorial of a number

function factorial(n){
     if(n==0){ return 1}  
     return n*factorial(n-1) 
}
// console.log(factorial(5))  TC= O(n)


//2. Sum of Array

function sumOfArray(arr){
    if(arr.length == 0){return 0}
    const lastElement = arr.pop()
    return lastElement+sumOfArray(arr)

    // return arr[arr.length - 1] + sumOfArray(arr.slice(0,arr.length-1))


}
// console.log(sumOfArray([1,2,3,4]))


// function sumOfArray2(arr,n){
//     if(n===0 ) return 0
//     return arr[n-1]+sumOfArray2(arr,n-1)
// }
// console.log(sumOfArray2([1,2],2))


// 3. Fibonacci in Recursion

// f(0)=0 , f(1) = 1, f(n) = f(n-1) + f(n-2)

function fibonacci(n){
    if (n<2) return n
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(3))