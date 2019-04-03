/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

/*Bubble sort, sometimes referred to as sinking sort, 
is a simple sorting algorithm that repeatedly steps through 
the list, compares adjacent pairs and swaps them if they are 
in the wrong order. The pass through the list is repeated until 
the list is sorted */

function bubbleSort(numArray) {
  for(let i = 0; i < numArray.length;i++){
      for(let j = 1; i+j < numArray.length; j++){
          if(numArray[i] > numArray[i+j]){
              console.log('true', numArray[i], "is greater than", numArray[i+j])
              let temp = numArray[i];
              numArray[i] = numArray[i+j]
              numArray[i+j] = temp
          } 
          else {

        }
      }
  }
  return numArray
}


let basicArray = [ 10, 5, 3, 7, 7, 9, 10, 2, 3, 5]
console.log(bubbleSort(basicArray))
 

