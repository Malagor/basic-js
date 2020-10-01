const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentChain: [],

  getLength() {
    return this.currentChain.length;
  },

  addLink(value) {

    if (value === undefined) {
      this.currentChain.push('( )');
    } else {
      this.currentChain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position)
      || (!(position >= 1 && position <= this.getLength()))
    ) {
      this.currentChain = [];
      throw new Error();
    }

    this.currentChain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.currentChain = this.currentChain.reverse();

    return this;
  },

  finishChain() {
    const localChain = [].concat(this.currentChain);

    this.currentChain = [];

    return localChain.join('~~');
  }
};

module.exports = chainMaker;
