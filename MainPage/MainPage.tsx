import React from "react";
import "./MainPage.scss";
import Burger from "@/Burger/Burger";
export default function MainPage() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1 className="main-page__title">Burger clicker</h1>
      <div className="main-page__image" onClick={() => setCount(count + 1)} >
        <Burger />
      </div>
      <p className="main-page__info">{count} clicks</p>
      <p className="main-page__about">Crypto scam</p>
    </>
  );
}
