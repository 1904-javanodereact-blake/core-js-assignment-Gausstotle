/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    if(someNum % 2 === 0){
        return true
    }
    else {
        return false
    }
}


console.log(isEven(1));
console.log(isEven(3));
console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(6));
