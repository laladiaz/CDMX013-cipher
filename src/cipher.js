const cipher = {
  encode: function (letter, shift) {
    let newLetter = "";
    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode + (shift%26);
    if (newLetterCode <97) {
        newLetterCode += 26;
    } else if (newLetterCode >122) {
        newLetterCode -= 26;
    }
    newLetter = String.fromCharCode(newLetterCode);
    return newLetter;
},
};

export default cipher;
