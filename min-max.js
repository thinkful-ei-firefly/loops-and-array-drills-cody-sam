'use strict';

function max(numbers) {
  let counter = 0;
  let maxNum = numbers[0];
  while(counter < numbers.length){
    if(numbers[counter] > maxNum){
      maxNum = numbers[counter];
    }
    counter++;
  }

  return maxNum;
}

function min(numbers) {
  let counter = 0;
  let minNum = numbers[0];
  while(counter < numbers.length){
    if(numbers[counter] < minNum){
      minNum = numbers[counter];
    }
    counter++;
  }

  return minNum;
}

const numList = [3, 3, 344, 23, 23, 67, 32, 85];

console.log(max(numList));
console.log(min(numList));