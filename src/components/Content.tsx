import { useState } from "react";
import "../styles/styles.css";
import Cards from "./Cards/Cards";

export default function Content() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };



  return (
    <div>
      <h1 className="title mt-[6.5rem]">Plantic</h1>

      <hr className="hr md:hidden" />

      <div className="flex flex-row overflow-x-scroll mt-2 md:mt-5">
        <button
          className={`button
            ${isClicked ? "button-clicked" : ""}`}
          onClick={handleClick}
        >
          버튼
        </button>
        <button
          className={`button
            ${isClicked ? "button-clicked" : ""}`}
          onClick={handleClick}
        >
          버튼
        </button>
        <button
          className={`button
            ${isClicked ? "button-clicked" : ""}`}
          onClick={handleClick}
        >
          버튼
        </button>
        <button
          className={`button
            ${isClicked ? "button-clicked" : ""}`}
          onClick={handleClick}
        >
          버튼
        </button>

       
      </div>

      <hr className="hr" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-between mt-11">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
