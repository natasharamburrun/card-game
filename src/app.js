window.onload = () => {
  const message = document.getElementById('message');
  const start = document.getElementById('start');
  const dealCard = document.getElementById('dealCard');

  let cards = [];
  const suits = ['spades','hearts','clubs','diams'];
  const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

  const cardOutput = document.getElementById('cards');

  let count = 0;

  const order = [];

  start.onclick = () => {
    message.innerHTML = 'Welcome to the game!';
    document.getElementById('start').style.display= 'none';
    document.getElementById('dealCard').style.display= 'block';
    buildDeck();
    shuffleArrays(cards);
    // playerTwo();
    // playerOne();
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

  dealCard.onclick = () => {
    for(var i = 0; i < 6; i++) {
      if(count < 52) {
        count++;
        cardOutput.innerHTML += showCard();
      }
    }
    return false;
  };


  // const playerTwo = () => {
  //   shuffleArrays(cards);
  //   showCard();
  //   cardOutput.innerHTML += showCard();
  // };
  //
  // const playerOne = () => {
  //   shuffleArrays(cards);
  //   showCard();
  //   cardOutput.innerHTML += showCard();
  // };
};
