import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage: React.FC = () => {
  const location = useLocation();
//   const { garden } = location.state;

  return (
    <div className="detail-page border h-[80%] border-red-600 mt-4 sm:mt-8">
      
    </div>
  );
};

export default DetailPage;
