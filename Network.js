class Network{ // contains layers
  constructor(inpNum, hidden1, hidden2, outNum){
    this.Layer1 = new Layer(inpNum); // creates layer
    this.Layer2 = new Layer(hidden1); // creates layer
    this.Layer3 = new Layer(hidden2); // creates layer
    this.Layer4 = new Layer(outNum); // creates layer
    this.connections1;// 2d array of weights
    this.connections2;// 2d array of weights
    this.connections3;// 2d array of weights
  }

  connectLayers(){
    // layers connections
    this.connections1 = this.makeCons(this.Layer1.size, this.Layer2.size);// 2d array of weights
    this.connections2 = this.makeCons(this.Layer2.size, this.Layer3.size);// 2d array of weights
    this.connections3 = this.makeCons(this.Layer3.size, this.Layer4.size);// 2d array of weights
  }

  random(){
    this.connections1=this.weightsRan(this.connections1);
    this.connections2=this.weightsRan(this.connections2);
    this.connections3=this.weightsRan(this.connections3);
  }

  weightsRan(con){
    for(let i = 0; i < con.length; i++){
      for(let j = 0; j < con[i].length; j++){
        let n = Math.floor(Math.random() * (200) - 100 )/100;
        con[i][j] = n; // -1 to 1
      }
    }
    return con;
  }

  setCons(genes){
    this.connections1 = genes[0];
    this.connections2 = genes[1];
    this.connections3 = genes[2];
    this.Layer1.bias = genes[3][0];
    this.Layer2.bias = genes[4][0];
    this.Layer3.bias = genes[5][0];
  }

  makeCons(first, second){ // makes connections all default to weights of 1
    let connections = [];
    for(let i = 0; i < first; i++){ // for each first layer neuron
      connections[i] = []; // puts array inside array
      for(let j = 0; j < second; j++){ // create a connection with all in 2nd
        connections[i][j] = 1;
      }
    }
    return connections;
  }

  inputValue(first, second, third, fourth){ // changes input valyues
    for(let i=0; i < this.Layer1.size; i++){
      if(i==0){
        this.Layer1.neurons[i].input(first);
      }else if(i==0){
        this.Layer1.neurons[i].input(second);
      }else if(i==0){
        this.Layer1.neurons[i].input(third);
      }else{
        this.Layer1.neurons[i].input(fourth);
      }
    }
  }

  calcValue(Layer1, Layer2, connection){ // calculates neuron value
    for(let i = 0; i < Layer2.size; i++){ // loops through second layer
      let accum = 0;
      for(let j = 0; j < Layer1.size; j++){ // loops through FIRST layer
        accum = accum + connection[j][i] * Layer1.neurons[j].Value; // summation W*NeuV + ..
      }
      accum = accum + Layer1.bias; // adds bias of 1?
      accum = sigmoid(accum);
      Layer2.neurons[i].input(accum);
    }
  }

  fireSystem(){
    this.calcValue(this.Layer1, this.Layer2, this.connections1);
    this.calcValue(this.Layer2, this.Layer3, this.connections2);
    this.calcValue(this.Layer4, this.Layer4, this.connections3);
    let arr = [];
    for(let i = 0; i < this.Layer4.size; i++){
      arr[i] = this.Layer4.neurons[i].Value;
    }
    return arr;
  }

}

function sigmoid(t){ // sigmoid functions (0 to 1)
    return 1/(1+Math.pow(Math.E, -t));
}
