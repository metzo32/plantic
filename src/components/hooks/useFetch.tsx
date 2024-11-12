import { useEffect, useState } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";

interface GardenItem {
  familyKorNm: string;
  cntntsSj: string;
  rnum: number;
  imgUrl: string;
  plantGnrlNm: string;
}

const useFetchGardenList = () => {
  const [gardenList, setGardenList] = useState<GardenItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGardenList = async () => {
      try {
        const cachedData = localStorage.getItem("gardenList");
        if (cachedData) {
          setGardenList(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await axios.get(
          `http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=${apiKey}&pageNo=1&numOfRows=50`
        );

        const parser = new XMLParser();
        const jsonData = parser.parse(response.data);
        const items = jsonData?.response?.body?.items?.item || [];

        setGardenList(items);
        localStorage.setItem("gardenList", JSON.stringify(items)); // 데이터 캐싱
      } catch (error) {
        console.error("Error fetching garden list:", error);
        setError("데이터를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchGardenList();
  }, []);

  return { gardenList, loading, error };
};

export default useFetchGardenList;
