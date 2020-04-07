alert("script by Dario");
var nomeGiocatore = window.prompt("Inserisci Username: ");
document.getElementById("titolo").innerHTML = "Benvenuto " + nomeGiocatore;
var sceltaUtente;
function clickCarta(){
    sceltaUtente = "carta";
    alert(nomeGiocatore + " hai scelto: " + sceltaUtente);
}

function clickSasso(){
    sceltaUtente = "sasso";
    alert(nomeGiocatore + " hai scelto: " + sceltaUtente);
}

function clickForbici(){
    sceltaUtente = "forbici";
    alert(nomeGiocatore + " hai scelto: " + sceltaUtente);
}

function verDetto(){
    document.getElementById("carta").style.display = 'none';
    document.getElementById("sasso").style.display = 'none';
    document.getElementById("forbici").style.display = 'none';
    document.getElementById("pulsante").style.display = 'none';
    var sceltaBot;
    if(sceltaUtente == "carta"){
        sceltaBot = "forbici";
    }
    
        if(sceltaUtente == "sasso"){
        sceltaBot = "carta";
    }
    
        if(sceltaUtente == "forbici"){
        sceltaBot = "sasso";
    }
    
    document.getElementById("titolo").innerHTML = nomeGiocatore + " hai perso...";
    document.getElementById("informazioni").innerHTML = "Il bot ha scelto: " + sceltaBot;
    document.getElementById("informazioni2").innerHTML = nomeGiocatore + " hai scelto: " + sceltaUtente;
}
