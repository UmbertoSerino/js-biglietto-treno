const km = parseFloat (prompt("Quanti km vuoi fare?"));
const age = parseInt (prompt("Quanti anni hai?"));

let priceKm = km * 0.21;

if (age < 18) {
    priceKm = priceKm - priceKm * 0.20;
}

else if (age > 65) {
    priceKm = priceKm * 0.40;
}

// Esempio su 10km
// se minorenne pago 1.68 (sconto del 4.42€)
// se over 65 pago 0.84 (sconto del 4.17)
// se nessuno dei due per 10km pago 2.21€


document.getElementById("output").innerHTML = "pagheraipag:" + priceKm.toFixed(2) + "€";