let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.querySelector("#message-el")
let sumEL = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")

let cash = {
    name: "Cash",
    amount: 145
}

let cashEL = document.getElementById("cash-el")
cashEL.textContent = cash.name + ": $" + cash.amount

function startGame() {
    isAlive = true
    x = randomNumber()
    y = randomNumber()
    cards = [x,y]
    sum = x + y
    renderGame()
}
function randomNumber() {
    let i = Math.floor(Math.random() * 13) + 1;
    if(i===1) {
        return 11
    }
    else if(10 < i){
        return 10
    }
    else{
        return i
    }
}

function renderGame() {
    if(sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
    message = "Congratulations!"
    hasBlackJack = true
    } else {
    message = "Unlucky!"
    }
    messageEL.textContent = message
    sumEL.textContent = "Sum: " + sum
    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }
}

function newCard() {
    if(isAlive=== true && hasBlackJack === false){
        let card = randomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }
}




