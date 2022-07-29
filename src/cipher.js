const cipher = {
  encode: function (offset, string) {
    if (!offset >1 || typeof string !== "string")  {
      throw new TypeError("Ingresa valores");
    }
    let encryptedMessage = "";
    for (let i = 0; i < string.length; i++) {
      let letterCode = string.charCodeAt(i);
      if ((letterCode >= 65) && (letterCode <= 90)) {
        var newLetterCode = ((letterCode - 65 + offset) % 26 + 65);
      } else if ((letterCode >= 97) && (letterCode <=122)) {
        newLetterCode = ((letterCode -97 +offset) % 26 + 97);
      } else {
        newLetterCode = letterCode;
      }
      let newLetter = String.fromCharCode(newLetterCode);
      encryptedMessage += newLetter;
    }
    return encryptedMessage
  },
  decode: function (offset, string) {
    if (typeof string !=="string" || !offset >1) {
      throw new TypeError ("Ingresa valores");
    }
    let decodedMessage = "";
    for (let i = 0; i < string.length; i++) {
      let letter = string.charCodeAt(i);
      if ((letter >= 65) && (letter <= 90)) {
        var newLtCode = ((letter + 65 - offset) % 26 + 65);
      } else if ((letter >= 97) && (letter <=122)) {
        newLtCode = ((letter- 122 - offset) % 26 + 122);
      }
      let newLt = String.fromCharCode(newLtCode);
      decodedMessage += newLt;
    }
    return decodedMessage
  }
};

export default cipher;
