// Variable Parsing
let userPrompt = document.getElementById('userTxt');
let encodeBtn = document.getElementById('encodeBtn');
let decodeBtn = document.getElementById('decodeBtn');
let minusCounter = document.getElementById('decrement');
let counter = document.getElementById('counter')
let plusCounter = document.getElementById('increment');
let resetCounterBtn = document.getElementById('reset');
let cipheredMessage = document.getElementById('cipherOutput');
let cipherBtn = document.getElementById('cipherBtn');


// Event Listeners
window.addEventListener("DOMContentLoaded", ()=>{
    decodeBtn.addEventListener('click', ()=>{
        cipherBtn.children[0].innerText = "Decrypt";
        decodeBtn.children[0].classList.add("underline-current");
        encodeBtn.children[0].classList.remove("underline-current");
    });
    encodeBtn.addEventListener('click', ()=>{
        cipherBtn.children[0].innerText = "Encrypt";
        encodeBtn.children[0].classList.add("underline-current");
        decodeBtn.children[0].classList.remove("underline-current");
    });
});
// Encryption / Decryption (Execution)
cipherBtn.addEventListener('click', ()=>{
if (cipherBtn.innerText == "Encrypt") {
    cipher(userPrompt.value, parseInt(counter.innerText));
}
else if (cipherBtn.innerText == "Decrypt"){
        decipher(userPrompt.value, parseInt(counter.innerText));
    }
});
// Counter Function
let count = 0;
function updateCounter(newCount) {
    let counterRegEx = /^(0?[0-9]|1[0-9]|2[0-5])$/
    if (counterRegEx.test(newCount.toString())) {
        count = newCount;
        counter.innerText = count;
    }
}
plusCounter.addEventListener('click', ()=>{
    if (parseInt(count) < 25) {
        updateCounter(parseInt(count) + 1);
    }
    else{
        alert("Maximum limit reached")
    }
})
minusCounter.addEventListener('click', ()=>{
    if (parseInt(count) > 0) {
        updateCounter(parseInt(count) - 1);
    }
    else{
        alert("Minimum limit reached")
    }
})
// Reset Counter
function resetCounter() { 
    counter.innerText = 0; 
    count = 0;
    return counter.innerText = 0 && count == 0;
}
resetCounterBtn.addEventListener('click', ()=>{
    resetCounter();
})
counter.addEventListener('keydown', (event)=>{
    if (event.key == "Enter") {
        event.preventDefault(); 
    }
})

// Caesar Cipher
function cipher(messageToEncypt, keyShift) {
    let resultEncryption = "";

    for (let i = 0; i < messageToEncypt.length; i++) {
        let messageChar = messageToEncypt[i];
        console.log(messageChar);
        if (messageChar.match(/^[a-zA-Z]$/)) {
            let base; 
            if (messageChar === messageChar.toUpperCase()){
                base = 65;      //Uppercase (A-Z)
            } 
            else{
                base = 97;      // Lowercase (a-z)
            }
            let convertedMessage = String.fromCharCode(((messageChar.charCodeAt(0) - base + keyShift ) % 26) + base);
            resultEncryption += convertedMessage;
        }
        else{
            resultEncryption += messageChar;
        }
    }
        cipheredMessage.innerText = resultEncryption;
        return resultEncryption;    
}
function decipher(messageToDecrypt, keyShift) {
    let resultDecryption = "";
    for (let i = 0; i < messageToDecrypt.length; i++) {
        let messageChar = messageToDecrypt[i];

        if (messageChar.match(/^[a-zA-Z]$/)) {
            let base; 
            if (messageChar === messageChar.toUpperCase()){
                base = 65;      //Uppercase (A-Z)
            } 
            else{
                base = 97;      // Lowercase (a-z)
            }
            let convertedMessage = String.fromCharCode(((messageChar.charCodeAt(0) - base - keyShift + 26 ) % 26) + base);
            resultDecryption += convertedMessage;
        }
        else{
            resultDecryption += messageChar;
        }
    }
        cipheredMessage.innerText = resultDecryption;
        return resultDecryption;
}
// ENCODE DECODE BTN
