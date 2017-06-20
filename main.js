//console.log("Working");


//list of variables that are arrays of all the possible groups of divs on diagonal posibilities/index stating from 0 at the top of the board
// const downRight2 = document.querySelectorAll('.dr2');
// const downRight3 = document.querySelectorAll('.dr3');
// const downRight4 = document.querySelectorAll('.dr4');
// const downRight5 = document.querySelectorAll('.dr5');
// const downRight6 = document.querySelectorAll('.dr6');
// const downRight7 = document.querySelectorAll('.dr7');
// const downLeft1 = document.querySelectorAll('.dl1');
// const downLeft2 = document.querySelectorAll('.dl2');
// const downLeft3 = document.querySelectorAll('.dl3');
// const downLeft4 = document.querySelectorAll('.dl4');
// const downLeft5 = document.querySelectorAll('.dl5');
// const downLeft6 = document.querySelectorAll('.dl6');
// const downLeft7 = document.querySelectorAll('.dl7');

//all divs with the class square/ all divs on the board
//const gameBoard = document.querySelectorAll('.square');

//variable to store the innerHTML of selected div
//let storeLetter = null;

//variable to store the node selected/ so i can remove its value if i want its value to be moved to a different div
//let placeHolder = null;

//variable meant to store the index of the clicked div in the two arrays selected (I didnt use this variable yet)
//let storeIndex = null;


//for Red peices check index -1 on both arrays
//for Black peices check index +1 on both arrays

// variable to count the clicks to try and keep track of what my next moves can be (didnt use this yet either)
//clickCounter = 0;


//create a function movePeice() that takes in an array
  // function movePiece(array) {
  //   //loop through the array
  //   for (let i = 0; i < array.length; i++) {
  //     //add an eventListener to every div in array
  //     array[i].addEventListener('click', function() {
       
  //      processClick(getId(array[i]));
      //   //if the div i clicked on HAS a value then...(initial click)
      //   if (array[i].innerHTML !== "") {
      //     //store the innerHTML value in variable
      //     storeLetter = array[i].innerHTML;
      //     //store its node or position in the array (really two arrays)
      //     placeHolder = array[i];
      //     //log its position in the array
      //     console.log(placeHolder);                                                                                           //clicking the one in parens
      //     //else if the div I clicked on has no value AND the next div in the array has an innerHTML value of "B"(for Black) ex. [R, B, ((""))]
      //   } else if (storeLetter === "R" && array[i + 1].innerHTML === "B") {
      //     //the div i clicked on should take on the value I want it to ex. [R, B, R]
      //     array[i].innerHTML = storeLetter;
      //     // I jumped over this value so i erase it  ex. [R, "", R]
      //     array[i + 1].innerHTML = "";
      //     // and I remove the store positions value because i jumped from it ex. ["", "", R]
      //     placeHolder.innerHTML = "";
      //     //else if the div I clicked on has no value AND the next div in the array has an innerHTML value of "R"(for Red) ex. [B, R, ((""))]
      //   } else if (storeLetter === "B" && array[i - 1].innerHTML === "R") {
      //     //the div i clicked on should take on the value I want it to ex. [B, R, B-]
      //     array[i].innerHTML = storeLetter;
      //     // I jumped over this value so i erase it  ex. [B, "", B]
      //     array[i - 1].innerHTML = "";
      //     // and I remove the store positions value because i jumped from it ex. ["", "", B]
      //     placeHolder.innerHTML = "";
      //     //else, if the div i click on HAS NO value
      //   }  else {
      //     //the div i click on should take on the innerHTML value stored in storeLetter variable
      //     array[i].innerHTML = storeLetter;
      //     // and the node store in the variable placeHolder should have a value of nothing;
      //     placeHolder.innerHTML = "";
      //   } 
  //      });
  //    }
  // }

//I call the movePiece function on all of the possible arrays on the board
  // movePiece(downLeft1);
  // movePiece(downLeft2);
  // movePiece(downLeft3);
  // movePiece(downLeft4);
  // movePiece(downLeft5);
  // movePiece(downLeft6);
  // movePiece(downLeft7);
  // movePiece(downRight2);
  // movePiece(downRight3);
  // movePiece(downRight4);
  // movePiece(downRight5);
  // movePiece(downRight6);
  // movePiece(downRight7);
  //movePiece(gameBoard);



// function getId(node) {

//   return(node.id);
// }

// function processClick(id) {
//   console.log(id);
// }







//------------------------------------------Im not working on this yet--------------------------------------------------------------------
// function hinter(array) {
//     for (let i = 0; i < array.length; i++) {  
//         array[i].addEventListener('click', function() {
//           if (array[i].innerHTML !== "" && array[i - 1].innerHTML === "") {
//             array[i - 1].style.border = '5px solid lawngreen';
//             document.addEventListener('keyup', function(event) {
//               if (event.keycode === 39) {
//                 console.log('hello');
//               }
//             });
//           }
//           // if (array[i - 1].style.border === '5px solid lawngreen' && clickCounter === 1) {
//           //}
//         });
//     }
// }

// hinter(downLeft1);
// hinter(downLeft2);
// hinter(downLeft3);
// hinter(downLeft4);
// hinter(downLeft5);
// hinter(downLeft6);
// hinter(downLeft7);
// hinter(downRight2);
// hinter(downRight3);
// hinter(downRight4);
// hinter(downRight5);
// hinter(downRight6);
// hinter(downRight7);




// x0y0.addEventListener('click', function() {
//     storeLetter = x0y0.innerHTML;
    
//     x1y1.addEventListener('click', function() {
//       x0y0.innerHTML = "";
//       x1y1.innerHTML = storeLetter;
//     });
// });



