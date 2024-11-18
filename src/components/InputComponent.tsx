import { useState } from "react";
import { IoIosSearch } from "react-icons/io";


export default function InputComponent() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`input-container ${isFocused ? "input-focus" : ""}`}>
      <input
        type="text"
        placeholder="검색"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <button className={`text-2xl`}>
        <IoIosSearch className="text-custom500 hover:fill-green-800 " />
      </button>
    </div>
  );
}
