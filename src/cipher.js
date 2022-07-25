const cipher = {
  encode: function (offset, string) {
    let encryptedMessage = "";
    for (let i = 0; i < string.length; i++) {
      let letterCode = string.charCodeAt(i);
      if ((letterCode >= 65) && (letterCode <= 90)) {
        let newLetterCode = ((letterCode - 65) + offset % 26 + 65);
        var newLetter = String.fromCharCode(newLetterCode);
      }
      encryptedMessage += newLetter;
    }
    return encryptedMessage
  },
  decode: function (offset, string) {
    let decodedMessage = "";
    for (let i = 0; i < string.length; i++) {
      let letter = string.charCodeAt(i);
      if ((letter >= 65) && (letter <= 90)) {
        let newLtCode = ((letter + 65) - offset % 26 + 65);
        var newLt = String.fromCharCode(newLtCode);
      }
      decodedMessage += newLt;
    }
    return decodedMessage
  }
};

export default cipher;
