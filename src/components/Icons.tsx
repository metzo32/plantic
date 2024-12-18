import { ReactComponent as IconLevDiff01 } from "../assets/svg/level_diff_01.svg";
import { ReactComponent as IconLevDiff02 } from "../assets/svg/level_diff_02.svg";
import { ReactComponent as IconLevDiff03 } from "../assets/svg/level_diff_03.svg";

import { ReactComponent as IconWaterf01 } from "../assets/svg/water_01.svg"
import { ReactComponent as IconWaterf02 } from "../assets/svg/water_02.svg"
import { ReactComponent as IconWaterf03 } from "../assets/svg/water_03.svg"
import { ReactComponent as IconWaterf04 } from "../assets/svg/water_04.svg"

import { MdSunny } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdCloud } from "react-icons/md";

import { ReactComponent as IconTemperature } from "../assets/svg/icon_temp.svg"
import { ReactComponent as IconLightLarge } from "../assets/svg/icon_light.svg"
import { ReactComponent as IconWaterLarge } from "../assets/svg/icon_water.svg"

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { LuRefreshCw } from "react-icons/lu";

import { FaQuestion } from "react-icons/fa";



export function LevNum01() {
  return (
    <span className="icon-general levelIcon">1</span>
  );
}

export function LevNum02() {
  return (
    <span className="icon-general levelIcon">2</span>
  );
}

export function LevNum03() {
  return (
    <span className="icon-general levelIcon">3</span>
  );
}

export function LevLight01() {
  return (
    <MdCloud className="icon-general w-6 h-auto" />
  );
}

export function LevLight02() {
  return (
    <MdOutlineWbSunny className="icon-general w-6 h-auto" />
  );
}

export function LevLight03() {
  return (
    <MdSunny className="icon-general w-6 h-auto" />
  );
}

export function LevTime01() {
  return (
    <IconLevDiff01 className="icon-general w-[0.6rem] h-auto" />
  );
}

export function LevTime02() {
  return (
    <IconLevDiff02 className="icon-general w-7 h-auto mt-1" />
  );
}

export function LevTime03() {
  return (
    <IconLevDiff03 className="icon-general w-7 h-auto" />
  );
}

export function LevWater01() {
  return (
    <IconWaterf01 className="icon-general waterIcon" />
  );
}

export function LevWater02() {
  return (
    <IconWaterf02 className="icon-general waterIcon" />
  );
}


export function LevWater03() {
  return (
    <IconWaterf03 className="icon-general waterIcon" />
  );
}


export function LevWater04() {
  return (
    <IconWaterf04 className="icon-general waterIcon" />
  );
}

export function IconTemp() {
  return (
    <IconTemperature className="icon-general h-full" />
  )
}

export function IconLight() {
  return (
    <IconLightLarge className="icon-general h-full" />
  );
}

export function IconWater() {
  return (
    <IconWaterLarge className="icon-general h-full" />
  );
}

export function ArrowLeft() {
  return (
    <IoIosArrowBack className="icon-general"/>
  );
}

export function ArrowRight() {
  return (
    <IoIosArrowForward className="icon-general"/>
  );
}

export function ArrowLoading() {
  return(
    <LuRefreshCw className="icon-refresh"/>
  )
}

export function QuestionMark() {
  return <FaQuestion />;
}
