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

// RUCH UŻYTKOWNIKA
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


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
