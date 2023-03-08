// player cards (2 arrays), push cards into array, greater card takes both, same card means 3 are dealt and the 4th flipped
// dealer cards
// cards left
// 26 cards each, 52 total
// push in 52 cards to card deck, array of values and array of suits, loop that adds value plus suit, shuffle deck and randomly assign half to each person

cardDeck = [

]


function createDeckOfCards() {
    // Create a deck of cards that's an array of 52 objects. Each will have a suit and a value. It also has a display which is those two combined.
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = ["♣", "♦", "♥", "♠"];
    let deck = [];
    for(let i = 0; i < values.length; i++) {
        for(let j = 0; j < suits.length; j++) {
            // ERICMake an object. But why make an object and not just define a const without key values
            const newCard = {};
            // Add both a value and a suit along with the combination of those two to each of the new cards
            newCard.combined = values[i] + suits[j];
            deck.push(newCard.combined);
        }
    }
    return deck;
}

function shuffle(arr) {
    // Create a new array that stuff can be added to
    let newArr = [];
    // Loop through the array. Each time splicing out a single item and having it be a random one that we take out;
    while(arr.length > 0) {
        const idx = Math.floor(Math.random() * arr.length);
        newArr.push(arr[idx]);
        arr.splice(idx, 1);
    }
    return newArr;
}

function splitDeck(arr) {
    let computer = [];
    let player = [];
    for(i = 0; i < arr.length; i ++){
        if (i < arr.length / 2){
            computer.push(arr[i])
            console.log(computer[computer.length -1])
        } else {
            player.push(arr[i])
            console.log(player[player.length -1])
        }
    }
}

const deck = createDeckOfCards()
const deckShuffle = shuffle(deck)
splitDeck(deckShuffle)


// const front_card = document.querySelectorAll('.card')
// const back_card = document.querySelector('')