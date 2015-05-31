function Fibonacci(n) {
  this.limit = n;
}

Fibonacci.prototype.makeSequence = function() {
  var fibSequence = [1];

  var build = function(num1, num2) {
      num2 = typeof num2 !== 'undefined' ?  num2 : 1;

      fibSequence.push(num1 + num2);
  };

  while (fibSequence.length < this.limit) {
    var add1 = fibSequence.length - 1;
    var add2 = fibSequence.length - 2;

    build(fibSequence[add1], fibSequence[add2]);
  }

  return fibSequence;
};

Fibonacci.prototype.getEvens = function() {
  var baseArray = this.makeSequence();
  var evensArray = [];

  for (var i = 0; i < baseArray.length; i++) {
    if (baseArray[i] % 2 === 0) {
      evensArray.push(baseArray[i]);
    }
  }

  return evensArray;
};

Fibonacci.prototype.sumEvens = function() {
  var evensArray = this.getEvens();

  var sum = evensArray.reduce(function(previous, current) {
    return previous + current;
  });

  return sum;
};
