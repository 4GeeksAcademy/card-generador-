/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const simbolos = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let simboloElegido = simbolos[Math.floor(Math.random() * simbolos.length)];
  let numeroElegido = numeros[Math.floor(Math.random() * numeros.length)];
  let palo = document.querySelector("#palo");
  palo.innerHTML = simboloElegido;
  let cartas = document.querySelector("#cartas");
  cartas.innerHTML = numeroElegido;
  let palo2 = document.querySelector("#palo-2");
  palo2.innerHTML = simboloElegido;
};
