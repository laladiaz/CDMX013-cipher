const cipher = {
  encode: function (offset, string) {
    //let offset = paseInt(offsetCipher.value);
    let encryptedMessage = "";
    for (let i=0; i<string.legth; i++) {
      let letterCode = string.charCodeAt(i)
        if ((letterCode>=65) &&(letterCode<=90)) {
          var newLetterCode = ((letterCode - 65 + offset) % 26 + 65);
          let newLetter = String.fromCharCode(newLetterCode);
          encryptedMessage += newLetter
        }
      }
      return encryptedMessage;
  },
  decode: function (offset, string) {
    let decodedLetter = "";
    let letterCode = string.charCodeAt(0);
    if ((letterCode >= 65) && (letterCode <= 90)) {
      var newLetterCode = ((letterCode + 65 - offset) % 26 + 65);
    }
    decodedLetter += String.fromCharCode(newLetterCode);
    return decodedLetter;
  },
};

export default cipher;
