const cipher = {
encode (str, offset) {
  let msgEncrypted = "";
  for (let i=0; i<str.length; i++) {
    let letter = str[i]
    let x = str.charCodeAt(i)
    if ((x>=65) && (x<=90)) {
      String.fromCharCode(((x-65+offset)%26)+65);
    }
    msgEncrypted+=letter;
  }
  return msgEncrypted;
}
};

export default cipher;
