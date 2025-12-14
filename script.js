const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    addHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function addHistory(text) {
  history.unshift(text);
  history = history.slice(0, 10); // maksimal 10 riwayat
  localStorage.setItem("calcHistory", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

renderHistory();
