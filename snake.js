class Snake{
  constructor(){
    this.xp = 325;
    this.yp = 325;
    this.xv = 0;
    this.yv = 0;
    this.survived = 0;

    this.brain = new Brain(4, 4, 4, 4);
    this.dead = false;

  }
  touchSides(width, height, size){
    if(this.xp <= 0 || this.yp <= 0){ // touches top or left
      return true;
    }else if((this.xp + size) >= width || (this.yp + size) >= height){
      return true;
    }else{
      return false;
    }

    if(this.x > width || this.y > height){
      return true;
    }
  }

  update(){
    let res = this.brain.think(this.xp, this.yp, this.xv, this.yv);

    if(!this.dead){
      if(res[0] > res[1]){
        this.xv = 1;
      }else{
        this.xv = -1;
      }

      if(res[2] > res[3]){
        this.yv = 1;
      }else{
        this.yv = -1;
      }
      this.xp = this.xp + this.xv;
      this.yp = this.yp + this.yv;
      this.survived = this.survived+1;
    }
  }

  die(){
    this.xv = 0;
    this.yv = 0;
    this.xp = 325;
    this.yp = 325;
    this.xv = 1;
    this.yv = 1;
    this.dead = false;
    this.survived = 0;
    //this.brain = new Brain(4, 4, 4, 4);
  }

  mutate(rate){
    this.brain.mutate(rate);
  }

  changeVel(x,y){
    this.xv = x;
    this.yv = y;
  }
}
