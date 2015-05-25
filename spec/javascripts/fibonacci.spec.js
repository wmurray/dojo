describe("Fibonacci sequence", function() {
    it("correctly generates the Fib sequence", function() {
      var fib = new Fibonacci();
      var sequence = fib.makeSequence();
      var controlArray = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

      for (var i = 0; i < controlArray.length; i++) {
        expect(sequence[i]).toEqual(controlArray[i]);
      }
    });

    it("collects only the even numbers in the sequence", function() {
      var fib = new Fibonacci();
      var sequenceEvens = fib.getEvens();
      var controlArray = [2, 8, 34];

      for (var i = 0; i < controlArray.length; i++) {
        expect(sequenceEvens[i]).toEqual(controlArray[i]);
      }
    });

    it("sums the evens array", function() {
      var fib = new Fibonacci();
      var sumEvens = fib.sumEvens();

      expect(sumEvens).toBe(44);
    });
});
