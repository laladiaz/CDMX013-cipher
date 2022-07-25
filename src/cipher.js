const cipher = {
  encode: function (letter, offset) {
    let newLetter = "";
    let letterCode = letter.charCodeAt(0);
    if ((letterCode >=65) && (letterCode<=90)) {
      var newLetterCode = (letterCode - 65) + offset %26 +65;
    }
    newLetter = String.fromCharCode(newLetterCode);
    return newLetter;
},
};

export default cipher;
