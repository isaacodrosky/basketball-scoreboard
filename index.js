// objective: add to displayed score based on button clicked

// VARIABLES
// score displays
const homeScoreEl = document.getElementById('home-score-el');
const guestScoreEl = document.getElementById('guest-score-el');
// home point buttons
const home1Btn = document.getElementById('home-1-btn');
const home2Btn = document.getElementById('home-2-btn');
const home3Btn = document.getElementById('home-3-btn');
// guest point buttons
const guest1Btn = document.getElementById('guest-1-btn');
const guest2Btn = document.getElementById('guest-2-btn');
const guest3Btn = document.getElementById('guest-3-btn');
// reset button
const resetBtn = document.getElementById('reset-btn');
// score init
let homeScore = 0
let guestScore = 0

// FUNCTIONS
// home team additions
function add1Home() {
    homeScore++;
    homeScoreEl.textContent = homeScore;
}

function add2Home() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function add3Home() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

// guest team additions
function add1Guest() {
    guestScore++;
    guestScoreEl.textContent = guestScore;
}

function add2Guest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function add3Guest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

// add event listeners to buttons
// EVENT LISTENERS
home1Btn.addEventListener('click', add1Home);
home2Btn.addEventListener('click', add2Home);
home3Btn.addEventListener('click', add3Home);

guest1Btn.addEventListener('click', add1Guest);
guest2Btn.addEventListener('click', add2Guest);
guest3Btn.addEventListener('click', add3Guest);

resetBtn.addEventListener('click', resetScore);