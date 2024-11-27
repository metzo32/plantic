import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/store";
import { useLocation } from "react-router-dom"; // 페이지 경로 감지를 위한 useLocation

export default function InputComponent() {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 로컬 상태
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation(); // 현재 페이지 경로 가져오기

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(setSearchQuery(value)); // 검색어 Redux 상태 업데이트
  };

  useEffect(() => {
    // 페이지 경로가 변경될 때 검색어 상태 초기화
    setSearchTerm("");
    dispatch(setSearchQuery("")); // Redux 상태도 초기화
  }, [location.pathname, dispatch]); // 경로가 변경될 때 실행

  return (
    <div className={`input-container ${isFocused ? "input-focus" : ""}`}>
      <input
        type="text"
        value={searchTerm} // 입력 값 바인딩
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
