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
    $('#spinner').attr('src', 'images/giphy.gif');
    var audio = new Audio('audio/wheel.mp3');
    audio.play();
    setTimeout(checkForWin, 5000);
  });
  $('.numbers').on('click', function(){
    userInput = $(this).attr('id');
    computerChoice = numbersArray[Math.floor(Math.random()*numbersArray.length)];
    $('#message').text('The wheel is spinning!');
    $('#spinner').attr('src', 'images/giphy.gif');
    var audio = new Audio('audio/wheel.mp3');
    audio.play();
    setTimeout(checkForWin, 5000);
  });
  $('.stake').on('click', function(){
    stake = parseInt($(this).attr('id'));
    $('#stake').text(stake);
  });
}
