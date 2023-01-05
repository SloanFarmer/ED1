function setup() { // runs one time
  createCanvas (720, 720); //720px canvas
  background (255,255,0)//background is grb yellow
}

function draw() { // runs in a loop
  fill (255,0,0); // fills red
  strokeWeight (8); // stroke weight 8 px
  translate (60, 60);
  quad(0,0,
        300, 0,
        300, 300,
        0, 300);

  quad(300,0,
        600, 0,
        600, 300,
        300, 300); // move quad 300 px in x direction

  quad(300,300,
        600, 300,
        600, 600,
        300, 600); // move quad 300 px in x direction
}
