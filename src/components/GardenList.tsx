
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
  const [pageNum, setPageNum] = useState<number>(1);
  const observerRef = useRef<HTMLDivElement | null>(null); // 스크롤이 감지될 대상 요소를 참조

  const fetchGardenList = async () => {
    setLoading(true)
    try {
      console.log("Fetching garden list...")
      const apiKey = process.env.REACT_APP_API_KEY;

      const gardenListResponse = await axios.get(
        `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=${apiKey}&numOfRows=15&pageNum=${pageNum}`
      );

      const parser = new XMLParser();
      const gardenListJson = parser.parse(gardenListResponse.data);
      const gardenListItems = gardenListJson?.response?.body?.gardenListItems?.item || [];

      const detailedItems: GardenItemProps[] = await Promise.all(
        gardenListItems.map(async (item: any) => {
          const cntntsNo = item.cntntsNo;

          const gardenDetailResponse = await axios.get(
            `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenDtl?apiKey=${apiKey}&cntntsNo=${cntntsNo}`
          );

          const gardenDetailJson = parser.parse(gardenDetailResponse.data);
          const detailInfo: DetailInfoProps = gardenDetailJson?.response?.body?.item || {};

          const gardenFileListResponse = await axios.get(
            `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenFileList?apiKey=${apiKey}&cntntsNo=${cntntsNo}`
          );

          const gardenFileListJson = parser.parse(
            gardenFileListResponse.data
          );
          let fileList: FileItemProps[] =
            gardenFileListJson?.response?.body?.gardenListItems?.item || [];

          if (!Array.isArray(fileList)) {
            fileList = [fileList];
          }

          return {
            ...item, //기존 gardenListItems 객체 요소를 복사하고, detailInfo, fileList를 추가
            detailInfo,
            fileList,
          };
        })
      );

      setGardenList((prev) => [...prev, ...detailedItems]); // 기존 데이터에 새 아이템 추가
    } 
    catch (error) {
      console.error("Error fetching garden list:", error);
      setError("An error occurred while fetching the data.");
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(()=> {
    fetchGardenList()
  }, [])

  useEffect(() => { // 페이지 추가될 때마다 api 호출
    if (loading) return;
    fetchGardenList();
  }, [pageNum]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {  // entries: 관찰하고 있는 요소
        if (entries[0].isIntersecting && !loading) {  //로딩 중일 때 페이지를 증가시키면 중복요청이 들어가기 때문
          setLoading(true);
          setPageNum((prev) => prev + 1); // 기존 페이지에서 +1
          // 이를 통해 상위 useEffect의 pageNum이 바뀌고, fetchGardenList()가 실행
        }
      },
      { rootMargin: "200px" } //하단 1000px부터 setPageNum 실행
    );

    if (observerRef.current) {  //관찰할 대상 요소
      observer.observe(observerRef.current);
    }

    return () => {  // 클린업
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading]); //로딩 중이 아닐때만 intersectionObserver 실행

  if (loading && gardenList.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      {gardenList.map((garden) => {
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
            info={`${garden.detailInfo?.orgplceInfo}에서 자라는 식물`}
            tagLevel={level}
            tagSpeed={speed}
            tagLight={light}
            key={garden.cntntsNo}
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
