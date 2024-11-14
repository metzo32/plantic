import { useFetchGardenList } from "./hooks/useFetch";
import Cards from "./CardComponent/Cards";
import {
  LevNum01,
  LevNum02,
  LevNum03,
  LevLight01,
  LevLight02,
  LevLight03,
  LevTime01,
  LevTime02,
  LevTime03,
  LevWater01,
  LevWater02,
  LevWater03,
  LevWater04,
} from "./Icons";

const GardenList = () => {
  const { gardenList, loading, error, observerRef } = useFetchGardenList();

  if (loading && gardenList.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      {gardenList.map((garden, index) => {
        const firstImageUrl = garden.fileList?.[0]?.rtnFileUrl || "";

        const levelData = garden.detailInfo?.managelevelCodeNm;
        const level =
          levelData === "초보자" ? (
            <div className="flex">
              <LevNum01 />
              <span className="hidden">키우기 쉬워요</span>
            </div>
          ) : levelData === "경험자" ? (
            <div className="flex">
              <LevNum02 />
              <span className="hidden">키울만 해요</span>
            </div>
          ) : levelData === "전문가" ? (
            <div className="flex">
              <LevNum03 />
              <span className="hidden">키우기 어려워요</span>
            </div>
          ) : null;

        const speedData = garden.detailInfo?.grwtveCodeNm;
        const speed =
          speedData === "느림" ? (
            <div className="flex">
              <LevTime01 />
              <span className="hidden">금방 자라요</span>
            </div>
          ) : speedData === "보통" ? (
            <div className="flex">
              <LevTime02 />
              <span className="hidden">곧 자라요</span>
            </div>
          ) : speedData === "빠름" ? (
            <div className="flex">
              <LevTime03 />
              <span className="hidden">시간이 걸려요</span>
            </div>
          ) : null;

        const lightData =
          garden.detailInfo?.lighttdemanddoCodeNm?.split(" ")[0];
        const light =
          lightData === "낮은" ? (
            <div className="flex">
              <LevLight01 />
              <span className="hidden">햇볕 없이도 좋아요</span>
            </div>
          ) : lightData === "중간" ? (
            <div className="flex">
              <LevLight02 />
              <span className="hidden">햇볕이 필요해요</span>
            </div>
          ) : lightData === "높은" ? (
            <div className="flex">
              <LevLight03 />
              <span className="hidden">햇볕이 많이 필요해요</span>
            </div>
          ) : null;

          const waterData = Number(
            garden.detailInfo?.watercycleSummerCode.toString().slice(0)
          );
        const water =
          waterData === 53001 ? (
            <div className="flex">
              <LevWater01 />
              <span className="hidden">물을 매일 줘요</span>
            </div>
          ) : waterData === 53002 ? (
            <div className="flex">
              <LevWater02 />
              <span className="hidden">물을 자주 줘요</span>
            </div>
          ) : waterData === 53003 ? (
            <div className="flex">
              <LevWater03 />
              <span className="hidden">물을 가끔 줘요</span>
            </div>
          ) : waterData === 53004 ? (
            <div className="flex">
              <LevWater04 />
              <span className="hidden">물을 드물게 줘요</span>
            </div>
          ) : null;

        return (
        
            <Cards
              name={garden.cntntsSj}
              nameEng={garden.detailInfo?.plntbneNm || null}
              tagLevel={level}
              tagSpeed={speed}
              tagLight={light}
              tagWater={water}
              key={`${garden.cntntsNo}-${index}`}
              imageSrc={firstImageUrl}
              altMessage={garden.plantGnrlNm}
            />
          
        );
      })}
      <div ref={observerRef} />
    </>
  );
};

export default GardenList;
