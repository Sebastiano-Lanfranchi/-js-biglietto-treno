var kilometri = prompt('Inserisci il numero di kilometri da percorrere')
var anniUtente = prompt('Inserisci la tua etá')
var prezzo = kilometri * 0.21

if (anniUtente<18) {
  prezzo = prezzo * 0.8
}
if (anniUtente>65)
prezzo = prezzo * 0.6

document.getElementById("prezzo").innerText = 'Il prezzo del biglietto é di' + prezzo + '€';
