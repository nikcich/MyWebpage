class Brain{
  constructor(l1, l2, l3, l4){
    this.input = new Layer(l1);
    this.h1 = new Layer(l2);
    this.h2 = new Layer(l3);
    this.out = new Layer(l4);

    this.l1 = l1;
    this.l2 = l2;
    this.l3 = l3;
    this.l4 = l4;

    this.con1 = [];
    this.con2 = [];
    this.con3 = [];

    let conar2 = [];
    for (var i=0, j=0; i<l1 && j<l2; j++, i=(j==l2)?i+1:i,j=(j==l2)?j=0:j) {
      let num = Math.floor((Math.random() * 201) + 1)
      num = num-101;
      conar2[j] = num/100;
      if(j == l2-1){
        this.con1[i] = conar2;
        conar2 = [];
      }
    }

    for (var i=0, j=0; i<l2 && j<l3; j++, i=(j==l3)?i+1:i,j=(j==l3)?j=0:j) {
      let num = Math.floor((Math.random() * 201) + 1)
      num = num-101;
      conar2[j] = num/100;
      if(j == l3-1){
        this.con2[i] = conar2;
        conar2 = [];
      }
    }

    for (var i=0, j=0; i<l3 && j<l4; j++, i=(j==l4)?i+1:i,j=(j==l4)?j=0:j) {
      let num = Math.floor((Math.random() * 201) + 1)
      num = num-101;
      conar2[j] = num/100;
      if(j == l3-1){
        this.con3[i] = conar2;
        conar2 = [];
      }
    }
  }

  think(xp, yp, xv, yv){
    let ina = [xp, yp, xv, yv];
    this.input.input(ina);
    let res = this.input.fire(this.con1);

    this.h1.input(res);
    let res2 = this.h1.fire(this.con2);

    this.h2.input(res);
    let res3 = this.h2.fire(this.con3);

    this.out.input(res3);
    return res3;
  }

  mutate(rate){
    let ratec = Math.floor((Math.random() * 101) + 1)
    ratec = ratec - 1;

    if(ratec <= rate){

      let conar2 = [];
      for (var i=0, j=0; i<this.l1 && j<this.l2; j++, i=(j==this.l2)?i+1:i,j=(j==this.l2)?j=0:j) {
        let num = Math.floor((Math.random() * 201) + 1)
        num = num-101;
        conar2[j] = num/100;
        if(j == this.l2-1){
          this.con1[i] = conar2;
          conar2 = [];
        }
      }

      for (var i=0, j=0; i<this.l2 && j<this.l3; j++, i=(j==this.l3)?i+1:i,j=(j==this.l3)?j=0:j) {
        let num = Math.floor((Math.random() * 201) + 1)
        num = num-101;
        conar2[j] = num/100;
        if(j == this.l3-1){
          this.con2[i] = conar2;
          conar2 = [];
        }
      }

      for (var i=0, j=0; i<this.l3 && j<this.l4; j++, i=(j==this.l4)?i+1:i,j=(j==this.l4)?j=0:j) {
        let num = Math.floor((Math.random() * 201) + 1)
        num = num-101;
        conar2[j] = num/100;
        if(j == this.l3-1){
          this.con3[i] = conar2;
          conar2 = [];
        }
      }

    }
  }
}
