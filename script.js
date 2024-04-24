function calcola() {
    var num1 = parseFloat(document.getElementById('input1').value);
    var num2 = parseFloat(document.getElementById('input2').value);
    var num3 = parseFloat(document.getElementById('input3').value);
    
    // Esempio di una semplice funzione matematica (somma dei numeri)
    var risultato = num1 + num2 + num3;
    
    document.getElementById('risultato').innerHTML = "Il numero magico per la superbirra è: " + risultato;
}
