
{
  const playGame = function(playerInput){
    clearMessages();
    
    const stone = 'kamień',
          paper = 'papier',
          scissors = 'nożyce';
    
    const getMoveName = function(argMoveId){

      const unknown = 'nieznany ruch';

      if(argMoveId == 1){
        return stone;
      }
      else if(argMoveId == 2){
        return paper;
      }
      else if(argMoveId == 3){
        return scissors;
      }
      else{
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return unknown;
      }
    }

    //RUCH KOMPUTERA

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
  
    // RUCH GRACZA

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    // WYNIK GRY - FUNKCJA.

    const displayResult = function(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);

      const win = 'Ty wygrywasz!',
            remis = 'remis',
            lose = 'Tym razem przegrywasz :(';

      if( argComputerMove == stone && argPlayerMove == paper){
       printMessage(win);
      }
      else if( argComputerMove == paper && argPlayerMove == scissors){
        printMessage(win);
      }
      else if( argComputerMove == scissors && argPlayerMove == stone){
        printMessage(win);
      }
      else if(computerMove === playerMove){
        printMessage(remis);
      }
      else {
        printMessage(lose);
      }
    }

    let Result = displayResult(computerMove,playerMove);
  
  }

    // LISTENERY

    document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
    });

    document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
    });

}