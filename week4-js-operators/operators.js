let result = "";

// 산술 연산자
let a = 10, b = 3;
result += "[산술 연산자]\n";
result += "a + b = " + (a + b) + "\n";
result += "a - b = " + (a - b) + "\n";
result += "a * b = " + (a * b) + "\n";
result += "a / b = " + (a / b) + "\n";
result += "a % b = " + (a % b) + "\n\n";

// 비교 연산자
result += "[비교 연산자]\n";
result += "a == '10': " + (a == '10') + "\n";   // true
result += "a === '10': " + (a === '10') + "\n"; // false
result += "a != b: " + (a != b) + "\n";
result += "a > b: " + (a > b) + "\n\n";

// 논리 연산자
let isAdult = true;
let hasID = false;
result += "[논리 연산자]\n";
result += "isAdult && hasID: " + (isAdult && hasID) + "\n";
result += "isAdult || hasID: " + (isAdult || hasID) + "\n";
result += "!isAdult: " + (!isAdult) + "\n\n";

// 화살표 함수
result += "[화살표 함수]\n";
const greet = (name) => "안녕하세요, " + name + "님!";
const square = x => x * x;

result += "greet('연주') → " + greet("연주") + "\n";
result += "square(5) → " + square(5) + "\n";

document.getElementById("output").innerText = result;
