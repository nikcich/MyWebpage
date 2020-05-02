function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}

class Layer{

  constructor(size){
    this.neurons = [];
    this.bias = 3;
  }

  input(arr){

    this.neurons = arr;
  }

  fire(cons){
    let res = [];

    let accum = 0;
    for (var i=0, j=0; i<cons[0].length && j<cons.length; j++, i=(j==cons.length)?i+1:i,j=(j==cons.length)?j=0:j){
      accum = accum + (this.neurons[i] * cons[i][j]);
      if(j == cons.length-1){
        accum = sigmoid(accum + this.bias);
        res[i] = accum;
        accum=0;
      }
    }

    return res;
  }



}
