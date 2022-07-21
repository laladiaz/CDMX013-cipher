import cipher from './cipher.js';
// llamo a mis textareas y boton para cipher y las pongo como variables
let sendCipher = document.getElementById("sendCipher");
let offsetCipher = document.getElementById("offset-encrypt").value;
let encrypted = document.getElementById("encrypted");
let msgToCipher = document.getElementById("msgInput").value
//agrego un click listener para el boton click para cifrar
sendCipher.addEventListener("click", function() {
    encrypted.value = cipher.encode(msgToCipher, offsetCipher);
});
//aqui escribo la funcion donde aplico cipher.encode()
/*function msgEncrypted() {
    
};*/