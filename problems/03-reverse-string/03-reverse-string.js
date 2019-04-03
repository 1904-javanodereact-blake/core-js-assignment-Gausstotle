/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let rtSemos = ''
    for(let i = someStr.length -1; i > -1; i--){
        console.log(i)
        rtSemos += someStr[i];
        console.log(rtSemos);
    }
  return rtSemos
}

let myStr = 'Hello WOrld!'
console.log(reverseStr(myStr))