import { useState } from "react";
import "../styles/styles.css";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-row flex-1">
      <div className="border-green rounded-full flex-[4] p-2 text-basic flex flex-row justify-between align-middle px-8 mr-5">
        <button className="header-button">버튼</button>
        <button className="header-button">버튼</button>
        <button className="header-button">버튼</button>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="검색"
          className="border-green rounded-full flex-[1] h-[100%] px-5 bg-transparent input-focus 
          placeholder-custom500 placeholder-opacity-50"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button
          className={`absolute top-1/2 right-[8%] transform -translate-y-1/2 text-2xl 
                      ${isFocused ? "text-custom700" : "text-custom500"}`}
        >
          <IoIosSearch />
        </button>
      </div>
    </div>
  );
}
