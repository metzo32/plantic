import { useEffect, useState } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import Cards from "./CardComponent/Cards";
import {LevNum01, LevNum02, LevNum03, LevTime01, LevTime02, LevTime03, LevLight01, LevLight02, LevLight03 } from "./Icons";

interface GardenItem {
  familyKorNm: string;
  cntntsSj: string;
  rnum: number;
  imgUrl: string;
  plantGnrlNm: string;
}

const GardenList = () => {
  const [gardenList, setGardenList] = useState<GardenItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageNo, setPageNo] = useState<number>(1);

  useEffect(() => {
    const fetchGardenList = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;

        // 실내정원용 식물 목록
        const gardenListResponse = await axios.get(
          `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=${apiKey}&numOfRows=15&pageNo=${pageNo}`
        );

        const parser = new XMLParser();
        const gardenListJson = parser.parse(gardenListResponse.data);

        const items = gardenListJson?.response?.body?.items?.item || [];

        // 각 식물의 상세 정보와 첨부파일 목록 가져오기
        const detailedItems = await Promise.all(
          items.map(async (item: any) => {
            const cntntsNo = item.cntntsNo; // 컨텐츠 번호

            // 실내정원용 식물 상세
            const gardenDetailResponse = await axios.get(
              `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenDtl?apiKey=${apiKey}&cntntsNo=${cntntsNo}`
            );

            const gardenDetailJson = parser.parse(gardenDetailResponse.data);
            const detailInfo = gardenDetailJson?.response?.body?.item;

            // 실내정원용 식물 첨부파일 목록
            const gardenFileListResponse = await axios.get(
              `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenFileList?apiKey=${apiKey}&cntntsNo=${cntntsNo}`
            );

            const gardenFileListJson = parser.parse(
              gardenFileListResponse.data
            );
            let fileList =
              gardenFileListJson?.response?.body?.items?.item || [];

            // fileList가 객체일 때 배열로 변환
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

        setGardenList(detailedItems);
      } catch (error) {
        console.error("Error fetching garden list:", error);
        setError("An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    };

    fetchGardenList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      {gardenList.map((garden: any) => {
        // 첫 번째 이미지 URL을 가져오기
        const firstImageUrl = garden.fileList[0]?.rtnFileUrl || "";
        console.log("이미지주소", garden.fileList);
        console.log("가공된 이미지주소", firstImageUrl);

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
          <>
            <Cards
              name={garden.cntntsSj}
              nameEng={garden.detailInfo?.plntbneNm || null}
              info={"에서 자라는 식물"}
              tagLevel={level}
              tagSpeed={speed}
              key={garden.cntntsNo}
              imageSrc={firstImageUrl}
              altMessage={garden.plantGnrlNm}
            />
          </>
        );
      })}
    </>
  );
};

export default GardenList;