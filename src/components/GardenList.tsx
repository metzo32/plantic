import { Link } from "react-router-dom";
import { useFetchGardenList } from "./hooks/useFetch";
import Cards from "./CardComponent/Cards";
import {
  getLevelIcon,
  getSpeedIcon,
  getLightIcon,
  getWaterIcon,
} from "./RenderIcons";

const GardenList = () => {
  const { gardenList, loading, error, observerRef } = useFetchGardenList();

  if (loading && gardenList.length === 0) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
    <div className="grid-container">
      {gardenList.map((garden, index) => {
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

        const uniqueKey = `${garden.cntntsNo}-${index}`

        return (
           <Link key={uniqueKey} to={`/detail/${uniqueKey}`} state={{ garden }} title="자세히 보기">
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
      })}
      <div ref={observerRef} />
      </div>
    </>
  );
};

export default GardenList;
