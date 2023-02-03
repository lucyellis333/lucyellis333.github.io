//Hello, I am going to make a gif search bar in which the viewer can develop their own personalised gif site! 

//VARIABLES FOR API!
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=TJdD02PCTTfO1A8hlKXhSgVITFENGEW8";
var query = "&q=transparent";

//POSITION FOR API IMAGES!
let xpos = [];
let ypos = [];

//VARIABLES FOR BUTTON!
let input, button, greeting;
var button2;

//VARIABLE FOR FRAME IMAGE FOR BUTTON!
var frame;

//CREATING CANVAS AND BACKGROUND!
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(255);

}

//CREATING A FUNCTIONING SUBMIT BUTTON!
function greet(){
  const name = input.value();

  var query = "&q=transparent+"+name;
  var url = api + apiKey + query;
  console.log(query);
  loadJSON(url, gotData);
}

//USING API TO LOAD IMAGES OF GIFS AND PLACING THEM IN RANDOM POSITIONS!
function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    img = createImg(giphy.data[i].images.original.url);
    img.size(150, 150);
    xpos[i] = random(0, windowWidth) 
    ypos[i] = random(0, windowHeight) 
    img.position(xpos[i], ypos[i]);
  }
}


//DRAWING BACKGROUND AND BUTTONS!
function draw() {
  background(255);

  //SUBMIT BUTTON!
  input = createInput();
  input.position(50, 90);

  button = createButton('submit');
  button.position(input.x + input.width, 90);
  button.mousePressed(greet);

  greeting = createElement('h2', 'type in a word!');
  greeting.position(50, 30);

  //RESTART BUTTON!
  button2 = createButton('restart');
  button2.position(input.x + input.width, 115);
  button2.mousePressed(resetSketch);

  noLoop();
  }

//CREATING A FUNCTIONING RESTART BUTTON!
function resetSketch(){
    removeElements();
    draw();
 }
