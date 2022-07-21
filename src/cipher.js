const cipher = {
  encode(msgToCipher, offsetCipher) {
    let msgEncrypted = "";
    for (let i = 0; i < msgToCipher.length; i++) {
      let letter = msgToCipher[i]
      let x = msgToCipher.charCodeAt(i)
      if ((x >= 65) && (x <= 90)) {
        String.fromCharCode(((x - 65 + offsetCipher) % 26) + 65);
      }
      msgEncrypted += letter;
    }
    return msgEncrypted;
  },
};

export default cipher;
