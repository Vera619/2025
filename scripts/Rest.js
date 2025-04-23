let counter = 0;

function init() 
{document.getElementById("gif").style.display = "none";}

function getData () {
    document.getElementById("gif").style.display = "block";
fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
        //.then, palauttaa tässä Promisen (lupauksen), jota käytetään seuraavassa then-funktiossa. 
        return response.json(); //huom. tässä response tulee JSON-muodossa
    })
    .then(function (result) {
        document.getElementById("text").innerHTML += "<br>" + "<i>" + result.value + "</i>";
        document.getElementById("gif").style.display = "none";
    })

    .catch(function (error) {
        //Jos lupaus epäonnistuu (eli lupaus on hylätty), tämä toiminto suoritetaan
        console.log(error);
    });

    counter = counter+1;
    document.getElementById("counter").innerHTML = counter;
}

