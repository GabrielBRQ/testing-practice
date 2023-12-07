let calculator = {
  add: function (a, b) {
    if (this.verify(a, b)) {
      return a + b;
    }
    return "Please put a number";
  },
  subtract: function (a, b) {
    if (this.verify(a, b)) {
      return a - b;
    }
    return "Please put a number";
  },
  divide: function (a, b) {
    if (this.verify(a, b)) {
      return a / b;
    }
    return "Please put a number";
  },
  multiply: function (a, b) {
    if (this.verify(a, b)) {
      return a * b;
    }
    return "Please put a number";
  },
  verify: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return false;
    }
    return true;
  },
};

export { calculator };
