const gameSummary = {
    numbers: 0,
    wins: 0,
    lossess: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = ("")); // usuwam wszystkim obramowanie
    this.style.boxShadow = ("0 0 0 2px red"); // nadaje ojedynczemu obramowanie
    game.aiHand = hands[(Math.floor(Math.random() * 3))].dataset.option;
    console.log(game.playerHand, game.aiHand);
}

function checkResult(player, ai) {
    if (player === ai) return ("draw");
    else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return ('wygrales');
    } else {
        return ('przegrales');
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;
    if (result === "draw") {
        document.querySelector('[data-summary="who-win"]').textContent = "Remis!";
        document.querySelector('[data-summary="who-win"]').style.color = "orange";
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;
    } else if (result === "wygrales") {
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś! :)";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;
    } else if (result === "przegrales") {
        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś :(";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
        document.querySelector("p.losses span").textContent = ++gameSummary.lossess;
    }

}

function gameStart() {
    if (!game.playerHand) return alert('Wybierz dłoń')
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    hands.forEach(hand => hand.style.boxShadow = (""));
    game.playerHand = "";
    game.aiHand = "";
}

const hands = [...document.querySelectorAll(".select img")];
hands.forEach(hand => hand.addEventListener('click', handSelection));
document.querySelector('.start').addEventListener('click', gameStart);