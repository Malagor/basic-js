const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const getFirstChar = name => name.trim().charAt(0).toUpperCase();

  return members
    .filter(value => typeof value === 'string')
    .map(getFirstChar)
    .sort()
    .join('');
};
