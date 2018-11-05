var cards = [];


var suits = ['spades','hearts','clubs','diams'];
var numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function buildCards(){
  cards = [];
  for(s in suits){
    var suit = suits[s][0].toUpperCase();
    for(n in numbers){
      var card = {
        suit: suits[s],
        num: numbers[n],
        cardValue: parseInt(n) + 1,
        icon: suit
      };
      cards.push(card);
    }
  }
  console.log(cards);
}

function incrementCards(a){
  count++;
  cardOutput.innerHTML += showCard();
}

// function winGame(){
//   var win = false;
//   if()
// }

function shuffleArrays(array){
  for(var i = array.length -1; i > 0; i--){
    var holder = Math.floor(Math.random() * (i + 1));
    // console.log(array[holder]);
    var temp = array[i];
    array[i] = array[holder];
    array[holder] = temp;
  }
  return array;
}
