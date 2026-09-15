// ECMAScript 2015 이후 부터는 var를 사용하지 않는다.
// 대신 변수가 필요할 때 let 
// 상수가 필요할 때 const
// let과 const hoisting현상이 발생 X Lexical Scope 사용함

let number2 = 10;
// let number = 20; // Error 중복선언 안됨

console.log(result); // Error 
let result = 30;

console.log(number);