import { useState } from "react";
import "./App.css";

// Images
import moletom__sangue from "./assets/moletom__sangue.jpg";
import moletom__morte from "./assets/moletom__morte.jpg";
import moletom__energia from "./assets/moletom__energia.jpg";
import moletom__conhecimento from "./assets/moletom__conhecimento.jpg";
import camiseta__carina from "./assets/camiseta__carina.jpg";
import camiseta__ordem from "./assets/camiseta__ordem.jpg";
import camiseta__joui from "./assets/camiseta__joui.jpg";
import camiseta__arthur from "./assets/camiseta__arthur.jpg";
import camiseta__mestre from "./assets/camiseta__mestre.jpg";
import mangalonga__carina from "./assets/mangalonga__carina.jpg";
import mangalonga__joui from "./assets/mangalonga__joui.jpg";
import mangalonga__arthur from "./assets/mangalonga__arthur.jpg";
import mangalonga__mestre from "./assets/mangalonga__mestre.jpg";
import mangalonga__kaiser from "./assets/mangalonga__kaiser.jpg";
import mangalonga__dante from "./assets/mangalonga__dante.jpg";

export function App() {
  const [moletom, setMoletom] = useState(true);
  const [camiseta, setCamiseta] = useState(true);
  const [mangalonga, setMangalonga] = useState(true);

  const filterMoletom = () => {
    setMoletom(true);
    setCamiseta(false);
    setMangalonga(false);

    if (moletom === true && camiseta === false && mangalonga === false) {
      setCamiseta(true);
      setMangalonga(true);
    }
  };

  const filterCamiseta = () => {
    setMoletom(false);
    setCamiseta(true);
    setMangalonga(false);

    if (camiseta === true && moletom === false && mangalonga === false) {
      setMoletom(true);
      setMangalonga(true);
    }
  };

  const filterMangalonga = () => {
    setMoletom(false);
    setCamiseta(false);
    setMangalonga(true);

    if (mangalonga == true && moletom === false && camiseta === false) {
      setCamiseta(true);
      setMoletom(true);
    }
  };

  return (
    <div className="application">
      <div className="photo__galery">
        <div className="filter__area">
          <button
            className={camiseta ? "filter__btn" : "filter__btn disabled__btn"}
            onClick={filterCamiseta}
          >
            Camisetas
          </button>
          <button
            className={moletom ? "filter__btn" : "filter__btn disabled__btn"}
            onClick={filterMoletom}
          >
            Moletom
          </button>
          <button
            className={mangalonga ? "filter__btn" : "filter__btn disabled__btn"}
            onClick={filterMangalonga}
          >
            Manga Longa
          </button>
        </div>
        <div className="img__area">
          <img
            className={moletom ? "moletom" : "moletom disabled"}
            src={moletom__sangue}
            alt=""
          />
          <img
            className={moletom ? "moletom" : "moletom disabled"}
            src={moletom__morte}
            alt=""
          />
          <img
            className={moletom ? "moletom" : "moletom disabled"}
            src={moletom__energia}
            alt=""
          />
          <img
            className={moletom ? "moletom" : "moletom disabled"}
            src={moletom__conhecimento}
            alt=""
          />
          <img
            className={camiseta ? "camiseta" : "camiseta disabled"}
            src={camiseta__carina}
            alt=""
          />
          <img
            className={camiseta ? "camiseta" : "camiseta disabled"}
            src={camiseta__ordem}
            alt=""
          />
          <img
            className={camiseta ? "camiseta" : "camiseta disabled"}
            src={camiseta__joui}
            alt=""
          />
          <img
            className={camiseta ? "camiseta" : "camiseta disabled"}
            src={camiseta__arthur}
            alt=""
          />
          <img
            className={camiseta ? "camiseta" : "camiseta disabled"}
            src={camiseta__mestre}
            alt=""
          />
          <img
            className={mangalonga ? "mangalonga" : "mangalonga disabled"}
            src={mangalonga__carina}
            alt=""
          />
          <img
            className={mangalonga ? "mangalonga" : "mangalonga disabled"}
            src={mangalonga__joui}
            alt=""
          />
          <img
            className={mangalonga ? "mangalonga" : "mangalonga disabled"}
            src={mangalonga__arthur}
            alt=""
          />
          <img
            className={mangalonga ? "mangalonga" : "mangalonga disabled"}
            src={mangalonga__mestre}
            alt=""
          />
          <img
            className={mangalonga ? "mangalonga" : "mangalonga disabled"}
            src={mangalonga__kaiser}
            alt=""
          />
          <img
            className={mangalonga ? "mangalonga" : "mangalonga disabled"}
            src={mangalonga__dante}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
