const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let team = [];

  members.forEach(menber => {
    if (typeof menber === 'string') {
      team.push(menber.trim().charAt(0).toUpperCase());
    } else {
      return false;
    }
  });
  return team.sort().join('');
};
