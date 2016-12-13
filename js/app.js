$(start);

var coloursArray = ['red', 'black'];
var numbersArray = ['evens', 'odds'];
var computerChoice;
var userInput;
var stake = 0;
var balance = 100;

function checkForWin() {
  // console.log('running');
  $('#spinner').attr('src', 'images/frozen.png');
  if (userInput === computerChoice) {
    $('#message').text('You chose ' + userInput + ' and the wheel gave us ' +  computerChoice + '. You Win.');
    balance += stake;
  } else if (userInput !== computerChoice) {
    $('#message').text('You chose ' + userInput + ' and the wheel gave us ' +  computerChoice + '. You have lost.');
    balance -= stake;
  }
  stake = 0;
  $('#stake').text(stake);
  updateBalance();
}

function updateBalance(){
  $('#balance').text(balance);
}

function start(){
  console.log('ready!');

  // add event listener to all buttons on the page
  $('.colours').on('click', function(){
    userInput = $(this).attr('id');
    computerChoice = coloursArray[Math.floor(Math.random()*coloursArray.length)];
    $('#message').text('The wheel is spinning!');
    setTimeout(checkForWin, 5000);
  });
  $('.numbers').on('click', function(){
    userInput = $(this).attr('id');
    computerChoice = numbersArray[Math.floor(Math.random()*numbersArray.length)];
    $('#message').text('The wheel is spinning!');
    $('#spinner').attr('src', 'images/giphy.gif');
    setTimeout(checkForWin, 5000);
  });
  $('.stake').on('click', function(){
    stake = parseInt($(this).attr('id'));
    $('#stake').text(stake);
  });
}
// when theres a click on a button, we need to extract the class from the clicked button
// for (var i = 0; i < this.buttons.length; i++)

// pick a random item out of the array e.g red or black
// var array = ['red', 'black'];
// var userInput = prompt('red or black');


// compare the random item with the clicked value
// var choice = array[Math.floor(Math.random()*array.length)];


// if the clicked value and the random array choice match, alert that the player has won // if the two values don't match, alert that the player has lost







// LETS do SOME pseudo SHALL WE?
// roulette but simplified, you cant have every option, you can choose red or black and a number or odd/even
// 3 options to bet either 5,10,15
// a button to spin the wheel
// use buttons or li's to make the table and add event listener.
// use math.random
// either have an alert saying winner, or saying how much the person won.
//

// while(true) {
//   var array = ['red', 'black']
//   var userInput = prompt('red or black');
//   var choice = array[Math.floor(Math.random()*array.length)];
//
//   if (userInput === choice) {
//     alert('win');
//     break;
//   } else {
//     alert('lose');
//   }
// }


// var array = [
//   {number: 0,color: 'red'},{number: 1,color: 'red'},{number: 2,color: 'black'},{number: 3,color: 'red'},{number: 4,color: 'black'},{number: 5,color: 'red'},{number: 6,color: 'black'},{number: 7,color: 'red'},{number: 8,color: 'black'},{number: 9,color: 'red'},{number: 10,color: 'black'},{number: 11,color: 'red'}];
