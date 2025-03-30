let result = "";

// 조건문 (if/else if/else)
let score = 87;
if (score >= 90) {
  result += "성적: A\n";
} else if (score >= 80) {
  result += "성적: B\n";
} else {
  result += "성적: C 이하\n";
}

// 조건문 (switch)
let day = "금요일";
switch (day) {
  case "월요일":
    result += "오늘은 월요일입니다.\n";
    break;
  case "금요일":
    result += "불금입니다!\n";
    break;
  default:
    result += "평일입니다.\n";
}

// 반복문 (for)
result += "\n[for문으로 1~5 출력]\n";
for (let i = 1; i <= 5; i++) {
  result += i + " ";
}
result += "\n";

// 반복문 (while)
result += "\n[while문으로 5~1 출력]\n";
let n = 5;
while (n >= 1) {
  result += n + " ";
  n--;
}
result += "\n";

// 함수 선언 + 호출
function greet(name) {
  return "안녕하세요, " + name + "\n";
}
result += "\n[함수 호출 결과]\n";
result += greet("연주");


document.getElementById("output").innerText = result;
