//1. Linear Search 

let arr=[1,3,4,5,-2,4]

const linearSearch=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        } 
    }
    return -1
}
const result =linearSearch(arr,5)
// console.log(result)

//2. find the first occurence index of substring in mainstring

function findFirstOccurenceOfString(mainString,subString){
    let m=mainString.length,n=subString.length;
    let indexs=[]
    for(let i=0;i<=m-n;i++){
        let flag=true;
        for(j=0;j<n;j++){
            if(mainString[i+j] !== subString[j]) {
                flag=false;
                 break;
            } 
            else{
                indexs.push(subString[j])
            }
        }
        if (flag==true) return i,indexs
    }
    return -1
}

const result2=findFirstOccurenceOfString('leetcode','code')
// console.log(result2)



//2. Binary Search O(log(n))

function findIndexByBinarySearch(arr,target){
    let start=arr[0],end=arr.length-1;
    while(start<=end){
        let mid= Math.floor((start+end)/2)
        if(arr[mid]===target) return mid;
        else if(arr[mid]>target)  end=mid - 1;
        else  start= mid + 1
    }
    return -1
}

const result3=findIndexByBinarySearch([1,2,3,4,5],6)
// console.log(result3)


function word(arr,target){
   for(let i =0; i<=arr.length;i++){
    if(arr[i]=== target) return i
   }
    return -1
}

// console.log(word(['a','b','c','d'],'c'))

// 2.1 Binary Search in Recursion

const BinarySearchRecursion = (arr,target)=>{
    return BinarySearchRecursionUtil(arr,target,0,arr.length-1)
}
const BinarySearchRecursionUtil=(arr,target,start,end)=>{
    if(start>end) return -1;
     let mid=Math.floor((start+end)/2)
     if(arr[mid]==target) return mid
     else if(arr[mid]>target) return BinarySearchRecursionUtil(arr,target,start,mid -1)
     else return BinarySearchRecursionUtil(arr,target,mid+1,end)
}

// console.log(BinarySearchRecursion([1,2,3,4],3))
// console.log(BinarySearchRecursion([1,2,3,4],1))
// console.log(BinarySearchRecursion([1,2,3,4],10))


function insetValue(arr,target){
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i] ==target) return i
        else{
            const arrSorted =arr.sort((a,b)=>a-b);
            arr.slice()
            console.log(arrSorted)
        }
    }
    return -1
}
console.log(insetValue([1,2,3,4,64,5],13))