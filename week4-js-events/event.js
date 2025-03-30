const output = document.getElementById("output");

// 1. 버튼 클릭 이벤트
document.getElementById("clickBtn").addEventListener("click", () => {
  output.innerText = "버튼이 클릭되었습니다!";
});

// 2. 입력값 계산 이벤트
document.getElementById("calcBtn").addEventListener("click", () => {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  output.innerText = "계산 결과: " + (n1 + n2);
});

// 3. 체크박스 상태 감지 이벤트
document.getElementById("agree").addEventListener("change", (e) => {
  if (e.target.checked) {
    output.innerText = "✅ 동의하셨습니다.";
  } else {
    output.innerText = "❌ 동의하지 않으셨습니다.";
  }
});
