// Create an object list called player
let player = {
    name: "Nico",
    chips: 250
}

// Create an empty ordered list (array)
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
// Declare a variable called message and assign its value to an empty string
let message = ""

// Store the message-el paragraph in a variable name called messageEl
let messageEl = document.getElementById("message-el")

// Store the sum paragraph in a variable name called sumEl
let sumEl = document.getElementById("sum-el")

// Store the cards paragraph in a variable name called cardsEl
let cardsEl = document.getElementById("cards-el")

// Store the player details in a variable name called playerEl
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// Create a function called getRandomCard() to get a random number between 1 to 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Create a function called startGame()
function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Congratulations! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "Sorry, You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        // Create a new card variable called card
        let card = getRandomCard()
        // Adding the new card to the sum variable
        sum += card
        // Adding the card to the cards array
        cards.push(card)
        renderGame()
    }
}

