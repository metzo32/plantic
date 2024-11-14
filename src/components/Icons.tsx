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

import { FaQuestion } from "react-icons/fa";

export function LevNum01() {
  return (
    <span className="w-6 h-auto fill-green-700 group-hover:fill-white font-bold">1</span>
  );
}

export function LevNum02() {
  return (
    <span className="w-6 h-auto fill-green-700 group-hover:fill-white font-bold">2</span>
  );
}

export function LevNum03() {
  return (
    <span className="w-6 h-auto fill-green-700 group-hover:fill-white font-bold">3</span>
  );
}

export function LevLight01() {
  return (
    <MdSunny className="w-6 h-auto fill-green-700 group-hover:fill-white" />
  );
}

export function LevLight02() {
  return (
    <MdOutlineWbSunny className="w-6 h-auto fill-green-700 group-hover:fill-white" />
  );
}

export function LevLight03() {
  return (
    <MdCloud className="w-6 h-auto fill-green-700 group-hover:fill-white" />
  );
}

export function LevTime01() {
  return (
    <IconLevDiff01 className="w-[0.6rem] h-auto fill-green-700 group-hover:fill-white" />
  );
}

export function LevTime02() {
  return (
    <IconLevDiff02 className="w-7 h-auto mt-1 fill-green-700 group-hover:fill-white" />
  );
}

export function LevTime03() {
  return (
    <IconLevDiff03 className="w-7 h-auto fill-green-700 group-hover:fill-white" />
  );
}

export function LevWater01() {
  return (
    <IconWaterf01 className="w-5 h-auto mt-1 fill-green-700 group-hover:fill-white" />
  );
}

export function LevWater02() {
  return (
    <IconWaterf02 className="w-5 h-auto mt-1 fill-green-700 group-hover:fill-white" />
  );
}


export function LevWater03() {
  return (
    <IconWaterf03 className="w-5 h-auto mt-1 fill-green-700 group-hover:fill-white" />
  );
}


export function LevWater04() {
  return (
    <IconWaterf04 className="w-5 h-auto mt-1 fill-green-700 group-hover:fill-white" />
  );
}


export function QuestionMark() {
  return <FaQuestion />;
}
