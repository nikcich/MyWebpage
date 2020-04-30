class Vec{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }

  setX(x){
    this.x = this.x + x;
  }
  setY(y){
    this.y = this.y - y;
  }

}
