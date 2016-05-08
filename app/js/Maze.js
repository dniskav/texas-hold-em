/**
 * Created by danielsilva on 5/7/16.
 */
var Maze = function(){
    vm = this;
    var kinds = ['hearts', 'diamonds', 'clubs', 'spades'];

    var deck = [];

    deck.generate = function  () {
        var that = this;
        kinds.forEach(function(kind){
            for(var i = 2; i <= 14; i++){
                that.push(new Card({kind: kind, value: i}))
            }
        });
        return this;
    };

    deck.shuffle = function () {
        var tempDeckO = deck.slice();
        this.length = 0;
        while(tempDeckO.length){
            deck.push(tempDeckO.splice(Math.floor(Math.random() * tempDeckO.length),1)[0])
        }
        return this;
    };

    deck.sendCard = function() {
        return deck.splice(0,1)[0];
    };

    deck.reset = function() {
        deck.length = 0;
        deck.generate().shuffle();
    };

    deck.reset();

    return deck;
};


function Card(params){
    var vm = this;
    var letters = {
        11:'J',
        12:'Q',
        13: 'K',
        14: 'A'
    };
    vm.kind = params.kind;
    vm.value = params.value;
    vm.display = (vm.value > 10) ? letters[vm.value] : vm.value;

    vm.render = function(){
        console.log(vm.display + ' of ' + vm.kind);
    }
}

