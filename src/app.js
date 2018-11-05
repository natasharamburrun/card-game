window.onload = () => {
  const message = document.getElementById('message');
  const start = document.getElementById('start');

  let cards = [];
  const suits = ['spades','hearts','clubs','diams'];
  const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

  const cardOutput = document.getElementById('cards');

  const count = 0;

  start.onclick = () => {
    message.innerHTML = 'Welcome to the game!';
    document.getElementById('start').style.display= 'none';
    document.getElementById('addCard').style.display= 'none';
    buildDeck();
    playerTwo();
    playerOne();
  };

  const buildDeck = () => {
    cards = [];
    for(s in suits){
      const suit = suits[s][0].toUpperCase();
      for(n in numbers){
        const card = {
          suit: suits[s],
          num: numbers[n],
          cardValue: parseInt(n) + 1,
          icon: suit
        };
        cards.push(card);
      }
    }
    console.log(cards);
  };

  const shuffleArrays = (array) => {
    for(var i = array.length -1; i > 0; i--){
      var holder = Math.floor(Math.random() * (i + 1));
      // console.log(array[holder]);
      var temp = array[i];
      array[i] = array[holder];
      array[holder] = temp;
    }
    return array;
  };

  const showCard = () => {
    var c = cards[count];
    var bgColor = (c.icon === 'H' || c.icon === 'D')?'red':'black';
    return '<span class="cCard "style="color:'+bgColor+'">' + c.num + '&' + c.suit + ';</span>';
  };

  const playerTwo = () => {
    shuffleArrays(cards);
    showCard();
    cardOutput.innerHTML += showCard();
  };

  const playerOne = () => {
    shuffleArrays(cards);
    showCard();
    cardOutput.innerHTML += showCard();
  };
};

// function incrementCards(a){
//   count++;
//   cardOutput.innerHTML += showCard();
// }
//
//

// function winGame(){
//   var win = false;
//   if()
// }
