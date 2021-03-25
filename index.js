//create granDiv

const body = document.querySelector("body");
const granDiv = document.createElement("div");
const bodyDiv = document.createElement("div");
body.appendChild(granDiv);
let grilla = crearGrilla(); 
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
granDiv.style.display = "grid";
granDiv.style.gridTemplateColumns = "repeat(16, 1fr)";
granDiv.style.gridTemplateRows = "repeat(16, 1fr)";
granDiv.style.width = "500px";
granDiv.style.height = "500px";
granDiv.style.margin = "6rem";
granDiv.style.backgroundColor = "blue";
granDiv.setAttribute("id", "gran-div");



//Crear grilla 16*16

function crearGrilla() {
  let grilla = [];

  for (let i = 0; i < 256; i++) {
    grilla[i] = document.createElement("div");
    grilla[i].setAttribute("class", "cadaCuadro");
    grilla[i].style.cssText = "background-color: blue; width: 5px; height: 5px";
    granDiv.appendChild(grilla[i]);
  }
  return;
}
