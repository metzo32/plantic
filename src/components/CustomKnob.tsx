import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IconTemp, IconLight, IconWater } from "./Icons";

interface HumidityProps {
  tempText: string;
  temp: number;
  luxText: string;
  lux: number;
  humidityText: string;
  humidity: number;
}

export default function CustomKnob({
  tempText,
  temp,
  luxText,
  lux,
  humidityText,
  humidity,
}: HumidityProps) {
  const detailCards = [
    { icon: <IconTemp />, title: "온도", percentage: temp, text: tempText },
    { icon: <IconLight />, title: "햇볕", percentage: lux, text: luxText },
    { icon: <IconWater />, title: "물", percentage: humidity, text: humidityText },
  ];

  return (
    <>
      {detailCards.map((item, index) => (
        <div
          key={index}
          className="w-[50%] md:w-[33%] h-auto flex flex-col justify-between items-center"
        >
          <div className="detail-icon-box">{item.icon}</div>
          <div className="w-[80%] my-3 aspect-square flex items-center justify-center">
            <CircularProgressbar
              value={item.percentage}
              text={item.text}
              strokeWidth={5}
              styles={buildStyles({
                strokeLinecap: "round",
                textSize: "10px",
                pathTransitionDuration: 1,
                pathTransition: "easeInOut",
                pathColor: `#376e1d`,
                textColor: "#5fb42e",
                trailColor: "#c5eda9",
                backgroundColor: "#376e1d",
              })}
            />
          </div>
          <span className="text-lg font-light">{item.title}</span>
        </div>
      ))}
    </>
  );
}
