/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index, element) {
    newArray = []
    for( let i = 0; i < index; i++){
        newArray.push(someArr[i])
    }
    newArray.push(element)

    for( let i = index; i < someArr.length; i++){
        newArray.push(someArr[i])
    }
    return newArray
  
}

console.log(spliceElement([1,2,3,4,5,6,7,8], 5, 'x'))



