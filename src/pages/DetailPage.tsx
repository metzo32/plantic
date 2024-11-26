import { useLocation } from "react-router-dom";
import CustomKnob from "../components/CustomKnob";
import image from "../assets/images/plant_profile_01.png";
import { ArrowLeft, ArrowRight } from "../components/Icons";

const DetailPage = () => {
  const location = useLocation();
  const { garden } = location.state;

  const tempText = garden.detailInfo?.winterLwetTpCodeNm;
  const temp = Number(tempText.split("℃")[0]) + 1;
  const luxText = garden.detailInfo?.lighttdemanddoCodeNm
    .match(/\((.*?)\)/)?.[1]
    .replace(/,/g, "");

  function calculateLuxAverage(luxText: string) {
    const numbers = luxText.match(/\d+/g)?.map(Number) || [];

    if (numbers.length === 0) return 0;

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    const average = (min + max) / 200 - 1;

    return average;
  }

  const lux = calculateLuxAverage(luxText);

  const humidityText = garden.detailInfo?.hdCodeNm;

  const numbers = humidityText.replace(/[^0-9~]/g, "").split("~").map(Number);
  const humidity = numbers.length === 2 ? (numbers[0] + numbers[1]) / 2 : numbers[0];
  
  
  return (
    <div className="detail-page">
      <div className="w-full lg:w-[61.8%] h-auto  flex flex-col justify-between">
        <h1 className="no-margin text-3xl">{garden.cntntsSj}</h1>
        <div className="knobs-container ">
          <div className="w-full flex flex-col justify-between items-center md:flex-row">
            <CustomKnob
              tempText={tempText}
              temp={temp}
              luxText={luxText}
              lux={lux}
              humidityText={humidityText}
              humidity={humidity}
            />
          </div>
          {/* <div className="arrow-box">
            <button className="plain-button">
              <ArrowLeft />
            </button>
            <button className="plain-button">
              <ArrowRight />
            </button>
          </div> */}
        </div>
      </div>
      {/* <div className="detail-img-container">
        <img src={image} alt="profile" className="" />
      </div> */}
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

      <p>습도 코드명: {garden.detailInfo?.hdCodeNm}</p>
      <img src={garden.imgUrl} alt={garden.plantGnrlNm} className="card-image" /> */}
    </div>
  );
};

export default DetailPage;
