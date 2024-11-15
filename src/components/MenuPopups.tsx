import { useState } from "react";

export default function MenuPopups() {
  const buttonNames = ["쉬움", "보통", "어려움"];
  const [selected, setSelected] = useState(null);
  const handleClick = (name: any) => {
    setSelected(name === selected ? null : name);
  };

  return (
    <div className="popup-container">
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
  );
}
