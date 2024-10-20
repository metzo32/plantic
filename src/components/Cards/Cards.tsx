import React from "react";
import "../../styles/styles.css";
import image from '../../assets/images/test.jpg'

export default function Cards() {
    

  return (
    <div className={`card-container`}>
      <div className="flex flex-row mb-[2%] mt-[4%]">
        <button className="button">태그</button>
        <button className="button">태그</button>
      </div>

      <h2 className="h2 mb-[1%] mt-[3%]">베고니아</h2>
      <h3 className="h3 mb-[1%]">열대계절 어쩌고 식물이 다육이가 어쩌고</h3>
      <h4 className="h4 my-[3%]">특징을 열거한 문자열의 모음 식물이 어떻게 자라나는지 간략한 설명</h4>
      <img src={image} alt="이미지" className="card-image"/>
    </div>
  );
}
