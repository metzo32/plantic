import { useState } from "react";


export default function CustomKnob() {
  return (
    <div className="w-[30%] h-full flex flex-col justify-evenly items-center bg-custom100">
      <span>아이콘</span>
      <span className="max-w-full h-1/2 aspect-square bg-pink-300">그래프</span>
      <span>제목</span>
      <span>퍼센티지</span>
    </div>
  );
}

// export function knobData() {
//     const knobsValue = [
//         {icon : "", value: 1, title: "", percentage: {`${value}%`}}
//     ]
//   return <div></div>;
// }
