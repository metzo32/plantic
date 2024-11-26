// InputComponent.jsx
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/store";

export default function InputComponent() {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value)); // 검색어 Redux 상태 업데이트
  };

  return (
    <div className={`input-container ${isFocused ? "input-focus" : ""}`}>
      <input
        type="text"
        placeholder="검색"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleSearch} // 검색어 변경 이벤트
      />
      <button className={`text-2xl`}>
        <IoIosSearch className="text-custom500 hover:fill-green-800 " />
      </button>
    </div>
  );
}
