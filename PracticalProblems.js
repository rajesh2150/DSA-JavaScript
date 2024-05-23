//1. palindrome
//121 == 121 ✅
//123 == 321 ❌

function isPalindrome(num){
    let copyNum=num
    let reverseNum=0;
    while(num>0){
        let lastDigit=copyNum%10;
        reverseNum=reverseNum*10 + lastDigit;
        copyNum=Math.floor(copyNum/10)
    }
    return num === reverseNum
}
// isPalindrome(123)


//2. fabonacci number
// 0 1 1 2 3 5 8 ...
function fibonacci(num){
    let prev=0,curr=1,next;
    for(i=2;i<=num;i++){
        next = prev+curr;
        prev =  curr;
        curr = next;
    }
    return next
}
// console.log(fibonacci(3))


const countFibanacci=(num)=>{
    let prev=0,curr=1,next
    let sum=[prev,curr]
    for(let i=3;i<=num;i++){
        next=prev+curr
        sum.push(next)
        prev=curr;
        curr=next
    }
    return sum=sum.reduce((prev,curr)=>prev+curr)
}
// console.log(countFibanacci(5)) // 0,1,1,2,3,5,8,13

//3. Missing number in array
//[1,0,3] == missing 2

function missingNumber(num){
    let sum =0
    for(i=0;i<num.length;i++){
        sum=sum+num[i]
    }
    return num.length*(num.length+1)/2 - sum
}

// console.log(missingNumber([0,1,3]))

//4. find number is present in array or not

function isPresent(arr,target){
    for(let x of arr){
        if(x=== target){
            return true
        }
    }
    return false
}
// console.log(isPresent([1,2,30,"hello"],'hello'))

//5. find element with index else return -1

function isPresentWithIndex(arr,target){
    for(let i=0;i<=arr.length;i++){
       if(arr[i]===target){
        return i
       }
    }
    return -1
}

// console.log(isPresentWithIndex([1,2,3],4))
// console.log(isPresentWithIndex([1,2,3],2))

//6. Check Two arrays are same or not

function checkArrays(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !==arr2[i]){
            return false
        }
    }
    return true
    // return arr1.length === arr2.length && arr1.every((ele,i)=> arr1[i]=== arr2[i])
}

// console.log(checkArrays([1,2,3],[1,2,3]))


//7. Sort array accending and decending order ?

const x=[1,3,5,-9,4,6]
x.sort() //O(NlogN) //[ -9, 1, 3, 4, 5, 6 ]
// console.log(x) //ascending order

x.sort((a,b)=>b - a) //[ 6, 5, 4, 3, 1, -9 ]
// console.log(x) //decending order


//8. Reverse of Array ?

x.reverse()
// console.log(x)

//9. find the index of first occurence of a string

function findIndexOfString(str,target){
    let str2=str.split(" ")
    for(i=0;i<str2.length;i++){
        if(str2[i]===target){
            return i
        }
    }
    return -1
}

const result = findIndexOfString('rajesh is rk','rk')
// console.log(result)

//10. Reverse a string

function reverseString(str){
    let str2=str.split("")
    let rev='' //let rev = []
    for(i=str2.length-1;i>-1;i--){
        rev+=str2[i] //rev.push[str2[i]]
    }
    return rev
}

// console.log(reverseString('Rajesh')) //hsejaR
// console.log(reverseString('Hello'))  //olleH

//11. Valid Anagram
// care == race

function isAnagram(str1,str2){
   return str1.split("").sort().join() === str2.split("").sort().join() //T.C = nlogn
}

// console.log(isAnagram('care','race'))
// console.log(isAnagram('cat','bat'))

//12. Find length of last word

function lengthOfLastWord(str){
    let str2=str.split(" "),count=0;
    let lastWord=str2[str2.length-1]
    for(i=0;i<=lastWord.length;i++){
        count++
    }
    return count-1
}

console.log(lengthOfLastWord('Rajesh Korlapati'))