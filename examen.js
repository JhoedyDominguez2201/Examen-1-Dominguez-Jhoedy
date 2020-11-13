function funciones() {
  Datos();
  peliculas();
}
window.onload = funciones;

function Datos() {
  
  var name = document.createElement("p");
  var text = document.createTextNode("Nombre: Dominguez Dominguez Jhoedy Indurain");
  name.appendChild(text);
  var last = document.body.getElementsByTagName("p")[1];
  last.parentNode.replaceChild(name, last);

  var controlnumber = document.createElement("p");
  var text2 = document.createTextNode("Numero de control: 17390333");
  controlnumber.appendChild(text2);
  var last2 = document.body.getElementsByTagName("p")[2];
  last2.parentNode.replaceChild(controlnumber, last2);
}

function peliculas() {
  var peliculasFavoritas = new Array();

  peliculasFavoritas["Pelicula1"] = "Spider-Man";
  peliculasFavoritas["Pelicula2"] = "The Notebook";
  peliculasFavoritas["Pelicula3"] = "Harry Potter";
  peliculasFavoritas["Pelicula4"] = "Star Trek";
  peliculasFavoritas["Pelicula5"] = "Resident Evil";
  peliculasFavoritas["Pelicula6"] = "The Hunger Games";

  for (i in peliculasFavoritas) {
    var node = document.createElement("li");
    var peliculas = document.createTextNode(peliculasFavoritas[i]);
    node.appendChild(peliculas);
    document.getElementById("Lista").appendChild(node);
  }
}

function agregar() {
  var personaje = document.createElement("li");
  personaje.textContent = document.getElementById("inputPersonajes").value;
  document.getElementById("listaPersonajes").appendChild(personaje);
}

function eliminar() {
  var eliminar = document.getElementById("Lista");
  var inputPelicula = document.getElementById("eliminaPelicula").value-1;
  eliminar.removeChild(eliminar.children[inputPelicula]);
}

