// create a program that can be customized to the # of squares in a grid

let gif;

function preload(){
  gif = loadImage ('AssetsFile/Gif/FarmerCardGif.gif'); //Preload my image gif
}

function setup() { // runs one time
  createCanvas (windowWidth, windowWidth); //720px canvas

}
function draw() { // runs in a loop
  background (255,255,0);//background is grb yellow
  fill (255, 255, 0); // fills red
  strokeWeight (1); // stroke weight 8 px
  translate (0, 0);

  var num = 30; // number of squares in my array
  var sideLen = windowWidth/num; //side length

  translate (-150, -150); // this will give your design a bleed effect

  for (var y = 0; y < 2 * windowWidth; y = y + sideLen){
  for (var x = 0; x < 2 * windowWidth; x = x + sideLen){ // loop creates a row in x direction

          image (gif, x, y, windowWidth/num, windowWidth/num);


}
}
}
  function windowResized (){
      resizeCanvas(windowWidth, windowHeight); // resizes and refreshes with browser
  }
