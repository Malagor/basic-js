const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCaunter = 0;

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];

    for (let j = 0; j < element.length; j++) {

      if (element[j] === '^^') {
        catCaunter++;
      }
    }

  }
  return catCaunter;
};

