// Startchips setzen (vom Moderator) und im LocalStorage speichern
function setStartingChips() {
    const startingChips = document.getElementById('starting-chips').value;
    document.getElementById('player1-chips').textContent = startingChips;
    document.getElementById('player2-chips').textContent = startingChips;
    document.getElementById('player3-chips').textContent = startingChips;
    document.getElementById('player4-chips').textContent = startingChips;

    // Startchips im LocalStorage speichern
    localStorage.setItem('player1Chips', startingChips);
    localStorage.setItem('player2Chips', startingChips);
    localStorage.setItem('player3Chips', startingChips);
    localStorage.setItem('player4Chips', startingChips);

    alert('Startchips für alle Spieler auf ' + startingChips + ' gesetzt.');
}

// Einsätze setzen
function placeBet(player) {
    const bet = parseInt(document.getElementById(player + '-bet').value);
    const chips = document.getElementById(player + '-chips');
    const currentChips = parseInt(chips.textContent);

    if (bet > currentChips) {
        alert(player + ' kann nicht mehr Chips setzen, als verfügbar sind.');
    } else if (bet <= 0) {
        alert('Einsatz muss größer als 0 sein.');
    } else {
        chips.textContent = currentChips - bet;
        alert(player + ' hat ' + bet + ' Chips gesetzt.');
    }
}

// Blinds anpassen
function adjustBlinds() {
    const smallBlind = document.getElementById('small-blind').value;
    const bigBlind = document.getElementById('big-blind').value;
    alert('Small Blind: ' + smallBlind + ' | Big Blind: ' + bigBlind);
}

// Frage und Tipps setzen
function setQuestion() {
    const question = document.getElementById('question').value;
    const tip1 = document.getElementById('tip1').value;
    const tip2 = document.getElementById('tip2').value;
    const tip3 = document.getElementById('tip3').value;
    alert('Frage: ' + question + '\nTipp 1: ' + tip1 + '\nTipp 2: ' + tip2 + '\nTipp 3: ' + tip3);
}

// Lösung setzen
function setSolution() {
    const solution = document.getElementById('solution').value;
    document.getElementById('current-solution').querySelector('span').textContent = solution;
    alert('Lösung gesetzt: ' + solution);

    // Optional: Lösung im LocalStorage speichern
    localStorage.setItem('quizSolution', solution);
}

// Wenn die Seite geladen wird, überprüfen, ob es bereits eine gespeicherte Lösung gibt und gespeicherte Chips laden
window.onload = function() {
    const savedSolution = localStorage.getItem('quizSolution');
    if (savedSolution) {
        document.getElementById('current-solution').querySelector('span').textContent = savedSolution;
    }

    // Gespeicherte Chips laden
    const player1Chips = localStorage.getItem('player1Chips');
    const player2Chips = localStorage.getItem('player2Chips');
    const player3Chips = localStorage.getItem('player3Chips');
    const player4Chips = localStorage.getItem('player4Chips');

    if (player1Chips) {
        document.getElementById('player1-chips').textContent = player1Chips;
    }
    if (player2Chips) {
        document.getElementById('player2-chips').textContent = player2Chips;
    }
    if (player3Chips) {
        document.getElementById('player3-chips').textContent = player3Chips;
    }
    if (player4Chips) {
        document.getElementById('player4-chips').textContent = player4Chips;
    }
}
