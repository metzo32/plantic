// GardenList.jsx
import { Link } from "react-router-dom";
import { useFetchGardenList } from "./hooks/useFetch";
import Cards from "./CardComponent/Cards";
import {
  getLevelIcon,
  getSpeedIcon,
  getLightIcon,
  getWaterIcon,
} from "./RenderIcons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const GardenList = () => {
  const { gardenList, loading, error, observerRef } = useFetchGardenList();

  const searchQuery = useSelector(
    (state: RootState) => state.garden.searchQuery
  );

  const filteredGardenList = gardenList.filter(
    (garden) =>
      garden.cntntsSj.includes(searchQuery) || // 이름으로 필터링
      garden.detailInfo?.plntbneNm?.includes(searchQuery) // 영어 이름으로 필터링
  );

  if (loading && gardenList.length === 0) {
    return <h1 className="grid-error-message">Loading...</h1>;
  }

  if (error) {
    return <h1 className="grid-error-message">Error</h1>;
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
