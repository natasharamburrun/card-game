window.onload = () => {
  const message = document.getElementById('message');
  const start = document.getElementById('start');
  const dealCardplayer1 = document.getElementById('dealCardplayer1');
  const dealCardplayer2 = document.getElementById('dealCardplayer2');
  const playerResults = document.getElementById('playerResults');

  let cards = [];
  const player1 = [];
  const player2 = [];
  const suits = ['spades','hearts','clubs','diams'];
  const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

  const cardOutput = document.getElementById('cards');
  const cardOutput2 = document.getElementById('cards2');

  let count = 0;

  start.onclick = () => {
    message.innerHTML = 'Welcome to the game!';
    document.getElementById('start').style.display= 'none';
    document.getElementById('dealCardplayer1').style.display= 'block';
    document.getElementById('dealCardplayer2').style.display= 'block';
    document.getElementById('playerResults').style.display= 'block';
    buildDeck();
    shuffleArrays(cards);
  };

  const buildDeck = () => {
    cards = [];
    for(var s = 0; s < suits.length; s++){
      const suit = suits[s][0].toUpperCase();
      for(var n = 0; n < numbers.length; n++) {
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
    return cards;
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
  dealCardplayer1.onclick = () => {
    // for(var i = 0; i < 6; i++) {
    if(count < 52) {
      count++;
      cardOutput.innerHTML += showCard();
    }
    // }
    player1.push(cards[count]);
    console.log(player1);
    return false;
  };

  const showCard2 = () => {
    var e = cards[count];
    var bgColor = (e.icon === 'H' || e.icon === 'D')?'red':'black';
    return '<span class="eCard "style="color:'+bgColor+'">' + e.num + '&' + e.suit + ';</span>';
  };

  dealCardplayer2.onclick = () => {
    if(count < 52) {
      count++;
      cardOutput2.innerHTML += showCard2();
    }
    player2.push(cards[count]);
    console.log(player2);
  };


  const sum = player1.reduce((value) => {
    return {
      cardValue: value.cardValue
    };
  });
  console.log(sum);


  playerResults.onclick = () => {
  //   //map through the array player1 to find cardValue
  //   //sum up the vaules of the cards
  };
};


// function whoWins(){
//   if (dealCardplayer1[0] < dealCardplayer2[0]){
//     return 'player2 wins';
//   }
// };
