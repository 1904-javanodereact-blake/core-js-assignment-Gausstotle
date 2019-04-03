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
          console.log(i,i+j)
          if(numArray[i] > numArray[i+j]){
            console.log('true',numArray[i], numArray[j])
            let temp = numArray[i];
            numArray[i] = numArray[j];
            numArray[j] = temp
          } else {
            console.log('false',numArray[i], numArray[j])
        }
      }
  }
  return numArray
}


let basicArray = [ 1, 5, 3]
console.log(bubbleSort(basicArray))
 

