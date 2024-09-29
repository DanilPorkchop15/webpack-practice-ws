import React from "react";

import "./Burger.scss";
import burger from "~/assets/img/burger.png";


export default function Burger() {
  React.useEffect(() => {
    const burger = document.querySelector(".burger");

    burger?.addEventListener("dragstart", (event) => {
      event?.preventDefault();
    })
  }, [])

  return  <img className="burger" src={burger} alt="burger"/>
}