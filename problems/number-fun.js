function returnsThree() {
  return 3;
}

function reciprocal(num) {
  if (num < 1 || num > 1000000) {
    throw new RangeError('Input must be between 1 and 1000000')
  }
  return 1 / num;
}

module.exports = {
  returnsThree,
  reciprocal
};
