class Activity {
  constructor({ id, title, description, imgUrl }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }
  getAllActivities() {
    return this.activities;
  }

  createActivity(object) {
    const activity = new Activity(object);
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((x) => x.id !== id);
  }
}

const repositorio = new Repository();

const callBack = (e) => {
  e.preventDefault();
  const titulo = formulario.querySelector(".nombreJS");
  const comentario = formulario.querySelector(".descripcionJS");
  const url = formulario.querySelector(".urlJS");
  const idNumber = Date.now();
  const obj = {
    id: idNumber,
    title: titulo.value,
    description: comentario.value,
    imgUrl: url.value,
  };
  repositorio.createActivity(obj);
  mostrarCartas();
  formulario.reset();
};

const mostrarCartas = () => {
  const carta = document.getElementById("envioActividad");
  carta.innerHTML = "";
  const actividadesParciales = repositorio.getAllActivities();
  const conjuntoTarjetas = actividadesParciales.map((actividad) => {
    return crearCarta(actividad);
  });
  conjuntoTarjetas.forEach((tarjeta) => carta.appendChild(tarjeta));
};

const crearCarta = (actividad) => {
  const { title, description, imgUrl } = actividad;
  const lista = document.createElement("div");
  let tituloRender = document.createElement("h4");
  tituloRender.textContent = title;
  let imagenRender = document.createElement("img");
  imagenRender.src = imgUrl;
  imagenRender.setAttribute("alt", "Imagen");

  let parrafoRender = document.createElement("p");
  parrafoRender.textContent = description;
  lista.appendChild(tituloRender);
  lista.appendChild(imagenRender);
  lista.appendChild(parrafoRender);

  lista.addEventListener("click", () => {
    lista.remove(); // Elimina la tarjeta completa al hacer clic en ella
  });

  return lista;
};

const formulario = document.querySelector(".form");

formulario.addEventListener("submit", callBack);

document.addEventListener("DOMContentLoaded", function () {
  const formularioInputCreador = document.getElementById(
    "formularioInputCreador"
  );
  const botonCreador = document.getElementById("botonCreador");

  botonCreador.addEventListener("click", function (e) {
    e.preventDefault();
    renderDev();
  });

  function renderDev() {
    const nombreCreador = document.getElementById("inputCreador");
    const divDeveloper = document.getElementById("envioDeveloper");
    const nombre = nombreCreador.value;

    // Creo un elemento h6
    const nombreElemento = document.createElement("h6");
    // Asigno el nombre
    nombreElemento.textContent = nombre;

    // Agrego el hijo a envioDeveloper
    nombreElemento.style.margin = "8px";
    nombreElemento.style.textAlign = "center";
    nombreElemento.style.backgroundColor = "firebrick";
    nombreElemento.style.borderRadius = "25px";
    nombreElemento.style.color = "whitesmoke";
    divDeveloper.appendChild(nombreElemento);

    // Limpio el nombreCreador
    nombreCreador.value = "";
  }
});
