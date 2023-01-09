// create a program that can be customized to the # of squares in a grid

function setup() { // runs one time
  createCanvas (windowWidth, windowWidth); //720px canvas
  background (255,255,0)//background is grb yellow
}
function draw() { // runs in a loop
  fill (255, 255, 0); // fills red
  strokeWeight (1); // stroke weight 8 px
  translate (0, 0);

  var num = 30; // number of squares in my array
  var sideLen = windowWidth/num; //side length

  for (var y = 0; y < windowWidth; y = y + sideLen){
  for (var x = 0; x < windowWidth; x = x + sideLen){ // loop creates a row in x direction

    quad(x, y,
          x + sideLen, y,
          x + sideLen, y + sideLen,
          x, y + sideLen);

}
}
}
