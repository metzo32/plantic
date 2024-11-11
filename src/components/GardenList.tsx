import { useEffect, useState } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import Cards from "./Cards/Cards";

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

  useEffect(() => {
    const fetchGardenList = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;

        // 실내정원용 식물 목록
        const gardenListResponse = await axios.get(
          `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=${apiKey}&numOfRows=10&pageNo=1`
        );

        const parser = new XMLParser();
        const gardenListJson = parser.parse(gardenListResponse.data);

        const items = gardenListJson?.response?.body?.items?.item || [];
        console.log("새 아이템 구조", items);

        // 각 식물의 상세 정보와 첨부파일 목록 가져오기
        const detailedItems = await Promise.all(
          items.map(async (item: any) => {
            const cntntsNo = item.cntntsNo; //컨텐츠 번호

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
            const fileList =
              gardenFileListJson?.response?.body?.items?.item || [];

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
console.log("리스트", gardenList)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      {gardenList.map((garden: any) => {
        const firstImageUrl = garden.fileList[0]?.rtnFileUrl || ""; // 첫 번째 이미지 URL 사용
        return (
          <>
       <div>
            <p>식물학 명: {garden.detailInfo?.plntbneNm}</p>
            <p>
            유통 명: {garden.detailInfo?.distbNm ? garden.detailInfo.distbNm.split(",")[0] : "이름 없음"}
            </p>
            <p>
            이름: {garden.detailInfo?.cntntsSj}
            </p>


            <p>과 코드명: {garden.detailInfo?.fmlCodeNm}</p>
            <p>원산지 정보: {garden.detailInfo?.orgplceInfo}</p>

            <p>관리 수준 코드: {garden.detailInfo?.managelevelCode}</p>
            <p>관리 수준 코드명: {garden.detailInfo?.managelevelCodeNm}</p>
            <p>생장 속도 코드명: {garden.detailInfo?.grwtveCodeNm}</p>
            <p>생육 온도 코드명: {garden.detailInfo?.grwhTpCodeNm}</p>
            <p>
                물주기 봄 코드: {garden.detailInfo?.watercycleSprngCode === "관수함" 
                ? "물을 뿌려주세요" 
                : garden.detailInfo?.watercycleSprngCode}
            </p>
            <p>물주기 봄 코드명: {garden.detailInfo?.watercycleSprngCodeNm}</p>
            <p>물주기 여름 코드: {garden.detailInfo?.watercycleSummerCode}</p>
            <p>물주기 여름 코드명: {garden.detailInfo?.watercycleSummerCodeNm}</p>
            <p>물주기 가을 코드: {garden.detailInfo?.watercycleAutumnCode}</p>
            <p>물주기 가을 코드명: {garden.detailInfo?.watercycleAutumnCodeNm}</p>
            <p>물주기 겨울 코드: {garden.detailInfo?.watercycleWinterCode}</p>
            <p>물주기 겨울 코드명: {garden.detailInfo?.watercycleWinterCodeNm}</p>
            
            <p>광요구도 코드명: {garden.detailInfo?.lighttdemanddoCodeNm}</p>
  
            <p>배치 장소 코드명: {garden.detailInfo?.postngplaceCodeNm}</p>

          </div>

            <Cards
              name={garden.cntntsSj}
              nameEng={garden.detailInfo?.plntbneNm || null}
              info={`${garden.detailInfo?.orgplceInfo}에서 자라는 식물`}
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
