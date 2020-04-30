class Snake{
  constructor(h,w){
    let piece = new Vec(h/2, w/2);
    this.height = h;
    this.width = w;
    this.rad = 15;
    this.parts = [piece];
  }

  display(){
    for(let i=0; i < this.parts.length; i++){
      let item = this.parts[i];
      fill(255,255,255,100);
      noStroke();
      circle(item.getX(), item.getY(), this.rad*2);
    }
  }

  Update(xVel, yVel){
    for(let i=0; i < this.parts.length; i++){
      let item = this.parts[i];
      item.setX(xVel);
      item.setY(yVel);
    }
  }

  grow(){
    this.rad = this.rad + (19/1755000)*this.rad*this.rad - (296/43875)*this.rad + (3743/3510);
  }

  die(){
    this.rad = 15;
    this.parts[0].x = this.width/2;
    this.parts[0].y = this.height/2
  }

  checkLocation(Foods){
    let head = this.parts[0];
    if( (head.getX() + this.rad) > this.width){
      return 1;
    }else if((head.getX() - this.rad) <= 0){
      return 1;
    }else if( (head.getY() + this.rad) > this.height ){
      return 1;
    }else if( (head.getY() - this.rad) < 0 ){
      return 1;
    }


    for(let i = 0; i < Foods.length; i++){
      let distX = (head.getX() - Foods[i].x)*(head.getX() - Foods[i].x)
      let distY = (head.getY() - Foods[i].y)*(head.getY() - Foods[i].y)
      let dist = Math.sqrt(distX + distY);
      if(dist < this.rad){
        Foods[i].eat();
        return 2;
      }
    }

    return 0;
  }


}
