import cipher from './cipher.js';

// todo este fragmento es para agregar al DOM textareas y buttons para cifrar y descifar
// defino las constantes para el area de botones y los botones de cifrar y descifrar 

const cipherButton = document.getElementById("cipherButton");
const decipherButton = document.getElementById("decipherButton");
const codeDecode = document.getElementById('code-decode');
// creo campos y botones necesarios para la UX
//CIFRAR
const cipherForm = document.createElement("form")
cipherForm.setAttribute("id","cipherForm")
cipherForm.setAttribute("autocomplete", "off")

//div de offset para cifrar y su etiqueta
const offsetFieldCipher = document.createElement("div");
offsetFieldCipher.setAttribute("class", "offset-field")
const offsetLabelCipher = document.createElement("p");
offsetLabelCipher.textContent = "FIJA UN VALOR PARA EL CIFRADO";
//el campo offset para cifrar es un input type number
const offsetCipher = document.createElement("input");
offsetCipher.setAttribute("type", "number")
offsetCipher.setAttribute("placeholder", "clave")
offsetCipher.setAttribute("id", "offset-encrypt");
offsetCipher.setAttribute('min', '0');

offsetFieldCipher.append(offsetLabelCipher, offsetCipher)

//div de fields que contiene los textarea necesarios para el cifrado para introducir el mensaje y para leerlo
const encryptFieldsCipher = document.createElement("div");
encryptFieldsCipher.setAttribute("class", "fields");
//textarea para introducir el mensaje a cifrar
const msgInputCipher = document.createElement("textarea");
msgInputCipher.setAttribute("id", "msgInput");
msgInputCipher.setAttribute("placeholder", "ESCRIBE TU MENSAJE PARA CIFRAR");
//textarea para leer unicamente el mensaje cifrado
const msgEncrypted = document.createElement("textarea");
msgEncrypted.setAttribute("id", "encrypted");
msgEncrypted.setAttribute("readonly", "");

encryptFieldsCipher.append(msgInputCipher, msgEncrypted);

//boton para enviaer le mensaje a cifrar
const cipherSendButton = document.createElement("button");
cipherSendButton.setAttribute("type", "submit");
cipherSendButton.setAttribute("class", "sendCipher");
cipherSendButton.setAttribute("id", "sendCipher");
cipherSendButton.textContent = "HAZ CLICK PARA CIFRAR";

cipherForm.append(offsetFieldCipher, encryptFieldsCipher, cipherSendButton);


cipherButton.addEventListener("click", function(){
    codeDecode.innerHTML="";
    codeDecode.appendChild(cipherForm);
})

cipherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let shiftEncode = parseInt(offsetCipher.value);
    msgEncrypted.value = cipher.encode(shiftEncode, msgInputCipher.value);
})

//DESCIFRAR

const decodeForm = document.createElement("form")
decodeForm.setAttribute("id","cipherForm")
decodeForm.setAttribute("autocomplete", "off")
//div de offset para descifrar y su etiqueta
const offsetFieldDecode = document.createElement("div");
offsetFieldDecode.setAttribute("class", 'offset-field')
const offsetLabelDecode = document.createElement("p");
offsetLabelDecode.textContent = "INTRODUCE EL VALOR PARA EL DECIFRADO";
//el campo offset para descifrar es un input type number
const offsetDecode = document.createElement("input");
offsetDecode.setAttribute("type", "number")
offsetDecode.setAttribute("placeholder", "clave")
offsetDecode.setAttribute("id", "offset-decode");
offsetDecode.setAttribute('min', '0');

offsetFieldDecode.append(offsetLabelDecode, offsetDecode)

//div de fields que contiene los textarea necesarios para descifrar para introducir el mensaje y para leerlo
const encryptFieldsDecode = document.createElement("div");
encryptFieldsDecode.setAttribute("class", "fields");
//textarea para introducir el mensaje a descifrar
const msgInputDecode = document.createElement("textarea");
msgInputDecode.setAttribute("id", "msgCode");
msgInputDecode.setAttribute("placeholder", "ESCRIBE TU MENSAJE PARA DECIFRAR");
//textarea para leer unicamente el mensaje descifrardo
const msgDecoded = document.createElement("textarea");
msgDecoded.setAttribute("id", "decoded");
msgDecoded.setAttribute("readonly", "");

encryptFieldsDecode.append(msgInputDecode, msgDecoded);
//boton para enviaer le mensaje a decifrar
const decipherSendButton = document.createElement("button");
decipherSendButton.setAttribute("class", "sendDecipher");
decipherSendButton.setAttribute("id", "sendDecipher");
decipherSendButton.textContent = "HAZ CLICK PARA DECIFRAR"

decodeForm.append(offsetFieldDecode, encryptFieldsDecode, decipherSendButton)

decipherButton.addEventListener("click", function(){
    codeDecode.innerHTML="";
    codeDecode.appendChild(decodeForm);
})

decodeForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let shiftDencode = parseInt(offsetDecode.value);
    msgDecoded.value = cipher.decode(shiftDencode, msgInputDecode.value);
})