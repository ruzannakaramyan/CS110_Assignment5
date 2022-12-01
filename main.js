const { matrixProduct, sumOfMatrices, sumOfEachRow, sumOfArray, countWords, trim } = require("./utils.js");
const prompt = require("prompt-sync")();

let a = [
    [1, 6],
    [4, 3]
  ];
  let b = [
    [3, 6],
    [7, 9],
    
  ];

 // 1x3 + 6x7 , 1x 6 + 6X 9
  //4x3 + 3X 7 , 4x6 + 3x9 
  
  let product= matrixProduct(a,b)
  console.log(product);
  

let x = [
    [1, 6],
    [4, 3]
  ];

let y = [
    [3, 6],
    [7, 9],
    
  ];

console.log(sumOfMatrices(x, y))

let arr =[
    [1, 3, 5],
    [2, 1, 2]
]

//console.log(sumOfArray(arr[0]));
console.log(sumOfEachRow(arr));

let sentence = prompt("Write a sentence to count the words:  ");
  
console.log("The result is: " + countWords(sentence));


let tobetrimmed = prompt("Write a string which needs to be trimmed:  ");
 
console.log(trim(tobetrimmed));
