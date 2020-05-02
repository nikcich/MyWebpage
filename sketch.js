document.addEventListener("DOMContentLoaded", function(){



  let height = 700;
  let width = 700;
  let snakeSize = 50;
  let canvas = document.getElementById("game");
  let ctx = canvas.getContext('2d');
  let slider = document.getElementById("myRange");
  let kill = document.getElementById("killbutton");
  let bestLabel = document.getElementById("bestLabel");
  let genslabel = document.getElementById("genslabel");
  let alldie = false;
  let rate = slider.value;
  let pop = 30;
  let snakes = [];
  let maxLifespanbase = 5000;
  let maxLifespan = 5000;
  let mutrate = 60; // mutation rate
  let gennum = 0;
  let bestgen = 0;

  slider.value = 1;
  canvas.width = width;
  canvas.height = height;

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
      let avglife = 0;
      for(let i=1; i < snakes.length; i++){
        let surv = snakes[i].survived;
        avglife = avglife + snakes[i].survived;
        if(surv > best.survived){
          best = snakes[i];
        }
      }

      avglife = avglife/pop; // average life

      if(best.survived > bestgen && endit == false && alldie == false){
        bestgen = best.survived;
      }
      maxLifespan = maxLifespanbase + bestgen;
      alldie = false;
      endit = false;

      for(let snake of snakes){
        if(snake.survived < avglife || snake.survived >= maxLifespan){
          snake.brain = best.brain;
        }
        snake.mutate(mutrate);
        snake.die();
      }
    }
  }


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
      //ctx.fillStyle = 'rgb(255, 0, 0)';
      let color = ['rgb()', 'rgb()','rgb()','rgb()','rgb()'];
      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
      ctx.fillRect(snake.xp, snake.yp, snakeSize, snakeSize);
    }

    requestAnimationFrame(gameLoop);
  }

  gameLoop();

});
