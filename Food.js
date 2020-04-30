class Food{
  constructor(h,w){
    this.x = Math.random() * Math.floor(w);
    this.y = Math.random() * Math.floor(h);
    this.h = h;
    this.w = w;
    this.display();
  }

  display(){
    fill(150,50,150,100);
    noStroke();
    circle(this.x, this.y, 5);
  }

  eat(){
    this.x = Math.random() * Math.floor(this.w);
    this.y = Math.random() * Math.floor(this.h);
  }
}
