// Öffnet das jeweilige Menü basierend auf der Auswahl
function openMenu(menuId) {
    // Alle Menüs ausblenden
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
    // Das ausgewählte Menü anzeigen
    document.getElementById(menuId + '-menu').style.display = 'block';
}

// Schließt das aktuelle Menü und zeigt das Hauptmenü wieder an
function closeMenu() {
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
    document.getElementById('main-menu').style.display = 'block';
}

// Startchips setzen (vom Moderator) und im LocalStorage speichern
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
    const smallBlind = document.getElement
