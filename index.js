const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;

function sum1Home() {
  homeCount += 1;
  homeScore.textContent = homeCount;
}

function sum2Home() {
  homeCount += 2;
  homeScore.textContent = homeCount;
}

function sum3Home() {
  homeCount += 3;
  homeScore.textContent = homeCount;
}

function sum1Guest() {
  guestCount += 1;
  guestScore.textContent = guestCount;
}

function sum2Guest() {
  guestCount += 2;
  guestScore.textContent = guestCount;
}

function sum3Guest() {
  guestCount += 3;
  guestScore.textContent = guestCount;
}
