import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useFetchGardenList } from "./hooks/useFetch";
import Cards from "./CardComponent/Cards";
import {
  getLevelIcon,
  getSpeedIcon,
  getLightIcon,
  getWaterIcon,
} from "./RenderIcons";
import { ArrowLoading } from "./Icons";

const GardenList = () => {
  const { gardenList, loading, error, observerRef } = useFetchGardenList();
  const [isClicked, setIsClicked] = useState(false);

  const searchQuery = useSelector(
    (state: RootState) => state.garden.searchQuery // 이 값을 가져옴 (여기서는 Input에 입력된 문자열)
  );

  const filteredGardenList = gardenList.filter(
    (garden) =>
      garden.cntntsSj.includes(searchQuery) || // 이름으로 필터링
      garden.detailInfo?.plntbneNm?.toLowerCase().includes(searchQuery) // 영어 이름으로 필터링
  );

  const handleRefresh = () => {
    setIsClicked(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (loading && gardenList.length === 0) {
    return <h1 className="grid-error-message">Loading...</h1>;
  }

  if (error) {
    return (
      <div className="grid-error-message">
        <h1>Error</h1>
        <button
          className={`group primary-btn ${isClicked ? "button-clicked" : ""}`}
          onClick={handleRefresh}
        >
          {isClicked ? <ArrowLoading /> : "새로고침"}
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid-container">
        {filteredGardenList.length === 0 ? (
          <h1 className="grid-error-message">결과가 없습니다.</h1>
        ) : (
          filteredGardenList.map((garden, index) => {
            const firstImageUrl = garden.fileList?.[0]?.rtnFileUrl || "";

            const level = getLevelIcon(garden.detailInfo?.managelevelCodeNm);
            const speed = getSpeedIcon(garden.detailInfo?.grwtveCodeNm);
            const light = getLightIcon(
              garden.detailInfo?.lighttdemanddoCodeNm?.split(" ")[0]
            );
            const water = getWaterIcon(
              Number(garden.detailInfo?.watercycleSummerCode?.toString())
            );

            const delay = (index % 3) * 0.5;

            const uniqueKey = `${garden.cntntsNo}-${index}`;

            return (
              <Link
                key={uniqueKey}
                to={`/detail/${uniqueKey}`}
                state={{ garden }}
                title="자세히 보기"
              >
                <Cards
                  name={garden.cntntsSj}
                  nameEng={garden.detailInfo?.plntbneNm || ""}
                  tagLevel={level}
                  tagSpeed={speed}
                  tagLight={light}
                  tagWater={water}
                  key={uniqueKey}
                  info={garden.detailInfo?.orgplceInfo}
                  imageSrc={firstImageUrl}
                  altMessage={garden.plantGnrlNm}
                  delay={delay}
                />
              </Link>
            );
          })
        )}
      </div>
      <div ref={observerRef} />
    </>
  );
};

export default GardenList;
