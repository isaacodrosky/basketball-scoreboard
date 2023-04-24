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
// save button
const saveBtn = document.getElementById('save-btn');
// previous scores display div
const prevScores = document.getElementById('prev-scores');
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

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    checkLeader();
}

// change css styles depending on winning team
function checkLeader() {
    if (homeScore > guestScore) {
        homeScoreEl.classList.add("winning");
        homeScoreEl.classList.remove("losing");
        guestScoreEl.classList.add("losing");
        guestScoreEl.classList.remove("winning");
    } else if (guestScore > homeScore) {
        homeScoreEl.classList.remove("winning");
        homeScoreEl.classList.add("losing");
        guestScoreEl.classList.remove("losing");
        guestScoreEl.classList.add("winning");
    } else {
        homeScoreEl.classList.remove("winning");
        homeScoreEl.classList.remove("losing");
        guestScoreEl.classList.remove("winning");
        guestScoreEl.classList.remove("losing");
    }
}

function saveScores() {
    if (homeScore > guestScore) {
        prevScores.innerHTML += `
        <div class="saved-game">
            <p class="winning">Home: ${homeScore}</p>
            <p class="losing">Away: ${guestScore}<p>
        </div>`
    } else if (guestScore > homeScore) {
        prevScores.innerHTML += `
        <div class="saved-game">
            <p class="losing">Home: ${homeScore}</p>
            <p class="winning">Away: ${guestScore}<p>
        </div>`
    } else {
        prevScores.innerHTML += `
        <div class="saved-game">
            <p>Home: ${homeScore}</p>
            <p>Away: ${guestScore}<p>
        </div>`
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

resetBtn.addEventListener('click', resetScores);

saveBtn.addEventListener('click', saveScores);