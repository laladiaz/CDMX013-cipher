//import cipher from './cipher.js';
// llamo a mis textareas y boton para cipher y las pongo como variables
let sendCipher = document.getElementById("sendCipher");
let offsetCipher = document.getElementById("offset-encrypt").value;
let encrypted = document.getElementById("encrypted");
let originalMessage = document.getElementById("msgInput").value

//agrego un click listener para el boton click para cifrar
/*sendCipher.addEventListener("click", function() {
    encrypted.value = encode(msgToCipher, offsetCipher);
});*/



//aqui escribo la funcion donde aplico cipher.encode()
/*function msgEncrypted() {
    
};*/



function startEncryption() {
    //creamos un string vacio para guardar el mensaje codificado
    let encryptedMessage = "";
    let shift = 1;
    //el for.. of loop  va a guardar en la variable letter un array de las letras del mensaje original
    for (let letter of originalMessage) {
        encryptedMessage += shiftLetter(letter, shift);
    }
    console.log(encryptedMessage);
};
startEncryption();
function shiftLetter(letter, shift) {
    let newLetter = "";
    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode + shift;
    if (newLetterCode <97) {
        newLetterCode += 26;
    } else if (newLetterCode >122) {
        newLetterCode -= 26;
    }
    newLetter = String.fromCharCode(newLetterCode);
    return newLetter;
    
};
