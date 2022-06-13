import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let iconos = ["♦", "♥", "♠", "♣"];
let simbolo = [
  "J",
  "Q",
  "k",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];

function numeroAleatorioIconos() {
  let num = Math.floor(Math.random() * iconos.length);
  return num;
}

function numeroAleatorioSimbolo() {
  let num = Math.floor(Math.random() * simbolo.length);
  return num;
}

window.onload = function() {
  let icono = iconos[numeroAleatorioIconos()];
  let simb = simbolo[numeroAleatorioSimbolo()];
  if (icono == "♦" || icono == "♥") {
    document.querySelector("#top").innerHTML = icono;
    document.querySelector("#bottom").innerHTML = icono;
    document.querySelector("#num").innerHTML = simb;
    let aux = document.querySelector("#top");
    let aux2 = document.querySelector("#bottom");
    aux.style.color = "red";
    aux2.style.color = "red";
  } else {
    document.querySelector("#top").innerHTML = icono;
    document.querySelector("#bottom").innerHTML = icono;
    document.querySelector("#num").innerHTML = simb;
  }
};
