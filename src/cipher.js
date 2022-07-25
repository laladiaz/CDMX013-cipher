const cipher = {
  encode: function (offset, string) {
    let encryptedMessage = "";
    for (let i = 0; i < string.length; i++) {
      let letterCode = string.charCodeAt(i);
      if ((letterCode >= 65) && (letterCode <= 90)) {
        var newLetterCode = ((letterCode - 65 + offset) % 26 + 65);
        
      }
      let newLetter = String.fromCharCode(newLetterCode);
      encryptedMessage += newLetter;
    }
    return encryptedMessage
  },
  decode: function (offset, string) {
    let decodedMessage = "";
    for (let i = 0; i < string.length; i++) {
      let letter = string.charCodeAt(i);
      if ((letter >= 65) && (letter <= 90)) {
        var newLtCode = ((letter + 65 - offset) % 26 + 65);  
      }
      let newLt = String.fromCharCode(newLtCode);
      decodedMessage += newLt;
    }
    return decodedMessage
  }
};

export default cipher;
