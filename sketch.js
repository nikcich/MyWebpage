let height = 800;
let width = 800;
let xVel = 0;
let yVel = 0;
let food = [];
let numFood = 500;
let fr = 60;
let neuralNet;
let frameSurvived = 0;
let stepsFrame = 1;
let genPop = 10;
let pop = [];
let headPic;
let picFood;
let generation = 1;


function preload(){
  headPic = loadImage('head.jpg');
  picFood = loadImage('food.jpg');
}

function setup() {
  createCanvas(height*2,width);
  frameRate(fr);

  for(let i = 0; i < numFood; i++){
    food[i] = new Food(height, width);
  }

  for(let i = 0; i < genPop; i++){
    pop[i] = new Brain(height, width);
  }

}

function draw() {
  for(let i = 0; i < stepsFrame; i++){
    gameStuff();
  }

  background(0);
  gameDisplay();
}

function checkDead(){
  for(let i = 0; i < genPop; i++){
    if(pop[i].active == true){
      return false;
    }
  }

  return true;
}


function gameStuff(){
  if(checkDead()){ // all the population died
    if(generation%100 == 0){
      //console.log(generation + ": " + pop[0].fitness);
    }


    //pop = insSort(pop, pop.length);
    pop = insSort(pop, pop.length);
    generation++;
    breed();
  }

  for(let i = 0; i < genPop; i++){
    pop[i].gameStuff(food);
  }
}

function breed(){
  for(let i = 0; i < pop.length/2; i++){
    //pop[i] = pop[pop.length-1-i]
    pop[i].setGenes(pop[pop.length-1-i].genes);
    pop[i].mutate();
    pop[i].active = true;
    pop[i].fitness = 0;
  }

}

function insSort(arr, n){
  let best = 0;
  for(let i = 1; i < n; i++){
    if(arr[i].fitness > arr[best].fitness){
      best = i;
    }
  }
  for(let i = 1; i < n; i++){
    arr[i] = arr[best];
  }
  return arr;
}

function gameDisplay(){
  for(let i = 0; i < numFood; i++){
    food[i].display();
    //image(picFood, food[i].x, food[i].y, 20,20)
  }

  //for(let i = 0; i < genPop; i++){
    //pop[i].gameDisplay(headPic);
  //}
  pop[0].gameDisplay(headPic);

  DisplayNetwork(pop[0]);


}

function DisplayNetwork(brain){
  let net = brain.network;
  disLayer(net.Layer1, 1);
  disLayer(net.Layer2, 2);
  disLayer(net.Layer3, 3);
  disLayer(net.Layer4, 4);
  disCons(net.connections1, net.Layer1, net.Layer2, 1);
  disCons(net.connections2, net.Layer2, net.Layer3, 2);
  disCons(net.connections3, net.Layer3, net.Layer4, 3);

}

function disCons(cons, first, second, n){
  let add = (n*175) - 175;
  let startX = 850 + add;
  let n2 = 1;
  let startY = 30*n2;

  let n3 = n+1;
  let start2X = 850+(n3*175) - 175;
  let n4 = 1;
  let start2Y = 30*n4;

  for(let i = 0; i < first.neurons.length; i++){ // for each first layer neuron
    for(let j = 0; j < second.neurons.length; j++){ // create a connection with all in 2nd

      let col = cons[i][j]*255;
      //console.log(cons[i][j]);
      col = col*col;
      col = Math.sqrt(col);
      noFill();
      stroke(col,col,col);
      line(startX, startY, start2X, start2Y);


      n4++;
      start2Y = 30*n4;
    }
    n4 = 1;
    start2Y = 30*n4;
    n2++;
    startY = 30*n2;
  }

}

function disLayer(lay, n){
  let add = (n*175) - 175;
  let startX = 850 + add;
  let n2 = 1;
  let startY = 30*n2;
  for(let i = 0; i < lay.neurons.length; i++){
    stroke(255,0,0);
    fill(255,0,0);
    circle(startX, startY, 20)
    n2++;
    startY = 30*n2;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////
