const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCaunter = 0;

  matrix.forEach(element => {

    const countCat = (acum, item) => item === '^^' ? ++acum : acum;

    catCaunter += element.reduce(countCat, 0);

  });

  return catCaunter;
};

