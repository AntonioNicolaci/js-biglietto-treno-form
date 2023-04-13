function calc_ticket(){
let km = document.getElementById("km").value;
let name = document.getElementById("name").value;
let age, ticket, posto, carrozza, pc;
let costo_biglietto = 0;
let costo_finale = 0;

costo_biglietto = km*0.21;

if(document.getElementById('minorenne').checked == true){
    costo_finale = costo_biglietto - (costo_biglietto * (20/100));
    age = "Minorenne";
    ticket = "Ridotto";
    // document.getElementById("prezzo_finale").innerHTML = costo_finale.toFixed(2);
    // console.log(costo_finale.toFixed(2))
}
if(document.getElementById('maggiorenne').checked == true){
    costo_finale = costo_biglietto.toFixed(2);
    age = "Maggiorenne";
    ticket = "Standard";
    // document.getElementById("prezzo_finale").innerHTML = costo_biglietto.toFixed(2);
    // console.log(costo_biglietto.toFixed(2))
}
if(document.getElementById('pensionato').checked == true){
    costo_finale = costo_biglietto - (costo_biglietto * (40/100));
    age = "Pensionato";
    ticket = "Ridotto+";
    // document.getElementById("prezzo_finale").innerHTML = costo_finale.toFixed(2);
    // console.log(costo_finale.toFixed(2))
}

posto = (Math.floor(Math.random() * 9)+1);
carrozza = (Math.floor(Math.random() * 40)+1);
pc = (Math.floor(Math.random() * 999999)+1);

document.getElementById("span_nome").innerHTML = `${name} (${age})`;
document.getElementById("span_biglietto").innerHTML = ticket;
document.getElementById("span_carrozza").innerHTML = carrozza;
document.getElementById("span_posto").innerHTML = posto;
document.getElementById("span_PC").innerHTML = pc;
document.getElementById("span_costo").innerHTML = costo_finale;

}