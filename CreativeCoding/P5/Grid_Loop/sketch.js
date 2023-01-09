function setup() { // runs one time
  createCanvas (720, 720); //720px canvas
  background (255,255,0)//background is grb yellow
}

function draw() { // runs in a loop
  fill (255,0,0); // fills red
  strokeWeight (1); // stroke weight 8 px
  translate (0, 0);


  for (var y = 0; y < 720; y = y + 360){
  for (var x = 0; x < 720; x = x + 360){ // loop creates a row in x direction

    quad(x, y,
          x + 360, y,
          x + 360, y + 360,
          x, y + 360);

}
}
}
