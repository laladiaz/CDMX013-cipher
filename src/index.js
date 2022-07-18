import cipher from './cipher.js';

const buttons = document.getElementById('buttons')
const cipherButton = document.getElementById('cipherButton')

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

cipherButton.addEventListener('click', function(){
    console.log(cipher.ejemplo())
})