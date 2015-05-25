(function() {
  describe("multiples", function() {
    it("sums all the multiples of 3 and 5 for numbers below n", function() {
      var calculator = new MultiplesCalculator();
      var sum = calculator.sumMultiplesForNumbersUnder(10);

      expect(sum).toEqual(23);
    });

    it("properly sums numbers consecutively", function() {
      var calculator = new MultiplesCalculator();
      var sum = calculator.sumMultiplesForNumbersUnder(10);

      expect(sum).toEqual(23);

      var secondSum = calculator.sumMultiplesForNumbersUnder(10);

      expect(secondSum).toEqual(23);
    });
  });
})();
