function playingCards(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let suits = {
        S: '\u2660 ',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    if (faces.indexOf(face) == -1) {
        throw new RangeError(`Invalid face: ${face}`);
    }

    if (!suits.hasOwnProperty(suit)) {
        throw new Error(`Invalid suite: ${suit}`);
    }

    let card = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }

    return card;
}
console.log(playingCards('A', 'S').toString());
try {
    console.log(playingCards('1', 'C').toString());
} catch (error) {
    console.log('Error creating card:', error.message);
}


