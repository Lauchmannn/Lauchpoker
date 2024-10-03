let currentPlayer = 1;

// Runde starten: Frage und Reihenfolge festlegen
function startRound() {
    const question = document.getElementById('question').value;
    const solution = document.getElementById('solution').value;

    document.querySelectorAll('.question').forEach(el => el.textContent = question);

    // Speichere die Lösung und Frage
    localStorage.setItem('solution', solution);
    localStorage.setItem('question', question);

    // Aktiviere den ersten Spieler
    activatePlayer(1);
}

// Spieler aktivieren, der dran ist
function activatePlayer(player) {
    // Setze alle Signale auf grau (inaktiv)
    document.querySelectorAll('.signal').forEach(signal => signal.classList.remove('active'));

    // Aktivere den aktuellen Spieler
    document.getElementById(`signal-player${player}`).classList.add('active');
    
    // Aktiviere die Eingabe und den Button für den aktuellen Spieler
    document.getElementById(`player${player}-answer`).disabled = false;
    document.getElementById(`submit-player${player}`).disabled = false;
}

// Antwort abgeben
function submitAnswer(player) {
    const answer = document.getElementById(`${player}-answer`).value;
    localStorage.setItem(`${player}Answer`, answer);
    
    alert(`${player} hat seinen Tipp abgegeben: ${answer}`);

    // Deaktiviere die Eingabe und den Button des Spielers
    document.getElementById(`${player}-answer`).disabled = true;
    document.getElementById(`submit-player${player}`).disabled = true;

    // Aktivere den nächsten Spieler
    currentPlayer++;
    if (currentPlayer <= 4) {
        activatePlayer(currentPlayer);
    } else {
        alert('Alle Spieler haben ihren Tipp abgegeben.');
    }
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
