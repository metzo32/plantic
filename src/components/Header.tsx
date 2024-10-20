import { useState } from "react";
import "../styles/styles.css";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-[1] flex-row">
      <div className="hidden lg:flex header flex-[4] mr-5">
        <button className="header-button">버튼</button>
        <button className="header-button">버튼</button>
        <button className="header-button">버튼</button>
      </div>

      <div className="relative flex-[1]">
        <input
          type="text"
          placeholder="검색"
          className="w-[100%] header input-focus
          placeholder-custom500 placeholder-opacity-50"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <button
          className={`absolute top-1/2 right-[20px] transform -translate-y-1/2 text-2xl 
                      ${isFocused ? "text-custom700" : "text-custom500"}`}
        >
          <IoIosSearch />
        </button>
      </div>

      <button className="button-menu flex justify-center items-center lg:hidden">
        <RxHamburgerMenu />
      </button>
    </div>
  );
}
