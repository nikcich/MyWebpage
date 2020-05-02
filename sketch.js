document.addEventListener("DOMContentLoaded", function(){



  let height = 600;
  let width = 1000;
  let snakeSize = 50;
  let canvas = document.getElementById("game");
  let ctx = canvas.getContext('2d');
  let slider = document.getElementById("myRange");
  let kill = document.getElementById("killbutton");
  let bestLabel = document.getElementById("bestLabel");
  let genslabel = document.getElementById("genslabel");
  slider.value = 1;
  canvas.width = width;
  canvas.height = height;
  let alldie = false;

  let rate = slider.value;
  let pop = 100;
  let snakes = [];
  let maxLifespanbase = 5000;
  let maxLifespan = 5000;
  let mutrate = 60; // mutation rate
  let gennum = 0;
  let bestgen = 0;

  kill.addEventListener("click", function dies(){
    alldie = true;
  })

  for(let i =0; i < pop; i++){
    snakes[i] = new Snake();
  }


  function draw(){

    let deathcount = 0;
    let endit = false;
    for(let snake of snakes){

      snake.update();
      let hit = snake.touchSides(width, height, snakeSize);
      if(hit){
          snake.dead = true;
          deathcount++;
      }
      if(snake.survived >= maxLifespan){
        endit = true;
      }
    }



    if(deathcount >= snakes.length || alldie || deathcount/snakes.length >= 0.98 || endit){

      gennum++;
      let best = snakes[0];
      for(let i=1; i < snakes.length; i++){
        if(snakes[i].survived > best.survived){
          best = snakes[i];
        }
      }
      if(best.survived > bestgen && endit == false && alldie == false){
        bestgen = best.survived;
      }
      maxLifespan = maxLifespanbase + bestgen;
      alldie = false;
      endit = false;

      if(gennum % rate <= 0){

      }


      for(let snake of snakes){
        snake.brain = best.brain;
        snake.mutate(mutrate);
        snake.die();
      }
    }
  }

  ctx.fillStyle = '#f00';
  let fc = 0;
  function gameLoop(){
    bestLabel.innerHTML = "Best Generation: " + bestgen + " frames";
    genslabel.innerHTML = "Generations simulated: " + gennum;
    fc++;
    rate = slider.value*5;

    for(let i=0; i < rate; i++){
      draw();
    }
    ctx.clearRect(0,0, width, height);
    for(snake of snakes){
      ctx.fillRect(snake.xp, snake.yp, snakeSize, snakeSize);
    }

    requestAnimationFrame(gameLoop);
  }

  gameLoop();

});
