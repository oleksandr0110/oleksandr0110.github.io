let score = 0;
const scoreEl = document.getElementById("score");
document.getElementById("clickBtn").addEventListener("click", () => {
  score++;
  scoreEl.textContent = score;
});