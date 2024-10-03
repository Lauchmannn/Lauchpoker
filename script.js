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
    const smallBlind = document.getElementById('small-blind').value;
    const bigBlind = document.getElementById('big-blind').value;
    document.getElementById('player1-blind').textContent = 'Small Blind';
    document.getElementById('player2-blind').textContent = 'Big Blind';
    document.getElementById('player3-blind').textContent = 'Kein Blind';
    document.getElementById('player4-blind').textContent = 'Kein Blind';

    localStorage.setItem('smallBlind', smallBlind);
    localStorage.setItem('bigBlind', bigBlind);

    alert('Blinds eingestellt: Small Blind: ' + smallBlind + ' | Big Blind: ' + bigBlind);
}

// Runde starten: Frage und Blinds setzen
function startRound() {
    const question = document.getElementById('question').value;
    const tip1 = document.getElementById('tip1').value;
    const tip2 = document.getElementById('tip2').value;
    const tip3 = document.getElementById('tip3').value;

    document.querySelectorAll('.question').forEach(element => element.textContent = question);

    document.querySelectorAll('.tip1').forEach(element => element.textContent = '---');
    document.querySelectorAll('.tip2').forEach(element => element.textContent = '---');
    document.querySelectorAll('.tip3').forEach(element => element.textContent = '---');

    localStorage.setItem('question', question);
    localStorage.setItem('tip1', tip1);
    localStorage.setItem('tip2', tip2);
    localStorage.setItem('tip3', tip3);

    alert('Runde gestartet: Frage gesetzt.');
}

// Tipp aufdecken
function revealTip(tipNumber) {
    const tip = localStorage.getItem('tip' + tipNumber);

    document.querySelectorAll('.tip' + tipNumber).forEach(element => element.textContent = tip);

    alert('Tipp ' + tipNumber + ' aufgedeckt.');
}

// Beim Laden der Seite gespeicherte Frage und Tipps laden
window.onload = function() {
    const savedQuestion = localStorage.getItem('question');
    const savedTip1 = localStorage.getItem('tip1');
    const savedTip2 = localStorage.getItem('tip2');
    const savedTip3 = localStorage.getItem('tip3');

    if (savedQuestion) {
        document.querySelectorAll('.question').forEach(element => element.textContent = savedQuestion);
    }
    if (savedTip1) {
        document.querySelectorAll('.tip1').forEach(element => element.textContent = savedTip1);
    }
    if (savedTip2) {
        document.querySelectorAll('.tip2').forEach(element => element.textContent = savedTip2);
    }
    if (savedTip3) {
        document.querySelectorAll('.tip3').forEach(element => element.textContent = savedTip3);
    }
}
