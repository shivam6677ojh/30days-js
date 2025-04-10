const passwordbox = document.querySelector("#password");
const accessbtn = document.getElementsByClassName("btn");
const length = 11;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const NumberCase = "0123456789";
const specialChar = "!@#$%^&*(){}[]|:'><+-";
const randomChar = upperCase + lowerCase + NumberCase + specialChar;

function CreatePassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += NumberCase[Math.floor(Math.random() * NumberCase.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while (length > password.length) {
        password += randomChar[Math.floor(Math.random() * randomChar.length)];
    }

    passwordbox.value = password;
}


// for copy 
function CopyPassword() {
    passwordbox.select();
    passwordbox.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}




