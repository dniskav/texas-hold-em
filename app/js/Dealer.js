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
        var partialDeck = player.getCards().concat(table.getCards())
            .sort(function(a, b){
                return a.value - b.value
            });
        var duplicates = partialDeck.filter(function(val, ndx, arr){
            if(!arr[ndx + 1]) return false;
            return val.value === arr[ndx + 1].value
        });
        if(duplicates.length) {
            var kind = dupliates.forEach(function(v,i,a){
                
            })

        }
        return duplicates;
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

