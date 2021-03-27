//create granDiv

const body = document.querySelector("body");
const granDiv = document.createElement("div");
const botonReset = document.createElement("button");
body.appendChild(botonReset);
body.appendChild(granDiv);

let grilla = crearGrilla();

body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";

granDiv.style.display = "grid";
granDiv.style.width = "500px";
granDiv.style.height = "500px";
granDiv.style.margin = "6rem";
granDiv.style.backgroundColor = "#fff";
granDiv.style.borderStyle = "solid";
granDiv.style.borderColor = "yellow";
granDiv.setAttribute("id", "gran-div");



granDiv.style.gridTemplateColumns = "repeat(16, 1fr)";
granDiv.style.gridTemplateRows = "repeat(16, 1fr)";


botonReset.innerText = "Reset";
botonReset.addEventListener("click", function () {
  resetGrilla(granDiv, crearGrilla, hoverGrilla);
});
let grillaConHover = hoverGrilla(grilla);

//

function resetGrilla(granDiv, crearGrilla, hoverGrilla) {
  let cantidadColumnas = prompt("Size of the square (2 - 100 and integers)");
  cantidadColumnas = parseInt(cantidadColumnas);
  if (cantidadColumnas < 2 || cantidadColumnas > 100) {
    alert("ERROR");
    return;
  } else {
    let viejaGrilla = document.querySelectorAll(".cadaCuadro");

    while (granDiv.firstChild) {
      granDiv.removeChild(granDiv.firstChild);
    }
    let nuevaGrilla = crearGrilla(cantidadColumnas);
    
    let nuevasColumnas = columnasGranDiv(cantidadColumnas);
    nuevaGrilla = hoverGrilla(nuevaGrilla);
    return nuevasColumnas, nuevaGrilla;
    
    // return nuevaGrilla;
  }

  function columnasGranDiv(cantidadColumnas) {
    granDiv.style.gridTemplateColumns = "repeat(" + cantidadColumnas + ", 1fr)";
  granDiv.style.gridTemplateRows = "repeat(" + cantidadColumnas + ", 1fr)";
  return;
  }
}

function hoverGrilla(grilla) {
  for (let i = 0; i < 256; i++) {
    grilla[i].addEventListener("mouseover", () => {
      grilla[i].style.backgroundColor = "black";
    });
  }
  return;
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
