const cipher = {
  encode: function (string, offset) {
    let newLetter = "";
    let letterCode = string.charCodeAt(0);
    if ((letterCode >= 65) && (letterCode <= 90)) {
      var newLetterCode = ((letterCode - 65) + offset % 26 + 65);
    }
    newLetter = String.fromCharCode(newLetterCode);
    return newLetter;
  },
  decode: function (string, offset) {
    let decodedLetter = "";
    let letterCode = string.charCodeAt(0);
    if ((letterCode >= 65) && (letterCode <= 90)) {
      var newLetterCode = ((letterCode + 65 - offset) % 26 + 65);
    }
    decodedLetter = String.fromCharCode(newLetterCode);
    return decodedLetter;
  },
};

export default cipher;
