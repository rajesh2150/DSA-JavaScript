//1. sum of all natural numbers from 1 to n
//sum of 1 to 5 = 15
function sumOfNaturalNumbers(num){
    let sum=0
    for(i=1;i<=num;i++){
        sum=sum+i
    }
    return sum 
    //return num*(num+1)/2
}

// console.log(sumOfNaturalNumbers(5))

//2. Sum of digits of a number
//1287 : 1+2+8+7 = 18
// 1287%10 = 128 , remainder=7 ....

function sumOfDigits(num){
    let sum =0;
    while(num>0){
        sum= sum + num%10
        num = Math.floor(num / 10)
    }
    return sum
}

// console.log(sumOfDigits(1287))

//3.count the number of digits a number
//34252: 5


function numberOfDigits(num){
    let count = 0;
    num=Math.abs(num)
    do{
        count++
        num=Math.floor(num/10)
    }
    while(num>0)
    return count;
}

console.log(numberOfDigits(34252))
console.log(numberOfDigits(-34252))