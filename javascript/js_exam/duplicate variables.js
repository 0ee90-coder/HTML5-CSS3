// js (Vanilla) 변수의 특징
// 똑같은 이름의 변수를 여러번 만들 수 있다. Vanilla만

var number = 10;
console.log(number);

number = "20" + 2;
console.log(number);

var number = true;
console.log(number);

// clear() ==> 콘솔을 지워라.
clear();

// var result = 10;
var random = parseInt(Math.random()*100 );

console.log("Random:" , random);
if (random >= 50){
   var result = 30;
}

console.log("결과:", result);