
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
let sym = '';
let i = 0;
  while(i < num){
  sym += '#';
  console.log(sym);
  i++;
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num) {
while(num <= 15){
  if(num % 3 === 0 && num % 5 === 0){
  console.log('fizzbuzz');
  }else if(num % 3 === 0){
  console.log('fizz');
  }else if(num % 5 === 0){
  console.log('buzz');
  }else {
    console.log(num);
  }
  num++;
}

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  let board = '';
 for(var j = 0; j < size; j++){
   for (var i = 0; i < size; i++){
     if ((i + j) % 2 == 0){
      board += " ";
     } else
      board += "#";
     }
  board += "\n";
 }
 console.log(board);
}
// i = horizontal
// j = vertical
  // 0,0 0,1 0,2
  // 1,0 1,1 1,2
  // 2,0 2,1 2,2

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}