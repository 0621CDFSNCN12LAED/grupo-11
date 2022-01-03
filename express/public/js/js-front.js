const validator = require("validator");
window.addEventListener("load", function () {
  let formulario = document.querySelector("form.register");
  formulario.addEventListener("submit", function (e) {
    let errores = [];

    let campoNombre = document.querySelector("input#userName");
    if (campoNombre.value == "") {
      errores.push("Este campo es obligatorio");
    } else if (campoNombre.value.length < 2) {
      errores.push("Debe tener al menos 2 caracteres");
    }

    let campoEmail = document.querySelector("input#email");
    if (campoEmail.value == "") {
      errores.push("Este campo es obligatorio");
    } else if (validator.isEmail(campoEmail.value)) {
      errores.push("Debe ser un mail válido");
    }

    let campoContraseña = document.querySelector("input#userPassword");
    if (campoContraseña.value == "") {
      errores.push("Este campo es obligatorio");
    } else if (campoNombre.value.length < 8) {
      errores.push("Debe tener al menos 8 caracteres");
    }
    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }

    /* FALTA VALIDAR EL TIPO DE ARCHIVO DE LA IMAGEN DE PERFIL */
  });
});
