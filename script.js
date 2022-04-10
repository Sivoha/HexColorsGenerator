let button = document.querySelector(".button");
let hexCode = document.querySelector(".hex-code");
let body = document.querySelector("body");

function generateHEX() {
    let symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'F'];
    let code = '#';
    for (let i = 0; i < 6; ++ i) {
        let rand = Math.floor(Math.random() * symbols.length);
        code += symbols[rand];
    }
    return code;
}

function setBackgroundColor() {
    let colorCode = generateHEX();
    hexCode.innerHTML = colorCode;
    body.style.backgroundColor = colorCode;
}

button.addEventListener("click", setBackgroundColor);