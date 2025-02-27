import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";

interface FileItemProps {
  rtnFileUrl: string;
}

interface DetailInfoProps {
  managelevelCodeNm?: string;
  grwtveCodeNm?: string;
  lighttdemanddoCodeNm?: string;
  plntbneNm?: string;
  orgplceInfo?: string;
  watercycleSummerCode: number;
  watercycleSummerCodeNm: string;
}

export interface GardenItemProps {
  familyKorNm: string;
  cntntsSj: string;
  rnum: number;
  imgUrl: string;
  plantGnrlNm: string;
  cntntsNo: string;
  detailInfo?: DetailInfoProps;
  fileList?: FileItemProps[];
}

export const useFetchGardenList = () => {
  const [gardenList, setGardenList] = useState<GardenItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pageNo, setPageNo] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const isFetching = useRef(false); // ✅ 중복 요청 방지

  const fetchGardenList = useCallback(async () => {
    if (loading || !hasMore || isFetching.current) return;
    isFetching.current = true; // ✅ 요청 시작
    setLoading(true);

    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const url = process.env.REACT_APP_PROXY_URL;
      const parser = new XMLParser();

      // ✅ API 요청 (한 번에 9개씩)
      const gardenListResponse = await axios.get(
        `${url}/gardenList?apiKey=${apiKey}&numOfRows=9&pageNo=${pageNo}`
      );

      const gardenListJson = parser.parse(gardenListResponse.data);
      const gardenListItems = gardenListJson?.response?.body?.items?.item || [];

      if (gardenListItems.length === 0) {
        setHasMore(false); // ✅ 더 이상 데이터가 없으면 요청 중단
        return;
      }

      const detailedItems: GardenItemProps[] = await Promise.all(
        gardenListItems.map(async (item: any) => {
          const cntntsNo = item.cntntsNo;

          const gardenDetailResponse = await axios.get(
            `${url}/gardenDtl?apiKey=${apiKey}&cntntsNo=${cntntsNo}`
          );
          const gardenDetailJson = parser.parse(gardenDetailResponse.data);
          const detailInfo: DetailInfoProps =
            gardenDetailJson?.response?.body?.item || {};

          const gardenFileListResponse = await axios.get(
            `${url}/gardenFileList?apiKey=${apiKey}&cntntsNo=${cntntsNo}`
          );
          const gardenFileListJson = parser.parse(gardenFileListResponse.data);
          let fileList: FileItemProps[] =
            gardenFileListJson?.response?.body?.items?.item || [];

          if (!Array.isArray(fileList)) {
            fileList = [fileList];
          }

          return { ...item, detailInfo, fileList };
        })
      );

      setGardenList((prev) => {
        const existingIds = new Set(prev.map((item) => item.cntntsNo));
        const uniqueItems = detailedItems.filter(
          (item) => !existingIds.has(item.cntntsNo)
        );
        return [...prev, ...uniqueItems];
      });

      setPageNo((prev) => prev + 1); // ✅ 다음 페이지 증가
    } catch (error) {
      console.error("Error fetching garden list:", error);
      setError("데이터를 가져오는 도중 오류가 발생했습니다.");
      setHasMore(false);
    } finally {
      setLoading(false);
      isFetching.current = false; // ✅ 요청 완료 후 해제
    }
  }, [pageNo, hasMore, loading]);

  useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          fetchGardenList();
        }
      },
      { threshold: 1.0 }
    );

    observer.current.observe(observerRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [fetchGardenList, loading, hasMore]);

  return { gardenList, loading, error, observerRef };
};
