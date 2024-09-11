const reset = document.querySelector('#reset');
const playto = document.querySelector('#playto');
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

function updateScores(player, opponent) {
    player.score++
    player.display.innerText = player.score;
    if (player.display.innerText > opponent.display.innerText && player.display.innerText === playto.value) {
        player.button.setAttribute('disabled', '');
        opponent.button.setAttribute('disabled', '');
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

reset.addEventListener('click', function () {
    p1.display.innerText = 0;
    p2.display.innerText = 0;
    p1.button.removeAttribute("disabled", "");
    p2.button.removeAttribute("disabled", "");
    p1.display.setAttribute("class", "");
    p2.display.setAttribute("class", "");
    p1.score = 0;
    p2.score = 0;
})



