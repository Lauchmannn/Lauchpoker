let currentPot = 0;
let players = {
    player1: { chips: 1000 },
    player2: { chips: 1000 },
    player3: { chips: 1000 },
    player4: { chips: 1000 }
};

// Runde starten: Frage und Tipps festlegen
function startRound() {
    const question = document.getElementById('question').value;
    const tip1 = document.getElementById('tip1').value;
    const tip2 = document.getElementById('tip2').value;
    const tip3 = document.getElementById('tip3').value;

    // Setze Frage und Tipps für alle Spieler
    document.querySelectorAll('.question').forEach(el => el.textContent = question);
    document.querySelectorAll('.tip1').forEach(el => el.textContent = tip1);
    document.querySelectorAll('.tip2').forEach(el => el.textContent = tip2);
    document.querySelectorAll('.tip3').forEach(el => el.textContent = tip3);
}

// Setzen: Chips werden von den Spielern abgezogen und zum Pot hinzugefügt
function placeBet(playerId) {
    const betAmount = parseInt(document.getElementById(`${playerId}-bet`).value);
    const playerChips = players[playerId].chips;

    if (betAmount <= 0 || betAmount > playerChips) {
        alert("Ungültiger Einsatz!");
        return;
    }

    players[playerId].chips -= betAmount;  // Chips abziehen
    currentPot += betAmount;  // Betrag zum Pot hinzufügen

    // Aktualisiere die Anzeige des Chipsstands und des Pots
    document.getElementById(`${playerId}-chips`).textContent = players[playerId].chips;
    document.getElementById('pot').textContent = currentPot;
}

// Startchips setzen
function setStartingChips() {
    const startingChips = parseInt(document.getElementById('starting-chips').value);
    for (let player in players) {
        players[player].chips = startingChips;
        document.getElementById(`${player}-chips`).textContent = startingChips;
    }
}

// Menü öffnen
function openMenu(menuId) {
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
    document.getElementById(`${menuId}-menu`).style.display = 'block';
}

// Menü schließen
function closeMenu() {
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
    document.getElementById('main-menu').style.display = 'block';
}
