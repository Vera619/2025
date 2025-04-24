let counter = 0;

function init(){
    let n1 = Math.floor(Math.random()* 10)+1;
    document.getElementById('firstTextInput').value = n1;
    let n2 = Math.floor(Math.random()* 10)+1;
    document.getElementById('firstTextInput1').value = n2;
}

function minusnro1() { 
    let n1 = parseInt(document.getElementById('firstTextInput').value);
    if (n1 > 1) document.getElementById('firstTextInput').value = n1 - 1;
}

function plusnro1() {
    let n1 = parseInt(document.getElementById('firstTextInput').value);
    if (n1 < 10) document.getElementById('firstTextInput').value = n1 + 1;
}

function minusnro2() { 
    let n2 = parseInt(document.getElementById('firstTextInput1').value);
    if (n2 > 1) document.getElementById('firstTextInput1').value = n2 - 1;
}

function plusnro2() {
    let n2 = parseInt(document.getElementById('firstTextInput1').value);
    if (n2 < 10) document.getElementById('firstTextInput1').value = n2 + 1;
}

function calculate() {
    let n1 = parseInt(document.getElementById('firstTextInput').value);
    let n2 = parseInt(document.getElementById('firstTextInput1').value);
    let operation = document.getElementById('operation').value;
    let tulos = eval(n1 + operation + n2);
    counter = counter+1;
    document.getElementById('tulos').innerText = tulos;
    document.getElementById('klik').innerHTML = "laskutoimituksia: " + counter + " kpl";

    let text = document.querySelector('#text');
    let p = document.createElement('p');
    p.textContent = tulos + "=" + n1 + operation + n2;
    text.append(p);
}



function iInfo(){
    let i = document.getElementById('i-text');
    if(i.style.display === 'none')
        i.style.display = 'block';
    else 
        i.style.display = 'none';
}
