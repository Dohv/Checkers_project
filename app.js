console.log('second file');
//variable that stores all divs on the gameboard
const gameBoard = document.querySelectorAll('.square');

//variable to store the node value of div clicked
let selectedPiece = null;
//variable to say whose turn it is in play
let whoseTurn = "🔴";
//variables used to declare winner
let redPieceCount = 12;
let redScoreCounter = 1;

let blackPieceCount = 12;
let blackScoreCounter = 1;

//function that loops through array and adds an event listener to every div so that on every click we can keep track of what we are clicking on 
var checkers = function(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener('click', function() {
      //if statement to see if there are pieces for each team to continue playing, if one team has no more pieces the other team wins and the game stops
      if (redPieceCount > 0 && blackPieceCount > 0) {
        //function processClick takes in an object of coordinates letting us know the information about the div we clicked on
        processClick(getCoord(array[i]));
      }
    });
  }
}

//this function creates an object breaking down the information in the node and returns it so that it is accessable
function getCoord(node) {
  //used let because I didnt know if i would be changing it later and how object work with let vs. const
  let coord = {
    //store the node itself if I ever need it later
    element: node,
    //class x0y1 would have an x and y value of 0 and 1
    x: parseInt(node.id[1]),
    y: parseInt(node.id[3]),
    isPlayable: node.classList.contains('g'),
    //ran into issues with copying innerHTML because this wont set the actual innerHTML
    value: node.innerHTML,
    childNode: node.childNode,
    setValue: function(newValue) {
      this.value = newValue;
      this.element.innerHTML = newValue;
    }
  };
  
  return coord;
}

//function lets us know if the div I clicked has been selected if so you can move it
function processClick(coord) {
  if (selectedPiece === null) {
    selectPiece(coord);;
  } else {
    movePiece(coord);
  }

}
//function that is used as boolean, can I click on this div based on the info i put into my coordinate 
function isValidSelection(coord) {

  return ((coord.isPlayable === true) && (coord.value === whoseTurn));
} 

//this funtion stores the location of the selected piece in a variable if the div I chose was valid
function selectPiece(coord) {
  if (isValidSelection(coord)) {
    selectedPiece = coord;
    console.log(coord);

  }
}
//this function moves a piece one space or jumps over an enemy piece and removes it
function movePiece(destCoord) {
  if (isValidMove(destCoord)) {
    destCoord.setValue(selectedPiece.value);
    selectedPiece.setValue("");
    whoseTurn = whoseTurn === '🔴' ? '⚫' : '🔴';
    selectedPiece = null;
  } else {
    let jumpedPiece = getJumpedPiece(destCoord);

      if (jumpedPiece !== null) {
        destCoord.setValue(selectedPiece.value);
        selectedPiece.setValue("");
        if (whoseTurn === '🔴') {
          blackPieceCount--;
          const redScore = document.querySelector('.red_score');
          redScore.innerHTML = 'Red: ' + redScoreCounter++;
        } else {
          redPieceCount--;
          const blackScore = document.querySelector('.black_score');
          blackScore.innerHTML = 'Black: ' + blackScoreCounter++;
        }
        if (blackPieceCount === 0) {
          const game = document.getElementById('page-title');
          game.style.color = 'orange';
          game.innerHTML = 'RED WINS!'
        } else if (redPieceCount === 0) {
          const game = document.getElementById('page-title');
          game.style.color = 'orange';
          game.innerHTML = 'BLACK WINS';
        }
        whoseTurn = whoseTurn === '🔴' ? '⚫' : '🔴';
        jumpedPiece.innerHTML = "";
        selectedPiece = null;
      }
    }
  }


function isValidMove(destCoord) {
  
 return (destCoord.value === "" &&
   ((destCoord.x === selectedPiece.x - 1 ) || (destCoord.x === selectedPiece.x + 1)
  && ((whoseTurn === '🔴' && destCoord.y === selectedPiece.y + 1)
  || (whoseTurn === '⚫' && destCoord.y === selectedPiece.y - 1))) )
}


function getJumpedPiece(destCoord) {
  if (destCoord.value !== "" ) {
    
    return null;
  } 
  
  let changeInX = destCoord.x - selectedPiece.x;

  if (changeInX !== 2 && changeInX !== -2) {
    
    return null;
  }

  let changeInY = destCoord.y - selectedPiece.y;

  if (!(changeInY === -2  && whoseTurn === '⚫') && !(changeInY === 2 && whoseTurn === '🔴')) {
    return null;
  }

  if (changeInX < 0) {
    jumpedPieceX = selectedPiece.x + changeInX + 1;
  } else {
    jumpedPieceX = selectedPiece.x + changeInX - 1;
  }


  if (changeInY < 0) {
    jumpedPieceY = selectedPiece.y + changeInY + 1;
  } else {
    jumpedPieceY = selectedPiece.y + changeInY - 1;
  }


  jumpedPieceId = 'x' + jumpedPieceX + 'y' + jumpedPieceY;

  jumpedNode = document.getElementById(jumpedPieceId);

  return jumpedNode;
}


checkers(gameBoard);