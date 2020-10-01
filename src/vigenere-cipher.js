class VigenereCipheringMachine {
  constructor(type = true) {
    this.typeOfMachine = type;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    /*TODO: Похоже пробелы не участвуют в построении строки. Нужно сперва убрать пробелы*/

    const localMessage = message.toUpperCase().split('');
    console.log(localMessage);
    const messageLength = message.length;
    console.log(messageLength);
    const stringToMatch = ''.padEnd(messageLength, key).toUpperCase();
    const doubleAlphabet = this.alphabet + this.alphabet;

    let result = '';

    for (let i = 0; i < messageLength; ++i) {
      const messageChar = localMessage[i];
      const secretChar = stringToMatch[i];

      if (!/[A-Z]/.test(messageChar))
      {
        result += messageChar;
      } else {

        const positionMessageChar = messageChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const positionSecretChar = secretChar.charCodeAt(0) - 'A'.charCodeAt(0);
        // console.log('positionSecretChar', positionSecretChar);
        // console.log('positionMessageChar', positionMessageChar);

        const resultCharPosition = positionSecretChar + positionMessageChar;

        const resultChar = doubleAlphabet.charAt(resultCharPosition);
        // console.log(resultChar);

        result += resultChar;
      }
      console.log(result);
    }
  }


  decrypt(message, key) {
    if (!message || !key) throw new Error();

  }
}

module.exports = VigenereCipheringMachine;
