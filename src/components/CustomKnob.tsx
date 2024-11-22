import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IconTemp, IconLight, IconWater } from "./Icons";

export default function CustomKnob() {
  const detailCards = [
    { icon: <IconTemp />, title: "온도", percentage: 75 },
    { icon: <IconLight />, title: "햇볕", percentage: 60 },
    { icon: <IconWater />, title: "물", percentage: 20 },
  ];
  const percentage = 66

  return (
    <>
      {detailCards.map((item, index) => (
        <div
          key={index}
          className="w-[33%] h-full flex flex-col justify-between items-center"
        >
          <div className="flex flex-col justify-between items-center">
            <div className="detail-icon-box">{item.icon}</div>
            <div className="w-[80%] aspect-square flex items-center justify-center">
              <CircularProgressbar
                value={item.percentage}
                text={`${item.percentage - 20}% ~ ${item.percentage}%`}
                styles={buildStyles({
                  strokeLinecap: "round",
                  textSize: "12px",
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
            <span className="text-sm text-gray-500">{item.percentage}</span>
          </div>
        </div>
      ))}
    </>
  );
}
