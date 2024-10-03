let currentPot = 0;
let currentBet = 0;
let players = {
    player1: { chips: 1000, inGame: true, hasBet: false },
    player2: { chips: 1000, inGame: true, hasBet: false },
    player3: { chips: 1000, inGame: true, hasBet: false },
    player4: { chips: 1000, inGame: true, hasBet: false }
};

// Runde starten: Frage und Tipps festlegen und Pot resetten
function startRound() {
    currentPot = 0;
    currentBet = 0;
    for (let player in players) {
        players[player].hasBet = false;
        players[player].inGame = true;
        document.getElementById(`${player}-chips`).textContent = players[player].chips;
    }
    updatePotDisplay();

    const question = document.getElementById('question').value;
    const tip1 = document.getElementById('tip1').value;
    const tip2 = document.getElementById('tip2').value;
    const tip3 = document.getElementById('tip3').value;

    // Frage und Tipps setzen
    document.querySelectorAll('.question').forEach(el => el.textContent = question);
    document.querySelectorAll('.tip1').forEach(el => el.textContent = '---');
    document.querySelectorAll('.tip2').forEach(el => el.textContent = '---');
    document.querySelectorAll('.tip3').forEach(el => el.textContent = '---');
}

// Tipp aufdecken
function revealTip(tipNumber) {
    const tip = document.getElementById(`tip${tipNumber}`).value;
    document.querySelectorAll(`.tip${tipNumber}`).forEach(el => el.textContent = tip);
}

// Einsatz setzen (Raise oder Call)
function placeBet(playerId, action) {
    const betAmount = parseInt(document.getElementById(`${playerId}-bet`).value);
    const playerChips = players[playerId].chips;

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > playerChips) {
        alert("Ungültiger Einsatz!");
        return;
    }

    if (action === 'raise') {
        if (betAmount <= currentBet) {
            alert("Der Einsatz muss höher als der aktuelle Einsatz sein.");
            return;
        }
        currentBet = betAmount;
        players[playerId].hasBet = true;
    } else if (action === 'call') {
        if (betAmount < currentBet) {
            alert("Du musst mindestens den aktuellen Einsatz mitgehen.");
            return;
        }
        players[playerId].hasBet = true;
    }

    players[playerId].chips -= betAmount;
    currentPot += betAmount;

    document.getElementById(`${playerId}-chips`).textContent = players[playerId].chips;
    updatePotDisplay();
}

// Spieler aussteigen lassen (Fold)
function fold(playerId) {
    players[playerId].inGame = false;
    alert(`${playerId} ist ausgestiegen.`);
}

// Pot anzeigen und aktualisieren
function updatePotDisplay() {
    document.querySelectorAll('.pot').forEach(el => el.textContent = currentPot);
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
