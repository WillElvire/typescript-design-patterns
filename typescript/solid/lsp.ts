/************************************************************************* */
/*                           LISKOV SUBSTITUTION PRINCIPLE                */
/************************************************************************* */

/**
 * @description  we can use subclasses instead of parent classes
 */
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }
  calculateArea(): number {
    return this.side * this.side;
  }
}

// ========== Client code

function area(shape: Shape) {
  return shape.calculateArea();
}

let rect = new Rectangle(10, 12);
let square = new Square(5);

console.log(area(rect));
console.log(area(square));

/*************** REAL WORLD USE CASE *********** */

abstract class PaymentProcessor {
  abstract pay(amount: number): number;
}

class CreditCard extends PaymentProcessor {
  constructor() {
    super();
  }
  pay(amount: number): number {
    return amount;
  }
}

class DebitCard extends PaymentProcessor {
  constructor() {
    super();
  }
  pay(amount: number): number {
    return amount;
  }
}

class Paypal extends PaymentProcessor {
  constructor() {
    super();
  }
  pay(amount: number): number {
    return amount;
  }
}

function executePayment(paymentProcessor: PaymentProcessor,amout : number) {
  return paymentProcessor.pay(amout);
}
