const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  const {repeatTimes = 0, separator = '+', additionRepeatTimes = 0, additionSeparator = '|'} = options;
  let {addition = ''} = options;

  const toString = data => {
    return '' + data;
  };

  const checkRepeater = repeater => {
    return repeater === undefined || repeater === 0
      ? 1
      : repeater;
  };

  str = toString(str);
  addition = toString(addition);

  const fullAddition = (addition, additionRepeatTimes, additionSeparator) => {
    additionRepeatTimes = checkRepeater(additionRepeatTimes);

    let resultAddition = '';
    for (let i = 0; i < additionRepeatTimes; i++) {
      resultAddition += addition + additionSeparator;
    }
    return resultAddition.slice(0, 0 - additionSeparator.length);
  };

  const makeResultString = (str, repeatTimes, separator, fullAddition) => {
    repeatTimes = checkRepeater(repeatTimes);

    let resultStr = '';
    for (let i = 0; i < repeatTimes; i++) {
      resultStr += str + fullAddition + separator;
    }
    return resultStr.slice(0, 0 - separator.length);
  };

  const addAddition = fullAddition(addition, additionRepeatTimes, additionSeparator);

  return makeResultString(str, repeatTimes, separator, addAddition);

};