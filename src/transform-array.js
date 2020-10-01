const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr);
  if (!Array.isArray(arr)) throw new Error();

  let resultArr = [];

  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    const element = arr[i];

    if ( element === '--discard-next' ) {
      i += 1;

      if (arr[i+1] === '--double-prev' || arr[i+1] === '--discard-prev'){
        i += 1;
      }
    } else if (element === '--double-next') {

      if ((i + 1) < arrLength) {
        resultArr.push(arr[i+1]);
      }
    } else if (element === '--double-prev'){

      if (i-1 >= 0){
        resultArr.push(arr[i-1]);
      }
    } else if (element === '--discard-prev') {
      resultArr.pop();
    } else {
      resultArr.push(arr[i]);
    }

  }

  return resultArr;

};
