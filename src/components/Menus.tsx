import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export function MenuLarge() {
  const [selectedNum, setSelectedNum] = useState<number | null>(null);
  const buttons = ["메뉴", "메뉴", "메뉴"];

  const handleClick = (index: number) => {
    setSelectedNum(index === selectedNum ? null : index);
  };

  return (
    <div className="header-menu-container">
      {buttons.map((name, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`header-button ${
            selectedNum === index ? "menu-clicked" : ""
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export function MenuSmall() {
  const [isOpened, setIsOpened] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [selectedNum, setSelectedNum] = useState<number | null>(null);
  const buttons = ["메뉴", "메뉴", "메뉴"];

  const handleOpen = () => {
    setIsOpened(!isOpened);
    setIsShow(!isShow);
  };

  const handleClick = (index: number) => {
    setSelectedNum(index === selectedNum ? null : index);
  };

  return (
    <div className="relative flex justify-center items-center lg:hidden">
      <button
        onClick={handleOpen}
        className={`menu-hamburger ${isOpened ? "button-clicked" : ""}`}
      >
        <RxHamburgerMenu className={`${isOpened ? "text-white" : ""}`} />
      </button>
      {isShow ? (
        <div className={`menu-drop ${isOpened ? "drop-show" : "drop-hide"}`}>
          {buttons.map((name, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`header-button ${
                selectedNum === index ? "menu-clicked" : ""
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
