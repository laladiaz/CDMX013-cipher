import cipher from './cipher.js';

/*defino las constantes para el area de botones y cada boton y este espacio lo voy a modificar
para que cifre y decifre en una sola pagina*/
const buttons = document.getElementById('buttons');
const cipherButton = document.getElementById('cipherButton');
const decipherButton = document.getElementById('decipherButton');

/*Aqui creamos un click listener para cifrar y adentro de la funcion que se va a ejecutar al click
colocamos todos los campos y botones para el cifrado*/
cipherButton.addEventListener("click", function() {
    //div de offset y su etiqueta
    const offsetField = document.createElement("div");
    offsetField.setAttribute("class", 'offset-field')
    const offsetLabel = document.createElement("p");
    offsetLabel.textContent = "FIJA UN VALOR PARA EL CIFRADO";
   //el campo offset es un input type number
    const offset = document.createElement("input");
    offset.setAttribute("type", "number")
    offset.setAttribute("placeholder", "offset")
    offset.setAttribute("id", "offset-encrypt");
    
    offsetField.append(offsetLabel, offset)
    //deberia pornerle un botn de submit?
   //div de fields que contiene los textarea para introducir el mensaje y para leerlo
    const encryptFields = document.createElement("div");
    encryptFields.setAttribute("class", "fields");
    //textarea para introducir el mensaje
    const msgInput = document.createElement("textarea");
    msgInput.setAttribute("id", "msg-input");
    msgInput.setAttribute("placeholder", "ESCRIBE TU MENSAJE EN MAYUSCULAS SIN USAR CARACTERES ESPECIALES");
    //textarea para leer unicamente
    const msgEncrypted = document.createElement("textarea");
    msgEncrypted.setAttribute("id", "encrypted");
    msgEncrypted.setAttribute("readonly", "");
    
    encryptFields.append(msgInput, msgEncrypted);
    //boton para enviaer le mensaje a cifrar
    const sendButton = document.createElement("button");
    sendButton.setAttribute("class", "send");
    sendButton.setAttribute("id", "send");
    sendButton.textContent = "HAZ CLICK PARA CIFRAR"
    
    
    buttons.append(offsetField, encryptFields, sendButton);

});

/*Aqui creamos un click listener para decifrar y adentro de la funcion que se va a ejecutar al click
colocamos todos los campos y botones para el decifrado*/
decipherButton.addEventListener("click", function() {
    //div de offset y su etiqueta
    const offsetField = document.createElement("div");
    offsetField.setAttribute("class", 'offset-field')
    const offsetLabel = document.createElement("p");
    offsetLabel.textContent = "FIJA UN VALOR PARA EL CIFRADO";
   //el campo offset es un input type number
    const offset = document.createElement("input");
    offset.setAttribute("type", "number")
    offset.setAttribute("placeholder", "offset")
    offset.setAttribute("id", "offset-encrypt");
    
    offsetField.append(offsetLabel, offset)
    //deberia pornerle un botn de submit?
   //div de fields que contiene los textarea para introducir el mensaje y para leerlo
    const encryptFields = document.createElement("div");
    encryptFields.setAttribute("class", "fields");
    //textarea para introducir el mensaje a decifrar
    const msgInput = document.createElement("textarea");
    msgInput.setAttribute("id", "msg-code");
    msgInput.setAttribute("placeholder", "ESCRIBE TU MENSAJE EN MAYUSCULAS SIN USAR CARACTERES ESPECIALES");
    //textarea para leer unicamente
    const msgEncrypted = document.createElement("textarea");
    msgEncrypted.setAttribute("id", "decoded");
    msgEncrypted.setAttribute("readonly", "");
    
    encryptFields.append(msgInput, msgEncrypted);
    //boton para enviaer le mensaje a decifrar
    const sendButton = document.createElement("button");
    sendButton.setAttribute("class", "send");
    sendButton.setAttribute("id", "send");
    sendButton.textContent = "HAZ CLICK PARA DECIFRAR"
    
    
    buttons.append(offsetField, encryptFields, sendButton);

});

/*
cipherButton.addEventListener('click', function(){
    buttons.innerHTML=`
    <h1> JajajajajajaMuahaha</h1>
    <textarea></textarea>
    <button>cifra el texto</button>
    `
})
*/

/*
cipherButton.addEventListener('click', function(){
   const textarea=document.createElement('textarea')
   const button=document.createElement('button')
   button.textContent="Haz click para cifrar"

   buttons.append(
    textarea,button
   )
})
*/

/*cipherButton.addEventListener('click', function(){
    console.log(cipher.ejemplo())
})
*/