//! DEFINO QUÉ LUGAR QUIERO SELECCIONAR
const formulario = document.querySelector(".form");
//!BUSCO DENTRO DEL FORMULARIO Y SELECCIONO LO QUE QUIERO QUE LEA
const titulo = formulario.querySelector(".nombreJS");
const comentario = formulario.querySelector(".descripcionJS");
const url = formulario.querySelector(".urlJS");

//!LUGAR DONDE ENVIO
const listaHobbies = document.querySelector("#envioActividad");

//!MI FUNCIÓN QUE SE ACTIVA
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  render();
});

//!MI FUNCIÓN PRINCIPAL CUANDO SE ACTIVA LA ANTERIOR
function render() {
  //! CREO MIS ELEMENTOS
  const lista = document.createElement("li");
  let tituloRender = document.createElement("h4");
  let imagenRender = document.createElement("img");
  let parrafoRender = document.createElement("p");

  //!LE ASIGNO VALOR A LOS MISMOS
  tituloRender.textContent = titulo.value;
  imagenRender.src = url.value;
  imagenRender.setAttribute("alt", "Imagen");
  parrafoRender.textContent = comentario.value;

  //!LE CREO HIJOS A ESOS ELEMENTOS
  lista.appendChild(tituloRender);
  lista.appendChild(imagenRender);
  lista.appendChild(parrafoRender);

  //! LE ADICIONO UNA ETIQUETA
  lista.classList.toggle("renderLi");
  //! A MI LISTA PRINCIPAL, LE ADICIONO TODO LO ANTERIOR
  listaHobbies.appendChild(lista);

  //!RESETEO VALORES
  titulo.value = "";
  comentario.value = "";
  url.value = "";
}
