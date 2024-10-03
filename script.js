let currentPot = 0;
let bettingPhase = false;

// Runde starten: Frage und Antworten sammeln
function startRound() {
    const question = document.getElementById('question').value;
    document.querySelectorAll('.question').forEach(el => el.textContent = question);

    alert('Runde gestartet! Die Spieler können jetzt ihre Tipps abgeben.');
    bettingPhase = false; // Setze die Wettrunde zurück
}

// Tipp von Spielern entgegennehmen
function submitAnswer(player) {
    const answer = document.getElementById(`${player}-answer`).value;
    localStorage.setItem(`${player}Answer`, answer);
    document.getElementById(`answer-${player}`).textContent = answer;

    alert(`${player} hat seine Antwort abgegeben.`);
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

    alert('Startchips für alle Spieler auf ' + startingChips + ' gesetzt.');
}

// Blinds anpassen
function adjustBlinds() {
    const smallBlind = document.getElementById('small-blind').value;
    const bigBlind = document.getElementById('big-blind').value;

    document.getElementById('player1-blind').textContent = 'Small Blind';
    document.getElementById('player2-blind').textContent = 'Big Blind';
    document.getElementById('player3-blind').textContent = 'Kein Blind';
    document.getElementById('player4-blind').textContent = 'Kein Blind';

    alert('Blinds gesetzt: Small Blind ' + smallBlind + ' | Big Blind ' + bigBlind);
}

// Einsatz setzen
function placeBet(player) {
    if (!bettingPhase) {
        alert('Die Wettrunde hat noch nicht begonnen!');
        return;
    }

    const bet = parseInt(document.getElementById(`${player}-bet`).value);
    const chips = document.getElementById(`${player}-chips`);
    const currentChips = parseInt(chips.textContent);

    if (bet > currentChips) {
        alert(player + ' kann nicht mehr Chips setzen, als verfügbar sind.');
    } else if (bet <= 0) {
        alert('Einsatz muss größer als 0 sein.');
    } else {
        chips.textContent = currentChips - bet;
        currentPot += bet;
        updatePotDisplay();
        alert(`${player} hat ${bet} Chips gesetzt.`);
    }
}

// Aktuellen Pot anzeigen
function updatePotDisplay() {
    document.getElementById('player1-pot').textContent = currentPot;
    document.getElementById('player2-pot').textContent = currentPot;
    document.getElementById('player3-pot').textContent = currentPot;
    document.getElementById('player4-pot').textContent = currentPot;
}

// Runde beginnen, in der die Spieler setzen können
function startBettingPhase() {
    alert('Die Wettrunde beginnt, Spieler können jetzt setzen.');
    bettingPhase = true;

    // Aktiviere die Einsatzfelder
    document.getElementById('bet-player1').disabled = false;
    document.getElementById('bet-player2').disabled = false;
    document.getElementById('bet-player3').disabled = false;
    document.getElementById('bet-player4').disabled = false;

    document.getElementById('player1-bet').disabled = false;
    document.getElementById('player2-bet').disabled = false;
    document.getElementById('player3-bet').disabled = false;
    document.getElementById('player4-bet').disabled = false;
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
