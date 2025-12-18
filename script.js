console.log("Inizio esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML = d.getDay();
    
let colori = [];


function(elabora) {
    let numero = document.getElementById("isNumber").value;
    alert(numero);

}


if (numero >=0 && numero <=255) {
    colori.push(numero);

    document.getElementById("outText").innerHTML =
    "hai inserito il numero " + numero;

    document.getElementById("outText").innerHTML +=
    "<br> I colori inseriti sono: " + colori;
    console.log(colori);

    if colori.length == 3 {
        newColor = 'rgb(${colori[0]}, ${colori[1]}, ${colori[2]})';
        document.getElementById("outText").style.color += newColor;
}
} else {
    document.getElementById("error").innerHTML = "il numero inserito non va bene";
}

