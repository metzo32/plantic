import { useState } from "react";
import Triangle from "./Triangle";

export default function CategoryButtons() {
  const [selected, setSelected] = useState<number | null>(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null
  ); // 현재 선택된 내부 버튼 상태
  const [animationKey, setAnimationKey] = useState(0); // 애니메이션 키

  const buttonNames = ["난이도", "성장", "햇볕", "물"];
  const contentOptions = [
    ["어려운", "보통", "쉬운"],
    ["빠른", "보통", "느린"],
    ["많은", "보통", "적은"],
    ["자주", "보통", "적게"],
  ];

  const handleCategoryChange = (index: number) => {
    setSelected(index === selected ? null : index);
    setActiveButtonIndex(null); // 내부 버튼 상태 초기화
    setAnimationKey((prevKey) => prevKey + 1); // 애니메이션 재실행을 위한 키 업데이트
  };

  const handleContentButtonClick = (buttonIndex: number) => {
    setActiveButtonIndex(
      buttonIndex === activeButtonIndex ? null : buttonIndex
    );
  };

  const renderContentButtons = (options: string[]) =>
    options.map((label, idx) => (
      <button
        key={idx}
        onClick={() => handleContentButtonClick(idx)}
        className={`plain-button ${
          activeButtonIndex === idx ? "plain-underline-clicked" : ""
        }`}
      >
        {label}
      </button>
    ));

  return (
    <>
      <div className="flex flex-row mt-2 md:mt-5">
        {buttonNames.map((name, index) => (
          <label key={index} className="flex items-center cursor-pointer mr-4">
            <input
              type="radio"
              name="category"
              value={index}
              checked={selected === index}
              onChange={() => handleCategoryChange(index)}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => handleCategoryChange(index)}
              className={`primary-btn ${
                selected === index ? "button-clicked" : ""
              }`}
            >
              {name}
            </button>
          </label>
        ))}
      </div>

      <div className="main-line">
        {selected !== null && (
          <div
            key={animationKey} // React가 DOM을 다시 렌더링하도록 강제
            className="popup-container"
          >
            <Triangle />
            {renderContentButtons(contentOptions[selected])}
          </div>
        )}
      </div>
    </>
  );
}
