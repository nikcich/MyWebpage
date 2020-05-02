class Population{
  constructor(size, rate,w,h){
    this.snakes = [];
    this.size = size;
    this.best;
    this.avglife = 0;
    this.mutrate = rate;
    this.height = h;
    this.width = w;

  }

  createPop(){
    for(let i = 0; i < this.size; i++){
      this.snakes[i] = new Snake();
    }
  }

  update(maxLifespan){
    for(let i = 0; i < this.size; i++){
      let snake = this.snakes[i];
      snake.update();
      let hit = snake.touchSides(this.width, this.height, 50);
      if(hit){
          snake.dead = true;
      }else if(snake.survived >= maxLifespan){
        snake.dead = true;
        snake.survived = 300;
      }
    }
  }

  evaluate(){
    let avg = 0;
    let best = this.snakes[0];
    for(let i = 0; i < this.size; i++){
      let snake = this.snakes[i];
      avg = avg + snake.survived;
      if(snake.survived > best.survived){
        best = snake;
      }
    }
    avg = avg/this.size;
    this.best = best;
  }

  finishGen(){
    for(let snake of this.snakes){
      if(snake.survived < this.avglife){
        snake.brain = this.best.brain;
      }
      snake.mutate(this.mutrate);
      snake.die();
    }
  }

  allDead(){
    let val = true;
    for(let i = 0; i < this.size; i++){
      if(this.snakes[i].dead == false){
        val = false;
        break;
      }
    }
    return val;
  }






}
