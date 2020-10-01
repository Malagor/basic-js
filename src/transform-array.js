const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr);
  if (!Array.isArray(arr)) throw new Error();

  let resultArr = [];

  let isDelete = false;
  let isDouble = false;
  let isDiscardNext = false;



  for (let i = 0; i < arr.length; i++) {
    // const element = arr[i];
    // console.log('currElement = ',element);

    switch (arr[i]) {
      case '--discard-next':
        isDelete = true;
        isDiscardNext = true;
        break;

      case '--discard-prev':
        if (!resultArr[resultArr.length - 1] === undefined
          || resultArr[resultArr.length - 1] === arr[i - 1]
          || isNaN(resultArr[resultArr.length - 1]) === isNaN(arr[i-1])) {
          resultArr.pop();
        }
        isDiscardNext = false;
        break;

      case '--double-next':
        isDouble = true;
        isDiscardNext = false;
        break;

      case '--double-prev':
        if ( (resultArr[resultArr.length - 1] !== undefined)
          && (resultArr[resultArr.length - 1] === arr[i-1])
          && (isNaN(resultArr[resultArr.length - 1]) === isNaN(arr[i-1]))
          && !isDiscardNext
        ) {

          // if (!isDiscardNext) {
          resultArr.push(arr[i - 1]);
          // }

          // isDiscardNext = false; /* TODO: сюда не заходид что бы переключить этот флаг */
        }
        isDiscardNext = false;
        break;

      default:
        if (isDelete) {
          isDelete = false;
          break;
        }

        if (isDouble) {
          resultArr.push(arr[i]);
          isDouble = false;
        }

        resultArr.push(arr[i]);
    }
    // console.log('Arr after turn: ', resultArr,'\n');
  }

  // console.log(resultArr);

  return resultArr;

};
