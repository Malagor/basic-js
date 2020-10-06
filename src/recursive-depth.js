const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deer = 1;

    let locDeer = 0;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        const dd = this.calculateDepth(element);
        if (locDeer < dd) {
          locDeer = dd;
        }
      }
    });

    deer += locDeer;
    return deer;
  }
};