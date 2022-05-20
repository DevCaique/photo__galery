import { useState } from "react";
import "./App.css";

// Images
import moletom__sangue from "./assets/moletom__sangue.jpg";
import moletom__morte from "./assets/moletom__morte.jpg";
import moletom__energia from "./assets/moletom__energia.jpg";
import moletom__conhecimento from "./assets/moletom__conhecimento.jpg";
import camisa__carina from "./assets/camisa__carina.jpg";
import camisa__ordem from "./assets/camisa__ordem.jpg";
import camisa__joui from "./assets/camisa__joui.jpg";
import camisa__arthur from "./assets/camisa__arthur.jpg";
import camisa__mestre from "./assets/camisa__mestre.jpg";
import mangalonga__carina from "./assets/mangalonga__carina.jpg";
import mangalonga__joui from "./assets/mangalonga__joui.jpg";
import mangalonga__arthur from "./assets/mangalonga__arthur.jpg";
import mangalonga__mestre from "./assets/mangalonga__mestre.jpg";
import mangalonga__kaiser from "./assets/mangalonga__kaiser.jpg";
import mangalonga__dante from "./assets/mangalonga__dante.jpg";

export function App() {
  const [moletom, setMoletom] = useState(true);
  const [camisa, setCamisa] = useState(true);
  const [mangalonga, setMangalonga] = useState(true);

  const filterMoletom = () => {
    setMoletom(true);
    setCamisa(false);
    setMangalonga(false);

    if (moletom === true && camisa === false && mangalonga === false) {
      setCamisa(true);
      setMangalonga(true);
    }
  };

  const filterCamisa = () => {
    setMoletom(false);
    setCamisa(true);
    setMangalonga(false);

    if (camisa === true && moletom === false && mangalonga === false) {
      setMoletom(true);
      setMangalonga(true);
    }
  };

  const filterMangalonga = () => {
    setMoletom(false);
    setCamisa(false);
    setMangalonga(true);

    if (mangalonga == true && moletom === false && camisa === false) {
      setCamisa(true);
      setMoletom(true);
    }
  };

  return (
    <div className="application">
      <div className="photo__galery">
        <div className="filter__area">
          <button className="filter__btn" onClick={filterCamisa}>
            Camisetas
          </button>
          <button className="filter__btn" onClick={filterMoletom}>
            Moletom
          </button>
          <button className="filter__btn" onClick={filterMangalonga}>
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
            className={camisa ? "camisa" : "camisa disabled"}
            src={camisa__carina}
            alt=""
          />
          <img
            className={camisa ? "camisa" : "camisa disabled"}
            src={camisa__ordem}
            alt=""
          />
          <img
            className={camisa ? "camisa" : "camisa disabled"}
            src={camisa__joui}
            alt=""
          />
          <img
            className={camisa ? "camisa" : "camisa disabled"}
            src={camisa__arthur}
            alt=""
          />
          <img
            className={camisa ? "camisa" : "camisa disabled"}
            src={camisa__mestre}
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
