let score = JSON.parse(localStorage.getItem('score'));
    if (score === null) {  // !score can also be applied, null is a falsy value
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    }

    updateScoreElement();  // to make it first appear in the page
    
    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let result = '';

      if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
          result = 'You lose.';
        } else if (computerMove === 'Paper') {
          result = 'You win.';
        } else if (computerMove === 'Scissors') {
          result = 'Tie.';
        }

      } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
          result = 'You win.';
        } else if (computerMove === 'Paper') {
          result = 'Tie.';
        } else if (computerMove === 'Scissors') {
          result = 'You lose.';
        }

      } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
          result = 'Tie.';
        } else if (computerMove === 'Paper') {
          result = 'You lose.';
        } else if (computerMove === 'Scissors') {
          result = 'You win.';
        }
      }

      if (result === 'You win.') {
        score.wins++;
      } else if (result === 'You lose.') {
        score.losses++;
      } else if(result === 'Tie.'){
        score.ties++;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement(); // to update as the game plays
      
      document.querySelector('.js-result')
        .innerHTML = result;
    
      document.querySelector('.js-moves')
      .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
    }
    // when using innerHTML the line is considered as html code, not a text
    // that's why <img src="images/${playermove}-emoji.png is example to <img src="images/Rock-emoji.png"

    function updateScoreElement() {
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }


    function pickComputerMove() {
      const randomNum = Math.random();
      let computerMove = '';

      if (randomNum >= 0 && randomNum < 1 / 3) {
        computerMove = 'Rock';
      } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        computerMove = 'Paper';
      } else if (randomNum >= 2 / 3 && randomNum <= 1) {
        computerMove = 'Scissors';
      }
      return computerMove;
    }