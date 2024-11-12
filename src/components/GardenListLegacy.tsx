import { useEffect, useState } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import Cards from "./CardComponent/Cards";

interface GardenItem {
  familyKorNm: string;
  cntntsSj: string;
  rnum: number;
  imgUrl: string;
  plantGnrlNm: string;
}

const GardenListLegacy = () => {
  const [gardenList, setGardenList] = useState<GardenItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGardenList = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await axios.get(
          // `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=${apiKey}&pageNo=1&numOfRows=50`
          `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenDtl?apiKey=${apiKey}&cntntsNo=${50}`
        );

        console.log("원본 XML 데이터:", response.data);
        
        const parser = new XMLParser();
        const jsonData = parser.parse(response.data);

        console.log(jsonData); // JSON 구조 확인

        const items = jsonData?.response?.body?.items?.item || [];
        console.log("아이템 구조", items); // 각 item의 구조 확인

        setGardenList(items);

      } 
      catch (error) {
        console.error("Error fetching garden list:", error);
        setError("An error occurred while fetching the data.");
      } 
      finally {
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
      {gardenList.map((garden: any, index: number) => {
        const firstImageUrl = garden.rtnFileUrl.split("|")[0];
        return (
          <Cards
            name={garden.cntntsSj}
            key={index}
            imageSrc={firstImageUrl}
            altMessage={garden.plantGnrlNm}
          />
        );
      })}
    </>
  );
};

export default GardenListLegacy;
