import { useState } from "react";
import MenuPopups from "./MenuPopups";
import Triangle from "./Triangle";

export default function CategoryButtons() {
  const [selected, setSelected] = useState<string | null>(null);
  const buttonNames = ["난이도", "성장 속도", "햇볕", "물주기"];

  const handleClick = (name: string) => {
    setSelected(name === selected ? null : name);
  };

  return (
    <>
      <div className="flex flex-row overflow-x-scroll mt-2 md:mt-5">
        {buttonNames.map((name) => (
          <button
            key={name}
            className={`button ${selected === name ? "button-clicked" : ""}`}
            onClick={() => handleClick(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="main-line">
        {selected === "난이도" && (
          <div className="popup-container">
           <Triangle/>
            난이도 관련 내용
          </div>
        )}
        {selected === "성장 속도" && (
          <div className="popup-container">
           <Triangle/>
            성장 속도 관련 내용
          </div>
        )}
        {selected === "햇볕" && (
          <div className="popup-container">
           <Triangle/>
            햇볕 관련 내용
          </div>
        )}
        {selected === "물주기" && (
          <div className="popup-container">
           <Triangle/>
            물주기 관련 내용
          </div>
        )}
      </div>
    </>
  );
}
