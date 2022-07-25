import cipher from './cipher.js';
//CIFRAR:
// llamo a mis textareas y boton para cipher y las pongo como variables
const cipherForm = document.getElementById("cipherForm");
const offsetCipher = document.getElementById("offset-encrypt");
const encrypted = document.getElementById("encrypted");
const msgInput = document.getElementById("msgInput");

// este fragmento le pide al codigo que escuche el input en la ventana y 
let originalMessage = msgInput.value
msgInput.addEventListener("input", function(e) {
    originalMessage = e.target.value;
    originalMessage = originalMessage.replace(/[^A-Z]/, "");

    e.target.value = originalMessage;
});

function startEncryption() {
    //creamos un string vacio para guardar el mensaje codificado
    let encryptedMessage = "";
    let offsetEncode = offsetCipher.value;
    //el for.. of loop  va a guardar en la variable letter un array de las letras del mensaje original
    for (let letter of originalMessage) {
        encryptedMessage += cipher.encode(letter, offsetEncode);
    }
    //console.log(encryptedMessage);
    encrypted.value = encryptedMessage;
}

cipherForm.addEventListener("submit", function(e) {
    e.preventDefault();
    startEncryption();
});

//DESCIFRAR
// llamo a mis textareas y boton para cipher y las pongo como variables
const decodeForm = document.getElementById("decodeForm");
const offsetDecode = document.getElementById("offset-decode");
const msgInputDecode = document.getElementById("msgCode");
const msgDecoded = document.getElementById ("decoded");

// este fragmento le pide al codigo que escuche el input en la ventana y 
let encodeMessage = msgInputDecode.value
msgInputDecode.addEventListener("input", function(e) {
    encodeMessage = e.target.value;
    encodeMessage = encodeMessage.replace(/[^A-Z]/, "");

    e.target.value = encodeMessage;
});

function startDecode() {
    //creamos un string vacio para guardar el mensaje codificado
    let decodedMessage = "";
    let shift = offsetDecode.value;
    //el for.. of loop  va a guardar en la variable letter un array de las letras del mensaje original
    for (let letterShifted of encodeMessage) {
        decodedMessage += cipher.decode(letterShifted, shift);
    }
    //console.log(encryptedMessage);
    msgDecoded.value = decodedMessage;
}

decodeForm.addEventListener("submit", function(e) {
    e.preventDefault();
    startDecode();
});