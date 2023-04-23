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
// css style values
const red = "#F94F6D";
const redGlow = "0px 0px 13px rgb(249, 79, 109, 0.7)";
const green = "#32CD32";
const greenGlow = "0px 0px 13px rgba(50, 205, 50, 0.7)";
const white = "#FFFFFF";
const whiteGlow = "0px 0px 13px rgba(255, 255, 255, 0.7)";
// score init
let homeScore = 0
let guestScore = 0

// FUNCTIONS
// home team additions
function add1Home() {
    homeScore++;
    homeScoreEl.textContent = homeScore;
    checkLeader();
}

function add2Home() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    checkLeader();
}

function add3Home() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    checkLeader();
}

// guest team additions
function add1Guest() {
    guestScore++;
    guestScoreEl.textContent = guestScore;
    checkLeader();
}

function add2Guest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    checkLeader();
}

function add3Guest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    checkLeader();
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    checkLeader();
}

// change css styles depending on winning team
function checkLeader() {
    if (homeScore > guestScore && homeScore != 0) {
        homeScoreEl.style.color = green;
        homeScoreEl.style.textShadow = greenGlow;
        guestScoreEl.style.color = red;
        guestScoreEl.style.textShadow = redGlow;
    } else if (guestScore > homeScore && guestScore != 0) {
        homeScoreEl.style.color = red;
        homeScoreEl.style.textShadow = redGlow;
        guestScoreEl.style.color = green;
        guestScoreEl.style.textShadow = greenGlow;
    } else {
        homeScoreEl.style.color = white;
        homeScoreEl.style.textShadow = whiteGlow;
        guestScoreEl.style.color = white;
        guestScoreEl.style.textShadow = whiteGlow;
    }
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