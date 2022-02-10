function playGame (playerInput)
{
  clearMessages();

  function getMoveName(argMoveId)
  {
    if(argMoveId == 1)
    {
      return 'kamień';
    }
    else if(argMoveId == 2) 
    {
      return 'papier';
    }
    else if(argMoveId == 3) 
    {
      return 'nożyce';
    }
    else
    {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
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

  function displayResult(argComputerMove, argPlayerMove)
  {
    printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'kamień')
    {
      printMessage('remis');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'papier')
    {
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier')
    {
      printMessage('remis');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce')
    {
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    {
      printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')
    {
      printMessage('remis');
    }
    else 
    {
      printMessage('Tym razem przegrywasz :(');
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