import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { XMLParser } from "fast-xml-parser";

interface GardenItem {
  cntntsNo: string;
  cntntsSj: string;
  rnum: number;
}

const GardenList = () => {
  const [gardenList, setGardenList] = useState<GardenItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGardenList = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await axios.get(`http://localhost:8080/http://api.nongsaro.go.kr/service/garden/gardenList?apiKey=${apiKey}&pageNo=1&numOfRows=50`);

        const parser = new XMLParser();
        const jsonData = parser.parse(response.data);

        console.log(jsonData); // JSON 구조 확인
        const items = jsonData?.response?.body?.items?.item || [];
        setGardenList(items);
      } catch (error) {
        console.error('Error fetching garden list:', error);
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
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Garden List</h1>
      <ul>
        {gardenList.map((garden: any) => (
          <li key={garden.cntntsNo}>{garden.cntntsSj}</li>
        ))}
      </ul>
    </div>
  );
};

export default GardenList;