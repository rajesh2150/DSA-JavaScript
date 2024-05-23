// STEPS TO SOLVE PATTERNS

//1. No of lines = Np of Rows = No of Times Outer Loop will Run
//2.Identify for every row no 
//  how many cols are there
//  type of element in col  
//3. Print Elemenet



// *
// **
// ***
// ****
function patternOne(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + "*";
    }
    string = string + "\n";
  }
  // console.log(string);
}
patternOne(5);
patternOne(4);

// ****
// ****
// ****
// ****
// ****
function patternTwo(num) {
  let string = "";
  for (let row = 0; row <= num; row++) {
    for (let col = 1; col <= num; col++) {
      string = string + "*";
    }
    string = string + "\n";
  }
  // console.log(string)
}
patternTwo(4);

// ****
// ***
// **
// *

function patternThree(num) {
  let string = "";
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num - row + 1; col++) {
      string = string + "*";
    }
    string = string + "\n";
  }
  // console.log(string)
}
patternThree(4);

// 1
// 1 2
// 1 2 3
// 1 2 3 4

function patternFour(num) {
  let string = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      string = string + " " + j;
    }
    string = string + "\n";
  }
  // console.log(string)
}
patternFour(4);

// 1
//  2
//   3
//    4
//     5

// 1
// * 2
// * * 3
// * * * 4
// * * * * 5
function ownTrinagle(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      if (j == i) string = string + j;
      else string = string + "* ";
    }
    string = string + "\n";
  }
  // console.log(string)
}
ownTrinagle(5);

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
function patternFive(num) {
  let string = "";
  for (let i = 0; i <= 2 * num; i++) {
    let totalRows = i > num ? 2 * num - i : i;

    for (let j = 1; j <= totalRows; j++) {
      string = string + "*";
    }
    string = string + "\n";
  }
  // console.log(string);
}
patternFive(5);

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
function patternSix(num) {
  let string = "";
  for (let i = 0; i <= 2 * num; i++) {
    let totalRows = i > num ? 2 * num - i : i;
    let noOfSpaces = num - totalRows;
    for (let j = 1; j <= noOfSpaces; j++) {
      string = string + " ";
    }
    for (let k = 1; k <= totalRows; k++) {
      string = string + "* ";
    }
    string = string + "\n";
  }
  // console.log(string);
}
patternSix(5);

// 0 0 0 0 0 0 0 0 0 
// 0 1 1 1 1 1 1 1 0
// 0 1 2 2 2 2 2 1 0
// 0 1 2 3 3 3 2 1 0
// 0 1 2 3 4 3 2 1 0
// 0 1 2 3 3 3 2 1 0
// 0 1 2 2 2 2 2 1 0
// 0 1 1 1 1 1 1 1 0
// 0 0 0 0 0 0 0 0 0

function patternSeven(num){
  let string='';
  let N=2*num
  for(let i=0;i<=N;i++){
    for(let j=0;j<=N;j++){
      let everyIndex=Math.min(Math.min(i,j),Math.min(N-i,N-j))
      string=string+everyIndex+" "
    }
    string=string+"\n"
  }
  // console.log(string)
}
patternSeven(4)

// 4 4 4 4 4 4 4 4 4 
// 4 3 3 3 3 3 3 3 4
// 4 3 2 2 2 2 2 3 4
// 4 3 2 1 1 1 2 3 4
// 4 3 2 1 0 1 2 3 4
// 4 3 2 1 1 1 2 3 4
// 4 3 2 2 2 2 2 3 4
// 4 3 3 3 3 3 3 3 4
// 4 4 4 4 4 4 4 4 4
function patternEight(num){
  let string='';
  let N=2*num;
  let originalN=num
  for(let i=0;i<=N;i++){
    for(let j=0;j<=N;j++){
      let everyIndex=originalN-Math.min(Math.min(i,j),Math.min(N-i,N-j))
      string=string+everyIndex+" "
    }
    string=string+"\n"
  }
  console.log(string)
}
patternEight(4)