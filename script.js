'use strict';
/*document.querySelector('.message').textContent = 'correct number';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = '23';//value property is use to get the value from a element or set the value of a element//*/

//Handling click events and game logic//
let secretNumber = Math.floor(Math.random()*20)+1;
//console.log(secretNumber);
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',()=>{
    //console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent = 'No Number'; 
    }
    //when player wins
    else if(secretNumber === guess){
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        //manipulating CSS style
        document.querySelector('body').style.backgroundColor = '#60b347';
        //whenever we are manipulating a style we need to specify a string
        /*example*/document.querySelector('.number').style.width = '30rem'
        if(score>highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess != secretNumber){
        if (score > 1){
            if(guess > secretNumber){
                document.querySelector('.message').textContent = 'Too high'
                score--;
                document.querySelector('.score').textContent = score;   
            }
            else{
                document.querySelector('.message').textContent = 'Too Low'
                score--;
                document.querySelector('.score').textContent = score;
            }
        }
        else{
            document.querySelector('.message').textContent = 'loss the game'
            document.querySelector('.score').textContent = 0;
        }
    }
    //when guess is high
   /* else if(guess > secretNumber ){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'loss the game'
            document.querySelector('.score').textContent = 0;
        }
    }*/
    //when guess is low
    /*else if(guess < secretNumber ){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'loss the game'
            document.querySelector('.score').textContent = 0;
        }    
    }*/
});
document.querySelector('.again').addEventListener('click',()=>{
    score = 20 ;
    secretNumber = Math.floor(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    //whenever we are manipulating a style we need to specify a string
    /*example*/document.querySelector('.number').style.width = '15rem'
})