let counter = 0;

function init() {
  document.getElementById("gif").style.display = "none";
  
  // Активируем jQuery UI Accordion
  $("#right-accordion").accordion({
    activate: function(event, ui) {
      // Когда пользователь активирует вкладку, загружаем шутку
      if (ui.newHeader.length) { // Проверяем, что есть заголовок
        const index = $("#right-accordion h3").index(ui.newHeader);
        loadJokeToSection(index, "jquery");
      }
    }
  });

  // Для Bootstrap Accordion — при раскрытии
  document.getElementById('collapseOne').addEventListener('show.bs.collapse', function () {
    loadJokeToSection(0, "bootstrap");
  });
  document.getElementById('collapseTwo').addEventListener('show.bs.collapse', function () {
    loadJokeToSection(1, "bootstrap");
  });
}

function getData() {
  const gif = document.getElementById("gif");
  const text = document.getElementById("text");

  gif.style.display = "block";

  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      gif.style.display = "none";
      text.innerHTML += "<br><i>" + result.value + "</i>";

      counter++;
      document.getElementById("counter").innerHTML = counter;
    })
    .catch(function (error) {
      gif.style.display = "none";
      console.log(error);
    });
}

// Функция загрузки шуток в разные секции
function loadJokeToSection(index, type) {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      if (type === "jquery") {
        // jQuery UI accordion
        const contentDiv = $("#right-accordion .ui-accordion-content").eq(index);
        contentDiv.html("<i>" + result.value + "</i>");
      } else if (type === "bootstrap") {
        // Bootstrap accordion
        const contentDiv = index === 0 ? document.querySelector("#collapseOne .accordion-body")
                                       : document.querySelector("#collapseTwo .accordion-body");
        contentDiv.innerHTML = "<i>" + result.value + "</i>";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}


