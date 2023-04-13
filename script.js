function calc_ticket(){
let km = new Number(document.getElementById("km").value);
let age = new Number(document.getElementById("age").value);
let costo_biglietto = 0;
let costo_finale = 0;

costo_biglietto = km*0.21;

if(age < 18){
    costo_finale = costo_biglietto - (costo_biglietto * (20/100));
    // document.getElementById("prezzo_finale").innerHTML = costo_finale.toFixed(2);
    console.log(costo_finale.toFixed(2))
} else if(age == 65){
    costo_finale = costo_biglietto - (costo_biglietto * (40/100));
    // document.getElementById("prezzo_finale").innerHTML = costo_finale.toFixed(2);
    console.log(costo_finale.toFixed(2))
} else{
    // document.getElementById("prezzo_finale").innerHTML = costo_biglietto.toFixed(2);
    console.log(costo_biglietto.toFixed(2))
}

}