// $(document).ready(() => {
//   $('#game').minesweeper();
// });
//draw the gameboard
const board = () => {
  let squares = [
    [1, 2, 3, 4]
    [5, 6, 7, 8]
    [9, 10, 11, 12]
  ]
  for (let i = 0; j < squares.length; i++) {
    let singleSquare = squares[i];
    for (let j = 0; j < squares.length; i++) {
      display("singleSquare[" + i + "][" + j + "] = " + square[j]);
    }
  }
}
console.log(board);
  // let column = 5;
  // let row = 12;
  // let board = "";
  //
  // for (let y = 0; y < column; y++) {
  //   if (y > 0)
  //   board += "\n";
  //   for ( let x = 0; x < row; x++){
  //     if ((x + y) % 2 == 0) {
  //       board += "";
  //     } else {
  //       board += "#";
  //     }
  //   }
  // }
  // console.log(board);
//   $('body').append('<div class = "gameboard"></div>');
// for(let y = 9; y > -1; y--){
//     $('.gameboard').append(`<div class='row${y}'></div>`)
//     for(let x = 0; x < 10; x++){
//         $(`.row${y}`).append(`<div class="game-square" x="${x}" y="${y}"></div>`)
//     }
// }

// randomize bombs to squares

//if player hit sqquares that have bombs
