import { useState } from "react";
import Triangle from "./Triangle";

export default function CategoryButtons() {
  const [selected, setSelected] = useState<number | null>(null);
  const buttonNames = ["난이도", "성장", "햇볕", "물"];
  // const contents = [
  //   "난이도 관련 내용",
  //   "성장 속도 관련 내용",
  //   "햇볕 관련 내용",
  //   "물주기 관련 내용",
  // ];

  const contents = [
  [<button className={`plain-button`}>어려운</button>,<button className={`plain-button`}>보통</button>,<button className={`plain-button`}>쉬운</button>],
  [<button className={`plain-button`}>빠른</button>,<button className={`plain-button`}>보통</button>,<button className={`plain-button`}>느린</button>],
  [<button className={`plain-button`}>많은</button>,<button className={`plain-button`}>보통</button>,<button className={`plain-button`}>적은</button>],
  [<button className={`plain-button`}>자주</button>,<button className={`plain-button`}>보통</button>,<button className={`plain-button`}>적게</button>],
  ]

  const handleClick = (index: number) => {
    setSelected(index === selected ? null : index);
  };

  return (
    <>
      <div className="flex flex-row mt-2 md:mt-5">
        {buttonNames.map((name, index) => (
          <button
            key={index}
            className={`primary-btn ${selected === index ? "button-clicked" : ""}`}
            onClick={() => handleClick(index)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="main-line">
        {selected !== null && (
          <div className="popup-container">
            <Triangle />
            {contents[selected]}
          </div>
        )}
      </div>
    </>
  );
}
