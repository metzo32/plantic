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
    return <div className="text-basic">Loading...</div>;
  }

  if (error) {
    return <div className="text-basic">Error</div>;
  }

  return (
    <>
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

        return (
          <Cards
            name={garden.cntntsSj}
            nameEng={garden.detailInfo?.plntbneNm || ""}
            tagLevel={level}
            tagSpeed={speed}
            tagLight={light}
            tagWater={water}
            key={`${garden.cntntsNo}-${index}`}
            imageSrc={firstImageUrl}
            altMessage={garden.plantGnrlNm}
            delay={delay}
          />
        );
      })}
      <div ref={observerRef} />
    </>
  );
};

export default GardenList;
