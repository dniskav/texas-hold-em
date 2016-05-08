//(function(){
    //var player1 = document.getElementById('player-1');
    //var player2 = document.getElementById('player-2');

    var players = [];

    function Dealer() {
        var deck = new Maze();
        var table = new Table('table');
        var step = 0;

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
            newGame : newGame
        }
    }

    var dealer = new Dealer();
    dealer.addPlayer('player-1');
    dealer.addPlayer('player-2');
    dealButton = document.querySelector('#deal');
    dealButton.addEventListener('click', function(e){
        dealer.deal();
    });


//})();