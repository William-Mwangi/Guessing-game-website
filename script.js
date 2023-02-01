'use strict';

/*console.log(document.querySelector('.message')); //this DOM manipulation method selects an element
console.log(document.querySelector('.message').textContent); //this DOM manipulation method returns the text content of an element

//Document object Model is a structured representation of HTML document which allows JS to access html elements and styles to manipulate them
document.querySelector('.message').textContent = 'Waiting for correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
//for input fields we use .value instead of textContent

document.querySelector('.guess').value = 55;
console.log(document.querySelector('.guess').value);*/
const answer = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
let displayMessage = function (mess) {
  return (document.querySelector('.message').textContent = mess);
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number has been received';
  } else if (guess === answer) {
    // document.querySelector('.message').textContent =
    //   '🎉🎊🎊That is the correct number';
    displayMessage('🎉🎊🎊That is the correct number');
    document.querySelector('.number').textContent = answer;
    document.querySelector('body').style.backgroundColor = 'Red';
    document.querySelector('.number').style.width = '40rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
  //   } else if (guess > answer) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Your guess is too high';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You lost the game🤣🤣😂😂';
  //     }
  //   } else if (guess < answer) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Your guess is low';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'You lost the game🤣🤣😂😂';
  //     }
  //   }
  else if (guess !== answer) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess < answer ? 'Your guess is lower' : 'Your guess is higher';
      displayMessage(
        guess < answer ? 'Your guess is lower' : 'Your guess is higher'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent =
      //     'You lost the game🤣🤣😂😂';
      displayMessage('You lost the game🤣🤣😂😂');
    }
  }

  //   for (let i = 20; i > 0; i--) {

  // break;
  //   }
  console.log(guess);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.message').textContent = 'Start guessing . . . ';
  displayMessage('Start guessing . . . ');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  //   document.location.reload();
});
document.querySelector('.refresh').addEventListener('click', function () {
  document.location.reload(true);
});

/*document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Here we go';
});*/

//the above function is an event handler
//addEventListener(the event being awaited, the event handler)
