let players = [
    {id: 1, chips: 1000, blind: 'none'},
    {id: 2, chips: 1000, blind: 'none'}
];

let pot = 0;
let currentQuestion = 0;
const questions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        tips: ["Tipp 1: Es ist eine große Stadt", "Tipp 2: Sie liegt im Osten Deutschlands", "Tipp 3: Sie ist auch ein Bundesland"]
    },
    {
        question: "Welches Element hat das chemische Symbol H?",
        tips: ["Tipp 1: Es ist das leichteste Element", "Tipp 2: Es ist farblos", "Tipp 3: Es ist explosiv"]
    }
];

function updateChips(playerId, amount) {
    players[playerId - 1].chips += amount;
    document.getElementById(`chipsPlayer${playerId}`).innerText = players[playerId - 1].chips;
}

function updatePot(amount) {
    pot += amount;
    document.getElementById('potAmount').innerText = pot;
}

function bet(playerId) {
    const amount = 100; // Beispielbetrag
    if (players[playerId - 1].chips >= amount) {
        updateChips(playerId, -amount);
        updatePot(amount);
        alert(`Spieler ${playerId} setzt ${amount} Chips.`);
    } else {
        alert(`Spieler ${playerId} hat nicht genug Chips.`);
    }
}

function fold(playerId) {
    alert(`Spieler ${playerId} passt.`);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }
    document.getElementById('questionText').innerText = questions[currentQuestion].question;
    resetTips();
}

function resetTips() {
    const tipList = document.getElementById('tipList').children;
    for (let i = 0; i < tipList.length; i++) {
        tipList[i].innerText = `Tipp ${i + 1}: ???`;
    }
}

function revealTip(tipNumber) {
    const tipText = questions[currentQuestion].tips[tipNumber - 1];
    document.getElementById('tipList').children[tipNumber - 1].innerText = tipText;
}

function distributePot(winnerId) {
    alert(`Spieler ${winnerId} gewinnt den Pot von ${pot} Chips.`);
    updateChips(winnerId, pot);
    pot = 0; // Pot zurücksetzen
    updatePot(0);
}
