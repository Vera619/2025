let counter = 0;

function init() {
  let n1 = Math.floor(Math.random() * 10) + 1;
  document.getElementById('firstTextInput').value = n1;

  let n2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById('firstTextInput1').value = n2;
}

function minusNro1() {
  let n1 = parseInt(document.getElementById('firstTextInput').value);
  if (n1 > 1) document.getElementById('firstTextInput').value = n1 - 1;
}

function plusNro1() {
  let n1 = parseInt(document.getElementById('firstTextInput').value);
  if (n1 < 10) document.getElementById('firstTextInput').value = n1 + 1;
}

function minusNro2() {
  let n2 = parseInt(document.getElementById('firstTextInput1').value);
  if (n2 > 1) document.getElementById('firstTextInput1').value = n2 - 1;
}

function plusNro2() {
  let n2 = parseInt(document.getElementById('firstTextInput1').value);
  if (n2 < 10) document.getElementById('firstTextInput1').value = n2 + 1;
}

function calculate() {
  let n1 = parseInt(document.getElementById('firstTextInput').value);
  let n2 = parseInt(document.getElementById('firstTextInput1').value);
  let operation = document.getElementById('operation').value;

  let tulos;
  switch (operation) {
    case "+":
      tulos = n1 + n2;
      break;
    case "-":
      tulos = n1 - n2;
      break;
    case "*":
      tulos = n1 * n2;
      break;
    case "/":
      tulos = (n2 !== 0) ? (n1 / n2).toFixed(2) : "∞ (jako nollalla)";
      break;
    default:
      tulos = "virhe";
  }

  counter++;
  document.getElementById('tulos').innerText = tulos;
  document.getElementById('klik').innerHTML = "Laskutoimituksia: " + counter + " kpl";

  let p = document.createElement('p');
  p.innerHTML = `<strong>${n1} ${operation} ${n2} = ${tulos}</strong>`;
  document.querySelector('#text').append(p);
}

function iInfo() {
  let i = document.getElementById('i-text');
  i.style.display = (i.style.display === 'none') ? 'block' : 'none';
}
