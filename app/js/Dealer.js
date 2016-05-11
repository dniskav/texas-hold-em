/**
 * Created by danielsilva on 5/7/16.
 */
function Dealer() {
    var deck = new Maze();
    var table = new Table('table');
    var step = 0;
    var goals = [
        {pair : 1},
        {dpair : 2},
        {three : 3},
        {straight : 4},
        {flush : 5},
        {full : 6},
        {poker : 7},
        {stFlush : 8},
        {ryFlush : 9}

    ];

    function evaluateHand(player){
        var maxScore;
        var result = {};
        var secuence = [];
        result.deck = {};

        result.color = {};

        var partialDeck = player.getCards().concat(table.getCards())
            .sort(function(a, b){
                return a.value - b.value
            });
        partialDeck.forEach(function(val, ndx, arr) {
            if(ndx + 1 < arr.length) {
                if(val.value + 1 === arr[ndx + 1].value) {
                    secuence.push(val);
                    if(secuence.)
                } else {
                    if(secuence.length < 5) {
                        secuence.length = 0;
                    }
                }
            }
        });
        var duplicates = partialDeck.filter(function(val, ndx, arr){
            var pairRight = false;
            var pairLeft = false;
            if(ndx + 1 < arr.length) {
                pairRight = val.value === arr[ndx + 1].value;
            }
            if(ndx > 0) {
                pairLeft = val.value === arr[ndx - 1].value;
            }


            return  pairRight || pairLeft;
        });

        partialDeck.forEach(function(val, ndx, arr){
            result.deck['c_' + val.value] = result.deck['c_' + val.value] || [];
            result.deck['c_' + val.value].push(val);
            result.color[val.kind] = result.color[val.kind] || [];
            result.color[val.kind].push(val)
        });

        result.straight = secuence;
        result.duplicates = duplicates;
        return result;
    }

    function addPlayer(el) {
        var pj = new Player(el);
        players.push(pj);
        return pj;
    }

    function deal() {
        if(players.length < 2 || step > 3) {
            newGame();
            return;
        }
        switch (step) {
            case 1:
                table.setCard(deck.sendCard());
                table.setCard(deck.sendCard());
                table.setCard(deck.sendCard());
                break;
            case 2:
                table.setCard(deck.sendCard());
                break;
            case 3:
                table.setCard(deck.sendCard());
                break;
            default :
                players.forEach(function(pj){
                    pj.setCard(deck.sendCard());
                    pj.setCard(deck.sendCard());
                });
                break;
        }
        step++;
    }

    function newGame() {
        deck.reset();
        step = 0;
        table.resetCards();
        players.forEach(function(pj){
            pj.resetCards();
        })
    }

    return {
        deal : deal,
        addPlayer : addPlayer,
        newGame : newGame,
        evaluateHand : evaluateHand
    }
}

