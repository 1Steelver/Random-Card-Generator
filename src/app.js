import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let icons = ["♦", "♥", "♠", "♣"];
let symbol = ["J", "Q", "k", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function randIco() {
  let num = Math.floor(Math.random() * icons.length);
  return num;
}

function randSymbol() {
  let num = Math.floor(Math.random() * symbol.length);
  return num;
}

window.onload = function() {
  let ico = icons[randIco()];
  let symb = symbol[randSymbol()];
  if (ico == "♦" || ico == "♥") {
    document.querySelector("#up").innerHTML = ico;
    document.querySelector("#down").innerHTML = ico;
    document.querySelector("#num").innerHTML = symb;
    let aux = document.querySelector("#up");
    let aux2 = document.querySelector("#down");
    aux.style.color = "red";
    aux2.style.color = "red";
  } else {
    document.querySelector("#up").innerHTML = ico;
    document.querySelector("#num").innerHTML = symb;
    document.querySelector("#down").innerHTML = ico;
  }
};
