function MultiplesCalculator() {};

MultiplesCalculator.prototype.sumMultiplesForNumbersUnder = function(n) {
  var sums =  _.reduce(this._findMultiples(n), function(memo, num) {
    return memo + num;
  }, 0);

  return sums;
}

MultiplesCalculator.prototype._findMultiples = function(n) {
  var range = _.range(1, n);
  var multiples = _.select(range, function (i) {
    return i % 3 == 0 || i % 5 == 0
  });

  return multiples;
}
