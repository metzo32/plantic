import React from "react";
import { useLocation } from "react-router-dom";
import CustomKnob from "../components/CustomKnob";
import image from "../assets/images/plant_profile_01.png";

const DetailPage: React.FC = () => {
  const location = useLocation();
  const { garden } = location.state;

  return (
    <div className="detail-page">
      <div className="knobs-container ">
        <h2 className="no-margin">{garden.cntntsSj}</h2>
        <div className="w-full h-auto flex justify-between items-center">
          <CustomKnob />
        </div>
        <div className="w-full flex justify-center items-center">
          <button>화살표</button>
          <button>화살표</button>
        </div>
      </div>
      <div className="detail-img-container">
        <img src={image} alt="profile" className="" />
      </div>
      {/* <img
        src={garden.imgUrl}
        alt={garden.plantGnrlNm}
        className="detail-img"
      />
     <h1>{garden.cntntsSj}</h1>
      <p>과명: {garden.familyKorNm}</p>
      <p>일반명: {garden.plantGnrlNm}</p>
      <p>관리 수준: {garden.detailInfo?.managelevelCodeNm}</p>
      <p>성장 속도: {garden.detailInfo?.grwtveCodeNm}</p>
      <p>빛 요구량: {garden.detailInfo?.lighttdemanddoCodeNm}</p>
      <p>여름 물 주기: {garden.detailInfo?.watercycleSummerCodeNm}</p>
      <img src={garden.imgUrl} alt={garden.plantGnrlNm} className="card-image" /> */}
    </div>
  );
};

export default DetailPage;
