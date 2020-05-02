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

  let population = new Population(pop, mutrate, width, height);
  population.createPop();

  function draw(){
    population.update(maxLifespan);
    if(population.allDead() || alldie){

      gennum++;
      population.evaluate();

      if(population.best.survived > bestgen && alldie == false){
        bestgen = population.best.survived;
      }
      maxLifespan = maxLifespanbase + population.best.survived;
      alldie = false;

      population.finishGen();
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
    for(let snake of population.snakes){
      //ctx.fillStyle = 'rgb(255, 0, 0)';
      let color = ['rgb()', 'rgb()','rgb()','rgb()','rgb()'];
      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
      ctx.fillRect(snake.xp, snake.yp, snakeSize, snakeSize);
    }

    requestAnimationFrame(gameLoop);
  }

  gameLoop();

});
