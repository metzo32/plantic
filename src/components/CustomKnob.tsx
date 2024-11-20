import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaTemperatureHalf } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import { IconTemp } from "./Icons";
import { easeIn, easeInOut } from "framer-motion";

export default function CustomKnob() {
  const detailCards = [
    { icon: <FaTemperatureHalf />, title: "온도", percentage: 75 },
    { icon: <MdOutlineWbSunny />, title: "햇볕", percentage: 60 },
    { icon: <IoWaterOutline />, title: "물", percentage: 20 },
  ];
  const percentage = 66

  return (
    <>
      {detailCards.map((item, index) => (
        <div
          key={index}
          className="w-[33%] h-full flex flex-col justify-evenly items-center"
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="text-3xl text-custom500">{item.icon}</div>
            <span className="max-w-full h-1/2 aspect-square flex items-center justify-center">
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
            
            </span>
            <span className="text-lg font-semibold">{item.title}</span>
            <span className="text-sm text-gray-500">{item.percentage}</span>
          </div>
        </div>
      ))}
    </>
  );
}
