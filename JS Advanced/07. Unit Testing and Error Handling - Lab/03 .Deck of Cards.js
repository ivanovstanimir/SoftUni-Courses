function deckOfCards(arr) {
    let result = [];

    for (let currentCard of arr) {
        let face = currentCard.slice(0, -1);
        let suit = currentCard.slice(-1);
        let card;
        try {
            card = playingCards(face, suit);
            result.push(card);
        } catch (error) {
            result = [`Invalid card: ${currentCard}`];
        }
    }

    console.log(result.join(' '));

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

        if (suits[suit] == undefined) {
            throw new Error(`Invalid card: ${currentCard}`);
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
}
deckOfCards(['5S', '3D', 'QD', '1C']);