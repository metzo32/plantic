import React from "react";
import { useLocation } from "react-router-dom";
import CustomKnob from "../components/CustomKnob";
import image from "../assets/images/plant_profile_01.png";
import { ArrowLeft, ArrowRight } from "../components/Icons";

const DetailPage: React.FC = () => {
  const location = useLocation();
  const { garden } = location.state;

  return (
    <div className="detail-page">
      <div className="w-full lg:w-[61.8%] h-auto  flex flex-col justify-between">
        <h1 className="no-margin text-3xl">{garden.cntntsSj}</h1>
        <div className="knobs-container ">
          <div className="w-full flex flex-col justify-between items-center md:flex-row">
            <CustomKnob />
          </div>
          <div className="arrow-box">
            <button className="plain-button">
              <ArrowLeft />
            </button>
            <button className="plain-button">
              <ArrowRight />
            </button>
          </div>
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
