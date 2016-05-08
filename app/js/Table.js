/**
 * Created by danielsilva on 5/7/16.
 */
function Table (htmlEl){
    var cards = [];
    var htmlElement = document.getElementById(htmlEl);

    function setCard (card) {
        var cardHTML = document.createElement('div');
        cardHTML.className = 'card ' + card.kind;
        cardHTML.innerText = card.display;
        htmlElement.appendChild(cardHTML);
        cards.push(card);
    }

    function resetCards () {
        htmlElement.innerText = '';
        cards.length = 0;
    }

    return {
        setCard : setCard,
        cards : cards,
        resetCards : resetCards
    }

}