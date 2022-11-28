'use strict';
const player1 = document.querySelector('.player--1')
const player0 = document.querySelector('.player--0')
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const  current0EL = document.querySelector('#current--0');
const  current1EL = document.querySelector('#current--1');

//CONDITIONS 

let scores, currentScore, activePlayer, playing;
// const scores = [0,0];
// score0.textContent = 0;
// score1.textContent = 0;
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

// const init = () => {
//     scores = [0,0];
//     currentScore = 0;
//     activePlayer = 0;
//     playing = true;



//     score0.textContent = 0;
//     score1.textContent = 0;
//     current0EL.textContent = 0;
//     current1EL.textContent = 0;

//     dice.classList.add('hidden');
//    player0.classList.remove('player--winner');
//    player1.classList.remove('player--winner');
//    player0.classList.add('player--active');
//    player1.classList.remove('player--active');
// }
// init()



const switchPlayer = () => {
     //swite to next player
     activePlayer = activePlayer == 0 ? 1 : 0;
     currentScore = 0
     //SET THE NUMBER BACKM TO ZERO
     document.querySelector(`#current--${activePlayer}`).textContent = 0; 
     player0.classList.toggle('player--active');
     player1.classList.toggle('player--active');
}


// TO HIDE AN ELEMENT IN JS
dice.classList.add('hidden');

//DICE ROLLING FUNCTIONS

btnRoll.addEventListener('click', () => {
    if (playing) {
    

      // RANDOM NUMBER FOR DICE ROLLING
         const diceRoll = Math.trunc(Math.random()*6) +1;
        console.log(diceRoll)
//   REMOVE THE HIDDEN ELEMENT
        dice.classList.remove('hidden');

     // APPLY THE PIX CHANGING
        dice.src = `dice-${diceRoll}.png`;

     //TO check if a 1 or not

         if (diceRoll !== 1) {
        //add to current score
        currentScore += diceRoll;
        // current0EL.textContent = currentScore;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        // swite to the other side 
         } else {
       
        // //swite to next player
        // activePlayer = activePlayer == 0 ? 1 : 0;
        // currentScore = 0
        // //SET THE NUMBER BACKM TO ZERO
        // document.querySelector(`#current--${activePlayer}`).textContent = 0; 
        // player0.classList.toggle('player--active');
        // player1.classList.toggle('player--active');

        switchPlayer();
         }
     }
    
});

btnHold.addEventListener('click', () => {
    if (playing) {
        
   
    //add score to active player before leaving

    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];



    
        //check if score is 100 .player with it wins

        if (scores[activePlayer] >= 100) {
            playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        dice.classList.add('hidden');
        }
        else{
            //switch to the next player
    switchPlayer();
        }
    }
    
});

// btnNew.addEventListener('click', () => {
    
// //   score0.textContent = 0;
// //  score1.textContent = 0;
// //  current0EL.textContent = 0;
// //  current1EL.textContent = 0;
// // player0.classList.remove('player--winner')
// // player1.classList.remove('player--winner')
// // player0.classList.add('player--active')
// // player1.classList.remove('player--active')

// })

btnNew.addEventListener('click',init)
 //90