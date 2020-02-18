"use strict";

var txtOmschrijving="";
var txtVeldNaam="";
var btnVoegToe;
var divNieuweElementen;
window.addEventListener('load', Initieer);

function Initieer() {
  //Declareer en initialiseer een variabele om de knop in bij te houden
  
  // Sla de DOM-elementen met id txtOmschrijving en txtVeldNaam op in hun resp. variabelen
    txtOmschrijving = document.getElementById("txtOmschrijving");
    txtVeldNaam = document.getElementById("txtVeldNaam");
    btnVoegToe = document.getElementById("btnVoegToe");
    divNieuweElementen = document.getElementById("divNieuweElementen");
  // Vul in txtOmschrijving en txtVeldNaam standaardwaarden in, nl. Adres en txtAdres
    txtOmschrijving.value = "Adres";
    txtVeldNaam.value = 'txtAdres';
  // Voeg een eventlisteners toe aan de knop om VoegVeldToe te laten uitvoeren bij een klik
  btnVoegToe.addEventListener("click", VoegVeldToe)
}

function VoegVeldToe() {
  
  //Declareer en initialiseer een variabele om divNieuweElementen in bij te houden
    
  //Declareer variabelen om de input in de textboxen bij te houden en sla de input erin op
    let gekozenVeldNaam = txtVeldNaam.value;
    let gekozenOmschrijving = txtOmschrijving.value;
  //Declareer een variabele met de naam newDiv om een nieuw div-element in op te slaan
  //De css-classes van deze variabele zijn input en accent
    let newDiv = document.createElement('div');
    newDiv.classList.add('input');
    newDiv.classList.add('accent');
  //Declareer een variabele met de naam newLabel om een nieuw label-element in op te slaan
  //In dit label verschijnt de omschrijving die opgegeven is door de gebruiker
  //Het for-attribuut wordt ingevuld
  //Het label wordt toegevoegd aan newDiv
    let newLabel = document.createElement('label');
    newLabel.innerHTML = gekozenOmschrijving;
    newLabel.classList.add('for', gekozenOmschrijving);
    newDiv.appendChild(newLabel)
  //Declareer een variabele met de naam newInput om een nieuw input-element in op te slaan
  //De id- en type-attributen worden ingevuld
  //De input wordt toegevoegd aan newDiv
    let newInput = document.createElement('input');
    newInput.setAttribute('id', gekozenVeldNaam);
    newInput.setAttribute('id', 'type');
    newDiv.appendChild(newInput);
  //De input in de textboxes wordt gewist
    txtOmschrijving.value = "";
    txtVeldNaam.value = "";
  //newDiv wordt toegevoegd aan divNieuweElementen
 divNieuweElementen.appendChild(newDiv);
}


