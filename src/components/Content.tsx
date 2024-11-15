import { useState } from "react";
import GardenList from "./GardenList";
import MenuPopups from "./MenuPopups";

export default function Content() {
  const buttonNames = ["난이도", "성장 속도", "햇볕", "물주기"];
  const [selected, setSelected] = useState(null);

  const handleClick = (name: any) => {
    setSelected(name === selected ? null : name);
  };

  return (
    <div>
      <h1 className="title mt-[6.5rem]">Plantic</h1>

      <hr className="hr md:hidden" />

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
        <MenuPopups/>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-between mt-11">
        <GardenList />
      </div>

      {/* Conditionally rendered div based on selected button */}
      <div className="mt-6">
        {selected === "난이도" && <div>난이도 관련 내용</div>}
        {selected === "성장 속도" && <div>성장 속도 관련 내용</div>}
        {selected === "햇볕" && <div>햇볕 관련 내용</div>}
        {selected === "물주기" && <div>물주기 관련 내용</div>}
      </div>
    </div>
  );
}
