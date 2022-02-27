//Importamos los templates
import { template_home } from "../templates/template_home.js";
import { template_about } from "../templates/template_about.js";
import { template_technologies } from "../templates/template_technologies.js";

//Importamos las funciones

const headerOptions = ["Home", "About", "Personajes", "Tecnologías_usadas"];

export const headerLinks = () => {
  $("#header_menu")
    .children()
    .each((index) => {
      $("#header_menu").children()[index].innerHTML = `<p id="${headerOptions[index]}"> ${headerOptions[index]} </p>`;
    });

  $(`#${headerOptions[0]}`).on("click", () => {
    window.history.pushState({}, "done", `#${headerOptions[0]}`);
    $("#main").html(template_home);
  });

  $(`#${headerOptions[1]}`).on("click", () => {
    window.history.pushState({}, "done", `#${headerOptions[1]}`);
    $("#main").html(template_about);
  });

  $(`#${headerOptions[2]}`).on("click", () => {
    window.history.pushState({}, "done", `#${headerOptions[2]}`);
    $.ajax({
      type: "GET",
      url: `https://rickandmortyapi.com/api/character/${Math.floor(
        Math.random() * (1 - 100) + 100
      )}`,
      dataType: "json",
    })
      .done((character) => {
        $('#main').html(`
                <div class="card" 
                    style=
                        "width: 48rem; 
                        background-color: rgba(0,0,0,0.0);
                        border-radius: 5px;
                        text-align: center;
                        margin-left: 550px;
                ">
                    <h1>${character.name}</h1>
                    <img src="${character.image}" style="width: 40rem;">
                </div>
            `);
      })
      .fail((error) => {
        console.log(error);
      })
      .always(() => {
        console.log("complete");
      });
  });

  $(`#${headerOptions[3]}`).on("click", () => {
    window.history.pushState({}, "done", `#${headerOptions[3]}`);
    $("#main").html(template_technologies);
  });
};
