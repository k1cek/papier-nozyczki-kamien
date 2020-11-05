const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

// stworzenie tablicy z obrazków

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    game.playerHand = this.dataset.option; // zwraca nazwe podana w dataset.option i wrzuca do tablicy
    // console.log(this.dataset.option);
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px red";
}

function startGame() { // funkcja GŁÓWNA sterująca
    if (!game.playerHand) return alert('Chyba o czymś zapomniałeś');
    game.aiHand = hands[(Math.floor(Math.random() * 3))].dataset.option; // zwraca nazwe w data.option :)
    const gameResult = checkResult(game.playerHand, game.aiHand);
    // console.log(game.aiHand);
    console.log(gameResult);
}


function checkResult(player, ai) {
    console.log(player);
    console.log(ai);
    if (player === ai) {
        return "draw"
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win";
    } else {
        return "loss"
    };
}

hands.forEach(hand => hand.addEventListener('click', handSelection)); // nasłuchiwanie
document.querySelector('.start').addEventListener('click', startGame);