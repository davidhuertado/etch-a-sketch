

const body = document.querySelector("body");
const granDiv = document.createElement("div");
const botonReset = document.createElement("button");
const abarcadorDiv = document.createElement("div");
const titulo = document.createElement("h1");

body.appendChild(titulo);
body.appendChild(abarcadorDiv);
abarcadorDiv.appendChild(botonReset);
abarcadorDiv.appendChild(granDiv);

let grilla = crearGrilla();

body.style.textAlign = "center";
body.style.backgroundColor = "#864000";


titulo.innerText = "Etch-a-Sketch";
titulo.style.color = "#ffefcf";
titulo.style.padding = "20px";

abarcadorDiv.style.height = "600px"
abarcadorDiv.style.display = "flex";
abarcadorDiv.style.alignItems = "center";
abarcadorDiv.style.justifyContent = "center";

granDiv.style.display = "grid";
granDiv.style.width = "500px";
granDiv.style.height = "500px";
granDiv.style.margin = "6rem";
granDiv.style.backgroundColor = "#d44000";
granDiv.style.borderStyle = "solid";
granDiv.style.borderColor = "#ff7a00";
granDiv.setAttribute("id", "gran-div");
granDiv.style.gridTemplateColumns = "repeat(16, 1fr)";
granDiv.style.gridTemplateRows = "repeat(16, 1fr)";


botonReset.innerText = "Reset";
botonReset.addEventListener("click", function () {
  resetGrilla(granDiv, crearGrilla, hoverGrilla);
});
let grillaConHover = hoverGrilla(grilla);


//Reset la grilla al numero que desee el usuario
function resetGrilla(granDiv, crearGrilla, hoverGrilla) {
  let cantidadColumnas = prompt("Size of the square (2 - 100 and integers)");
  if (cantidadColumnas < 2 || cantidadColumnas > 100 || cantidadColumnas % 1 !== 0) {
    alert("ERROR");
    return;
  }
  cantidadColumnas = parseInt(cantidadColumnas);
  
   

    while (granDiv.firstChild) {
      granDiv.removeChild(granDiv.firstChild);
    }
    let nuevaGrilla = crearGrilla(cantidadColumnas);
    let nuevasColumnas = columnasGranDiv(cantidadColumnas);
    nuevaGrilla = hoverGrilla(nuevaGrilla, cantidadColumnas);
    return nuevasColumnas, nuevaGrilla;

    
  
    //Organizar el grid
  function columnasGranDiv(cantidadColumnas) {
    granDiv.style.gridTemplateColumns = "repeat(" + cantidadColumnas + ", 1fr)";
    granDiv.style.gridTemplateRows = "repeat(" + cantidadColumnas + ", 1fr)";
    return;
  }
}

//Hacer hover de la grilla
function hoverGrilla(grilla, cantidadColumnas) {
  if (cantidadColumnas == undefined) {
    for (let i = 0; i < 256; i++) {
      grilla[i].addEventListener("mouseover", () => {
        grilla[i].style.backgroundColor = "#ffefcf";
      });
    }
    return;
  }
  else {
    for (let i = 0; i < cantidadColumnas * cantidadColumnas; i++) {
      grilla[i].addEventListener("mouseover", () => {
        grilla[i].style.backgroundColor = "#ffefcf";
      });

    }
    return;
  }
}

//Crear grilla 16*16

function crearGrilla(cantidadColumnas) {
  let grilla = [];
  if (cantidadColumnas == undefined) {
    for (let i = 0; i < 256; i++) {
      grilla[i] = document.createElement("div");
      grilla[i].setAttribute("class", "cadaCuadro");

      granDiv.appendChild(grilla[i]);
    }
    return grilla;
  } else
    for (let i = 0; i < cantidadColumnas * cantidadColumnas; i++) {
      grilla[i] = document.createElement("div");
      grilla[i].setAttribute("class", "cadaCuadro");
      //grilla[i].style.cssText = "width: 5px; height: 5px";
      granDiv.appendChild(grilla[i]);
    }
  return grilla;
}
