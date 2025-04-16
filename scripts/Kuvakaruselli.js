let catsArray = [{"name":"Pulla", "src":"kuvat/Pulla.jpg"}, {"name":"Pilli", "src":"kuvat/Pilli.jpg"}, {"name":"Monni", "src":"kuvat/Monni.jpg"}];
let i = 0;
let toiminnonTunniste = 0;

function init(){
    if (localStorage.hasOwnProperty('cat')) {
        i = localStorage.getItem("cat");
        }
        else i = 0;
    document.getElementById("cat").src = catsArray[i].src;
    document.getElementById("name").textContent = catsArray[i].name;
}

function previousPhoto() {
    if (i > 0) {
        i--;
        document.getElementById("cat").src = catsArray[i].src;
        document.getElementById("name").textContent = catsArray[i].name;
    }
    else {
        i = catsArray.length-1;
        document.getElementById("cat").src = catsArray[i].src;
        document.getElementById("name").textContent = catsArray[i].name;
    }
    localStorage.setItem("cat", i);
}

function nextPhoto() {
    if (i < catsArray.length - 1) {
        i++;
        document.getElementById("cat").src = catsArray[i].src;
        document.getElementById("name").textContent = catsArray[i].name;
    }
    else {
        i = 0;
        document.getElementById("cat").src = catsArray[i].src;
        document.getElementById("name").textContent = catsArray[i].name;
    }
    localStorage.setItem("cat", i);
}

function change(iconID) {
    const icon = document.getElementById(iconID);
    if (icon.className === "bi bi-play") {
        icon.className = "bi bi-pause";
        toiminnonTunniste = window.setInterval(nextPhoto, 1500); 
    } else {
        icon.className = "bi bi-play";
        window.clearInterval(toiminnonTunniste);
    }
}

