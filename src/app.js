/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let bttn = document.querySelector(".btn");
  let comando = () => {
    let randomItem1 = Math.floor(Math.random() * who.length);
    let randomItem2 = Math.floor(Math.random() * action.length);
    let randomItem3 = Math.floor(Math.random() * what.length);
    let randomItem4 = Math.floor(Math.random() * when.length);
    document.querySelector("#excuse").innerHTML =
      who[randomItem1] +
      " " +
      action[randomItem2] +
      " " +
      what[randomItem3] +
      " " +
      when[randomItem4];
  };

  bttn.addEventListener("click", () => {
    comando();
  });
};
