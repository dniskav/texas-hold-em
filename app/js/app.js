//(function(){
    //var player1 = document.getElementById('player-1');
    //var player2 = document.getElementById('player-2');

    var players = [];

    var dealer = new Dealer();
    dealer.addPlayer('player-1');
    dealer.addPlayer('player-2');
    dealButton = document.querySelector('#deal');
    dealButton.addEventListener('click', function(e){
        dealer.deal();
    });


//})();