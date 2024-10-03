// Startchips setzen (vom Moderator)
function setStartingChips() {
    const startingChips = document.getElementById('starting-chips').value;
    document.getElementById('player1-chips').textContent = startingChips;
    document.getElementById('player2-chips').textContent = startingChips;
    document.getElementById('player3-chips').textContent = startingChips;
    document.getElementById('player4-chips').textContent = startingChips;
    alert('Startchips für alle Spieler auf ' + startingChips + ' gesetzt.');
}

// Öffnet das jeweilige Menü basierend auf der Auswahl
function openMenu(menuId) {
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
    document.getElementById(menuId + '-menu').style.display = 'block';
}

// Schließt das aktuelle Menü
function closeMenu() {
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
    document.getElementById('main-menu').style.display = 'block';
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
