let currentRound = 1;

function startRound() {
    const question = document.getElementById('question').value;
    const tip1 = document.getElementById('tip1').value;
    const tip2 = document.getElementById('tip2').value;
    const tip3 = document.getElementById('tip3').value;

    document.getElementById('question-display').innerHTML = `Frage: ${question}`;
    document.getElementById('tips-display').innerHTML = `Tipp 1: ${tip1}`;
}

function revealAnswers() {
    const answer = document.getElementById('answer').value;
    document.getElementById('tips-display').innerHTML += `<br>Ergebnis: ${answer}`;
}

function rotateBlinds() {
    let blinds = ["s", "b", "", ""];
    blinds.unshift(blinds.pop()); // Rotiert die Blind-Symbole

    document.getElementById('p1-blind').textContent = blinds[0];
    document.getElementById('p2-blind').textContent = blinds[1];
    document.getElementById('p3-blind').textContent = blinds[2];
    document.getElementById('p4-blind').textContent = blinds[3];
}

setInterval(rotateBlinds, 10000); // Blinds rotieren jede Runde
