import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage: React.FC = () => {
  const location = useLocation();
  const { garden } = location.state;

  return (
    <div className="detail-page border h-[80%] border-red-600 mt-4 sm:mt-8">
      <div className="absolute bottom-0 left-0 w-full h-[38.2%] bg-custom100 rounded-tl-[120px]">
        <div className="relative w-full h-full border border-blue-700 p-[100px]">
        <button className="w-[100px] aspect-square absolute top-0 left-0 transfrom translate-x-full -translate-y-1/2 border border-blue-700 rounded-full">하트</button>
        <h1 className="h2">세부사항</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
