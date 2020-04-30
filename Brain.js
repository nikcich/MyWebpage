class Brain{
  constructor(height, width){
    this.network = new Network(4,8,8,4);
    this.network.connectLayers();
    this.network.random();
    this.genes = []; // weights and bias values [w,w,w,b,b,b] format
    this.fitness = 0; // how long it lasts for
    this.xVel = 0;
    this.yVel = 0;
    this.active = true;

    this.snek = new Snake(height, width);
    this.snek.display();

    this.genes = [this.network.connections1, this.network.connections2,
      this.network.connections3, [this.network.Layer1.bias],
      [this.network.Layer2.bias], [this.network.Layer3.bias]];
  }

  gameDisplay(headPic){
    image(headPic, this.snek.parts[0].x-this.snek.rad,
      this.snek.parts[0].y-this.snek.rad, this.snek.rad*2, this.snek.rad*2)
  }

  setGenes(con){
    this.network.setCons(con);

    this.genes = [this.network.connections1, this.network.connections2,
      this.network.connections3, [this.network.Layer1.bias],
      [this.network.Layer2.bias], [this.network.Layer3.bias]];
  }

  gameStuff(food){
    //console.log(this.active);
    if(this.active == true){

      //console.log("res = " + res);
      this.snek.Update(this.xVel, this.yVel);
      this.increaseFit();

      let snake = this.snek.parts[0];
      this.network.inputValue(snake.x, snake.y, width - snake.x, height - snake.y);
      let outp = this.network.fireSystem();

      if(outp[0] >= outp[2]){
        this.xVel = 1;
      }else if(outp[0] < outp[2]){
        this.xVel = -1;
      }

      if(outp[1] >= outp[3]){
        this.yVel = 1;
      }else if(outp[1] < outp[3]){
        this.yVel = -1;
      }

      this.snek.display();

      let res = this.snek.checkLocation(food);
      if(res == 1){
        this.snek.die();
        this.xVel = 0;
        this.yVel = 0;
        this.active = false;
        return;
      }else if(res == 2){
        this.snek.grow();
      }
    }

  }

  mutate(){
    let rate = 0.05; // 5% mutation rate
    this.layerMut(this.network.Layer1, this.network.Layer2, this.network.connections1, rate);
    this.layerMut(this.network.Layer2, this.network.Layer3, this.network.connections2, rate);
    this.layerMut(this.network.Layer3, this.network.Layer4, this.network.connections3, rate);
  }

  layerMut(Layer1, Layer2, connection, rate){
    //return;
    for(let i = 0; i < Layer2.size; i++){ // loops through second layer
      for(let j = 0; j < Layer1.size; j++){ // loops through FIRST layer
        let random = Math.random()*Math.floor(100);
        if(random/100 <= rate){
          let num = Math.floor(Math.random() * (200) - 100 )/100; // -1 to 1 divided by 2
          let chng = connection[j][i]*num;
            connection[j][i] = num;
        }
      }

      let random = Math.random()*Math.floor(100);
      if(random/100 <= rate){
        Layer1.bias = Math.random()*Math.floor(1);
      }

    }
  }

  increaseFit(){
    this.fitness = this.fitness + 1;
  }
}

function sigmoid(t){ // sigmoid functions (0 to 1)
    return 1/(1+Math.pow(Math.E, -t));
}
