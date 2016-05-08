/**
 * Created by danielsilva on 5/7/16.
 */
function Player(el){
    vm = this;
    var cards = [];
    var htmlElement = document.getElementById(el);

    function setCard (card) {
        var cardHTML = document.createElement('div');
        cardHTML.className = 'card ' + card.kind;
        cardHTML.innerText = card.display;
        htmlElement.appendChild(cardHTML);
        cards.push(card);
    }

    function getCards () {
        return cards;
    }

    function resetCards () {
        htmlElement.innerText = '';
        cards.length = 0;
    }

    return {
        setCard : setCard,
        getCard : getCards,
        resetCards : resetCards
    }
}
