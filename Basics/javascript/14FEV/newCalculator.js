function calculator(a,b,op){
    this.number1 = a;
    this.number2=b;
    this.operator=op;

    this.getResult = function(){
        console.log(this.number1, this.number2, this.operator)
        switch(this.operator) {
        case "+":
          return this.number1 +this.number2;
          break;

        case "-":
            return this.number1 -this.number2;
          break;

          case "*":
            return this.number1 *this.number2;
          break;

        case "/":
            return this.number1 /this.number2;
          break;

          case "%":
            return this.number1 % this.number2;
          break
        
      } 
    }

    
  
    
    
}

let math = new calculator(10,5,'*');
// console.log(math, typeof math)
console.log(math.getResult())
