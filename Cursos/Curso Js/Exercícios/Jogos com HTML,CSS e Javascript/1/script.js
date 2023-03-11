const secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function guessNumber() {
  const guess = parseInt(document.getElementById("guess").value);
  const result = document.getElementById("result");
  if (guess === secretNumber) {
    guessCount++;
    result.innerHTML = `Parabéns! Você adivinhou o número em ${guessCount} tentativa(s).`;
    result.style.color = "green";
    disableGame();
  } else if (guess < secretNumber) {
    guessCount++;
    result.innerHTML = "Muito baixo, tente novamente.";
    result.style.color = "red";
  } else {
    guessCount++;
    result.innerHTML = "Muito alto, tente novamente.";
    result.style.color = "red";
  }
}

function resetGame() {
  location.reload();
}

function disableGame() {
  document.getElementById("guess").disabled = true;
  document.getElementsByTagName("button")[0].disabled = true;
}
