import { useLocation } from "react-router-dom";
import CustomKnob from "../components/CustomKnob";

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
      <div className="w-[90%] flex flex-col justify-between">
        <h1 className="no-margin text-xl md:text-3xl">{garden.cntntsSj}</h1>
        <div className="knobs-container">
          <div className="w-full flex flex-col justify-between items-center md:flex-row gap-5">
            <CustomKnob
              tempText={tempText}
              temp={temp}
              luxText={luxText}
              lux={lux}
              humidityText={humidityText}
              humidity={humidity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
