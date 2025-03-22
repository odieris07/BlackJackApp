let player = {
    name: "Brent" ,
    chips: 150
}
let playerEl = document.getElementById ("player-el")
playerEl.textContent = player.name + ": $" + player.chips
let card = []
let sum = 0
let isAlive = false // set game state using boolean to prevent generation before starting
let hasBlackJack = false // set blackjack state to false to reach end state when it's set to true
let cardsEl = document.getElementById("cards-el") 
let sumEl = document.getElementById("sum-el")
let message = " "
let messageEl = document.getElementById("message-el")

function getRandomCard() { // this function acted as the range from Ace to Kings (2-11)
        let randomNumber = Math.floor(Math.random() * 13) + 1
        if (randomNumber === 1){
            return 11 
        } else if (randomNumber > 10) {
            return 10
        } else {
            return randomNumber
        }
    }

function rendergame() {
    cardsEl.textContent = "Cards: "
    for (let c = 0; c < card.length; c++)
        cardsEl.textContent += card[c] + " "
  
    if (sum < 21) {
        message = "Would you like to draw again?"
    } else if (sum === 21) {
        message = "You got a blackjack!"
        hasBlackJack = true 
    } else {
        message = "You lost the game."
        isAlive = false 
    }

    messageEl.textContent = message 
    sumEl.textContent = "Sum: " + sum 
}

function startgame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard ()
    card = [firstCard, secondCard] //set the array of the cards
    sum = firstCard + secondCard //set the formula for the sum of the cards
    rendergame()
}

function newcard (){
    if (isAlive === true && hasBlackJack === false) {
        let NewCard = getRandomCard()
        sum += NewCard
        card.push (NewCard)
        rendergame()
        cardsEl.textContent += ""
        sumEl.textContent = "Sum: " + sum
    }
}
