    'use strict';
    $(document).ready(function() {
      $('body').addClass('awesome');
    });


function square(jimbo){
    var spillane = jimbo * jimbo;
    document.getElementById("resultat").innerHTML = spillane;
    return spillane;
}

var toChange = document.getElementById("languageTarget");

function checkRadio () {
    if(document.getElementById('en').checked) {
        toChange.innerHTML = "Choose a language";
    }else if(document.getElementById('sp').checked) {
        toChange.innerHTML = "Elegir un idioma";
    }else if(document.getElementById('de').checked) {
        toChange.innerHTML = "Wählen Sie eine Sprache";
    }
}

var numOne = "";
var id = "";

var calcNum = function(){
    console.log(this);
    return (this);
}
