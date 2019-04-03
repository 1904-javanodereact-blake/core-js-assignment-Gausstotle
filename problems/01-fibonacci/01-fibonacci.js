/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let count = 0;
    let a = 0;
    let b = 1;
    let temp = 1;
    while(count < n){
        temp = a;
        a = b;
        b = temp + b;
        count++;
    }
    return(b)

}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(10));