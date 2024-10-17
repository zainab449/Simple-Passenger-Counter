let x = 0;
let save = document.getElementById('Enteries');

function button1() {
    document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
    save.textContent += x + "-";
}

function button3() {
    x = 0; // Reset the counter
    document.getElementById('output-area').innerHTML = '0';
}
