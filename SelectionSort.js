function minAndMax(arr) {
  let small = arr[0];
  let large = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return { small, large };
}
// console.log(minAndMax([92,3,45,2,6,9]))

let arr = [2, 3, 10, 5, 7, 1];
//selection sort 
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
// console.log(selectionSort(arr));

//findMidElement mid=Math.floor(arr.length/2)
let arr2=[1,2,3,4,5,6]
function findMidElement(arr,target){
    let start=arr[0],end=arr.length-1
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(arr[mid]===target) return "at Index "+mid
        else if(arr[mid]>target){
            end=mid-1
        }
       else start=mid+1
    }
    return -1
}

console.log(findMidElement(arr2,5))