import cipher from './cipher.js';
//CIFRAR:
// llamo a mis textareas y boton para cipher y las pongo como variables
const cipherForm = document.getElementById("cipherForm");
const offsetCipher = document.getElementById("offset-encrypt");
const encrypted = document.getElementById("encrypted");
const msgInput = document.getElementById("msgInput");

cipherForm.addEventListener("submit", function (e) {
    e.preventDefault()
});
cipherForm.addEventListener("submit", function () {
    encrypted.value = cipher.encode(offsetCipher.value, msgInput.value);
});

//DESCIFRAR
// llamo a mis textareas y boton para cipher y las pongo como variables
const decodeForm = document.getElementById("decodeForm");
const offsetDecode = document.getElementById("offset-decode");
const msgInputDecode = document.getElementById("msgCode");
const msgDecoded = document.getElementById("decoded");

decodeForm.addEventListener("submit", function (e) {
    e.preventDefault()
});
decodeForm.addEventListener("submit", function () {
    msgDecoded.value = cipher.decode(offsetDecode.value, msgInputDecode.value)
});