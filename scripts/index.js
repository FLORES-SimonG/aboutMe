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

  const lista = document.createElement("div");
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
  lista.classList.toggle("renderDiv");
  //! A MI LISTA PRINCIPAL, LE ADICIONO TODO LO ANTERIOR
  listaHobbies.appendChild(lista);

  //!RESETEO VALORES
  titulo.value = "";
  comentario.value = "";
  url.value = "";
}

class Activity {
  constructor({id, title, description, imgUrl}) {
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
    
    const activity = new Activity({id: this.id , ...object});
    this.activities.push(activity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((x) => x.id !== id);
  }
}

const repositorio = new Repository();

// const obj = {
//   id: 1,
//   title: "batman",
//   description: "es una filma",
//   imgUrl: "via.placeholder.com/150",
// };

// const obj2 = {
//   id: 2,
//   title: "spiderman",
//   description: "es una filma",
//   imgUrl: "via.placeholder.com/555555550",
// };

// // console.log(repositorio)
// repositorio.createActivity(obj)
// // console.log(repositorio)
// repositorio.createActivity(obj2);
// // console.log(repositorio);

// repositorio.deleteActivity(2)
// console.log(repositorio)

// repositorio.createActivity("ARG01", "Futbol", "Juego de Pelota", "futbol.img");

// repositorio.createActivity("ARG02", "Tenis", "Juego con raqueta", "tenis.img");

// repositorio.createActivity("ARG03", "Ajedrez", "Juego de inteligencia", "agedrez.img");

// repositorio.deleteActivity("ARG03");
// // repositorio.deleteActivity('ARG02');
// repositorio.deleteActivity("ARG01");

// console.log(repositorio.getAllActivities());

// console.log(repositorio.activities);



// class Activity { 
//   constructor({ id, title, description, imgUrl }) {
//       console.log(id)
//       this.id = id
//       this.title = title
//       this.description = description
//       this.imgUrl =imgUrl
//   }
// }

// class Repository {
//   constructor() {
//       this.activities = []
//       this.id = 0
//   }
//   getAllActivities() {
//       return this.activities
//   }
//   createActivity(object) {
//       this.id ++
//       const activity = new Activity({ id: this.id, ...object })

//       this.activities.push(activity)
//   }
//   deleteActivity(id) { 
//       const filtered = this.activities.filter(act => act.id !== id)
//       this.activities = filtered
//   }
// }

// const repository = new Repository()

// const obj = {
// title: "Activity 1",
// description: "Description 1",
// imgUrl: "https://via.placeholder.com/150",
// };
// console.log(repository)
// repository.createActivity(obj)
// console.log(repository);
// repository.createActivity(obj);
// console.log(repository);
// repository.createActivity(obj);
// console.log(repository);
// repository.createActivity(obj);
// console.log(repository.getAllActivities())
// repository.deleteActivity(2)
// repository.deleteActivity(3)
// repository.deleteActivity(4)
// repository.deleteActivity(1);
// console.log(repository.getAllActivities());