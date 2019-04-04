/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */


function reverseStr(someStr) {
    let rtSemos = ''
    for(let i = someStr.length -1; i > -1; i--){
        rtSemos += someStr[i];
    }
  return rtSemos
}

function isPalindrome(someStr) {
    if(someStr === reverseStr(someStr)){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPalindrome('bob'))
console.log(isPalindrome('bobb'))
console.log(isPalindrome('bob'))
console.log(isPalindrome('b"o"b'))
console.log(isPalindrome('bob'))