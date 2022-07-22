import cipher from './cipher.js';

// llamo a mis textareas y boton para cipher y las pongo como variables
let cipherForm =document.getElementById("cipherForm");
let sendCipher = document.getElementById("sendCipher");
let offsetCipher = document.getElementById("offset-encrypt");
let encrypted = document.getElementById("encrypted");
let msgInput = document.getElementById("msgInput");

let originalMessage = msgInput.value;
offsetCipher.addEventListener("input", numberEntered, false);

msgInput.addEventListener("input", characterEntered, false);
function characterEntered(e) {
    originalMessage = e.target.value;
    originalMessage = originalMessage.toLowerCase();
    originalMessage = originalMessage.replace(/[^a-z]/, "");

    e.target.value = originalMessage;

    startEncryption();
};
function numberEntered(e) {
    startEncryption();
};

function startEncryption() {
    //creamos un string vacio para guardar el mensaje codificado
    let encryptedMessage = "";
    let shift = offsetCipher.value;
    //el for.. of loop  va a guardar en la variable letter un array de las letras del mensaje original
    for (let letter of originalMessage) {
        encryptedMessage += cipher.encode(letter, shift);
    }
    console.log(encryptedMessage);
    encrypted.value = encryptedMessage;
};
startEncryption();

cipherForm.addEventListener("submit", function(e) {
    
});