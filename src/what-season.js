const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  // throw new CustomError('Not implemented');

  // if (arguments[0] === undefined || !date || (date - new Date()) === 0) {
  //   throw new Error('Unable to determine the time of year!');
  // }
  //
  // if (typeof date.getMonth !== 'function' && typeof date.getMonth !== 'function' && date instanceof Date) {
  //   throw new Error('Error');
  // }
  //
  // if (date.__proto__.__proto__ === null){
  //   throw new Error('THROWN');
  // }
  //
  // if (!(date instanceof Date) && isNaN(date.getMonth)) {
  //   throw new Error('Error')
  // }
  //
  // if (arguments[0] === undefined || !date || (date - new Date()) === 0) {
  //   throw new Error('Unable to determine the time of year!');
  // }
  // if (!(date instanceof Date) && isNaN(date.getMonth)) {
  //   throw new Error('Error');
  // }

  // if (arguments[0] === undefined) {
  if (!arguments[0]) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) && isNaN(date.getMonth) || !date || (date - new Date()) === 0) {
    throw new Error('Error');
  }

  const month = date.getMonth();

  if (month <= 1 || month === 11) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';

};
