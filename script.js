let currentPot = 0;
let bettingPhase = false;
let currentPlayer = 1;

// Runde starten: Frage, Lösung und Tipps sammeln
function startRound() {
    const question = document.getElementById('question').value;
    const solution = document.getElementById('solution').value;
    const tip1 = document.getElementById('tip1').value;
    const tip2 = document.getElementById('tip2').value;
    const tip3 = document.getElementById('tip3').value;

    // Speichere die Frage, Lösung und Tipps
    localStorage.setItem('question', question);
    localStorage.setItem('solution', solution);
    localStorage.setItem('tip1', tip1);
    localStorage.setItem('tip2', tip2);
    localStorage.setItem('tip3', tip3);

    // Setze die Frage für alle Spieler
    document.querySelectorAll('.question').forEach(el => el.textContent = question);
    
    // Setze die Tipps zurück
    document.querySelectorAll('.tip1').forEach(el => el.textContent = '---');
    document.querySelectorAll('.tip2').forEach(el => el.textContent = '---');
    document.querySelectorAll('.tip3').forEach(el => el.textContent = '---');
}

// Tipp von Spielern entgegennehmen
function submitAnswer(player) {
    const answer = document.getElementById(`${player}-answer`).value;
    localStorage.setItem(`${player}Answer`, answer);
    document.getElementById(`answer-${player}`).textContent = answer;

    // Deaktiviere das Antwortfeld, damit der Spieler seinen Tipp nicht ändern kann
    document.getElementById(`${player}-answer`).disabled = true;
    document.getElementById(`submit-${player}`).disabled = true;
}

// Startchips setzen
function setStartingChips() {
    const startingChips = document.getElementById('starting-chips').value;
    document.getElementById('player1-chips').textContent = startingChips;
    document.getElementById('player2-chips').textContent = startingChips;
    document.getElementById('player3-chips').textContent = startingChips;
    document.getElementById('player4-chips').textContent = startingChips;

    localStorage.setItem('player1Chips', startingChips);
    localStorage.setItem('player2Chips', startingChips);
    localStorage.setItem('player3Chips', startingChips);
    localStorage.setItem('player4Chips', startingChips);
}

// Blinds anpassen
function adjustBlinds() {
    const smallBlind = document.getElementById('small-blind').value;
    const bigBlind = document.getElementById('big-blind').value;

    document.getElementById('player1-blind').textContent = 'Small Blind';
    document.getElementById('player2-blind').textContent = 'Big Blind';
    document.getElementById('player3-blind').textContent = 'Kein Blind';
    document.getElementById('player4-blind').textContent = 'Kein Blind';
}

// Einsatz setzen
function placeBet(player) {
    if (!bettingPhase) {
        return;  // Setzen nicht erlaubt, wenn die Wettphase nicht gestartet wurde
    }

    const bet = parseInt(document.getElementById(`${player}-bet`).value);
    const chips = document.getElementById(`${player}-chips`);
    const currentChips = parseInt(chips.textContent);

    if (bet > currentChips || bet <= 0) {
        return; // Ungültiger Einsatz
    }

    chips.textContent = currentChips - bet;
    currentPot += bet;
    updatePotDisplay();
    advanceToNextPlayer();
}

// Aktuellen Pot anzeigen
function updatePotDisplay() {
    document.getElementById('player1-pot').textContent = currentPot;
    document.getElementById('player2-pot').textContent = currentPot;
    document.getElementById('player3-pot').textContent = currentPot;
    document.getElementById('player4-pot').textContent = currentPot;
}

// Tipp aufdecken
function revealTip(tipNumber) {
    const tip = localStorage.getItem(`tip${tipNumber}`);
    document.querySelectorAll(`.tip${tipNumber}`).forEach(el => el.textContent = tip);
}

// Setzrunde starten
function startBettingRound() {
    bettingPhase = true;
    currentPlayer = 1; // Setze auf Spieler 1

    activatePlayer(currentPlayer);
}

// Spieler aktivieren
function activatePlayer(player) {
    document.querySelectorAll('.signal').forEach(signal => signal.classList.remove('active'));
    document.getElementById(`signal-player${player}`).classList.add('active');

    document.querySelectorAll('input[type="number"]').forEach(input => input.disabled = true);
    document.querySelectorAll('button[id^="bet-player"]').forEach(button => button.disabled = true);

    document.getElementById(`player${player}-bet`).disabled = false;
    document.getElementById(`bet-player${player}`).disabled = false;
}

// Zum nächsten Spieler gehen
function advanceToNextPlayer() {
    currentPlayer++;
    if (currentPlayer <= 4) {
        activatePlayer(currentPlayer);
    }
}

// Menü öffnen
function openMenu(menuId) {
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
    document.getElementById(menuId + '-menu').style.display = 'block';
}

// Menü schließen
function closeMenu() {
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
    document.getElementById('main-menu').style.display = 'block';
}
