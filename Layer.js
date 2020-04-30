class Layer{ // contains neurons and bias Value
  constructor(number){
    this.neurons = []; // empty array to hold neurons
    this.bias = Math.floor(Math.random() * (100) )/100;
    this.size = number;
    for(let i=0; i < number; i++){ // creates all the neurons for the layer
      this.neurons[i] = new Neuron(); // creates the new neuron
    }
  }
}
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
function sigmoid(t){ // sigmoid functions (0 to 1)
    return 1/(1+Math.pow(Math.E, -t));
}
