import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
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
} from "./Icons";

interface FileItemProps {
  rtnFileUrl: string;
}

interface DetailInfoProps {
  managelevelCodeNm?: string;
  grwtveCodeNm?: string;
  lighttdemanddoCodeNm?: string;
  plntbneNm?: string;
  orgplceInfo?: string;
}

interface GardenItemProps {
  familyKorNm: string;
  cntntsSj: string;
  rnum: number;
  imgUrl: string;
  plantGnrlNm: string;
  cntntsNo: string;
  detailInfo?: DetailInfoProps;
  fileList?: FileItemProps[];
}

const GardenList = () => {
  const [gardenList, setGardenList] = useState<GardenItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageNo, setPageNo] = useState<number>(1); // pageNum 대신 pageNo 사용
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchGardenList = async () => {
    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_API_KEY;

      // pageNo와 numOfRows를 사용하여 API 호출
      const gardenListResponse = await axios.get(
        `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=${apiKey}&numOfRows=15&pageNo=${pageNo}`
      );

      const parser = new XMLParser();
      const gardenListJson = parser.parse(gardenListResponse.data);
      const gardenListItems = gardenListJson?.response?.body?.items?.item || [];

      console.log("1번", gardenListItems)

      const detailedItems: GardenItemProps[] = await Promise.all(
        gardenListItems.map(async (item: any) => {
          const cntntsNo = item.cntntsNo;

          const gardenDetailResponse = await axios.get(
            `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenDtl?apiKey=${apiKey}&cntntsNo=${cntntsNo}`
          );

          const gardenDetailJson = parser.parse(gardenDetailResponse.data);
          const detailInfo: DetailInfoProps = gardenDetailJson?.response?.body?.item || {};

          console.log("2번", detailInfo)

          const gardenFileListResponse = await axios.get(
            `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenFileList?apiKey=${apiKey}&cntntsNo=${cntntsNo}`
          );

          const gardenFileListJson = parser.parse(gardenFileListResponse.data);
          let fileList: FileItemProps[] =
            gardenFileListJson?.response?.body?.items?.item || [];

            console.log("3번", fileList)
          if (!Array.isArray(fileList)) {
            fileList = [fileList];
          }

          return {
            ...item,
            detailInfo,
            fileList,
          };
        })
      );

      setGardenList((prev) => [...prev, ...detailedItems]);
    } catch (error) {
      console.error("Error fetching garden list:", error);
      setError("An error occurred while fetching the data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGardenList();
  }, [pageNo]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPageNo((prev) => prev + 1); // 페이지 번호 증가
        }
      },
      { rootMargin: "200px" }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading]);

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

        const lightData = garden.detailInfo?.lighttdemanddoCodeNm?.split(" ")[0];
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

        return (
          <Cards
            name={garden.cntntsSj}
            nameEng={garden.detailInfo?.plntbneNm || null}
            tagLevel={level}
            tagSpeed={speed}
            tagLight={light}
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
