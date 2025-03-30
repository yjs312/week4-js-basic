let output = "";

// var 실습
var a = 10;
var a = 20; // 재선언 가능
output += "var a: " + a + "\n";

// let 실습
let b = 10;
// let b = 20; // 재선언 불가 (주석 처리)
b = 30;       // 재할당 가능
output += "let b: " + b + "\n";

// const 실습
const c = 10;
// const c = 20; // 재선언 불가
// c = 30;       // 재할당 불가
output += "const c: " + c + "\n";

// const로 객체 선언
const student = {
  name: "연주",
  major: "컴퓨터공학과"
};
student.name = "성연주"; // 객체 내부 속성은 수정 가능
output += "const 객체 name 변경 후: " + student.name + "\n";

document.getElementById("output").innerText = output;
