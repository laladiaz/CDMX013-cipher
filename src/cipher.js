const cipher = {
  encode: function (string, offset) {
    let msgEncrypted = "";
    for (let i = 0; i < string.length; i++) {
      let letter = string[i]
      let x = letter.charCodeAt(i)
      if ((x >= 65) && (x <= 90)) {
        String.fromCharCode(((x - 65) + offset % 26) + 65);
      }
      msgEncrypted += letter;
    }
    return msgEncrypted;
  },
decode: function (string, offset) {
  let msgDecrypted = "";
    for (let i = 0; i < string.length; i++) {
      let letter = string[i]
      let x = letter.charCodeAt(i)
      if ((x >= 65) && (x <= 90)) {
        String.fromCharCode(((x + 65) -offset % 26) + 65);
      }
      msgDecrypted += letter;
    }
    return msgDecrypted;
}
};

export default cipher;
