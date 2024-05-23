//Sorting In JavaScript

//sort Array
const arr=[4,3,2,1]
// console.log(arr.sort((a,b)=>a-b))

//1 Bubble Sort

const bubbleSort=(arr)=>{
    let swapped;
    do{
        // let swapped=false
        for(let i=0;i<=arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                // let temp=arr[i];
                // arr[i+1]=arr[i]
                // arr[i]=temp
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                // swapped=true
            }
        }
    }while(swapped)
return arr     
    
}
// console.log(bubbleSort(arr));

let arr1 = [2, 3, 10, 5, 7, 1];
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

//3. InsertionSort

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        let j=i-1;
        while(j>=0 & arr[j]>temp){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=temp
    }
    return arr
}
console.log(insertionSort([5,4,10,1,6,2]))