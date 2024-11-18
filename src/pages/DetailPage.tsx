import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage: React.FC = () => {
  const location = useLocation();
  const { garden } = location.state

  return (
    <div className="detail-page">
   <p>컨텐츠 번호: {garden.detailInfo?.cntntsNo}</p>
<p>식물학 명: {garden.detailInfo?.plntbneNm}</p>
<p>식물영 명: {garden.detailInfo?.plntzrNm}</p>
<p>유통 명: {garden.detailInfo?.distbNm}</p>
<p>과명: {garden.detailInfo?.fmlNm}</p>
<p>과 코드명: {garden.detailInfo?.fmlCodeNm}</p>
<p>원산지 정보: {garden.detailInfo?.orgplceInfo}</p>
<p>조언 정보: {garden.detailInfo?.adviseInfo}</p>
<p>이미지 평가 링크 경로: {garden.detailInfo?.imageEvlLinkCours}</p>
<p>성장 높이 정보: {garden.detailInfo?.growthHgInfo}</p>
<p>성장 넓이 정보: {garden.detailInfo?.growthAraInfo}</p>
<p>잎 형태 정보: {garden.detailInfo?.lefStleInfo}</p>
<p>냄새 코드: {garden.detailInfo?.smellCode}</p>
<p>냄새 코드 명: {garden.detailInfo?.smellCodeNm}</p>
<p>독성 정보: {garden.detailInfo?.toxctyInfo}</p>
<p>번식 시기 정보: {garden.detailInfo?.prpgtEraInfo}</p>
<p>기타 시기 정보: {garden.detailInfo?.etcEraInfo}</p>
<p>관리수준 코드: {garden.detailInfo?.managelevelCode}</p>
<p>관리수준 코드명: {garden.detailInfo?.managelevelCodeNm}</p>
<p>생장속도 코드: {garden.detailInfo?.grwtveCode}</p>
<p>생장속도 코드명: {garden.detailInfo?.grwtveCodeNm}</p>
<p>생육 온도 코드: {garden.detailInfo?.grwhTpCode}</p>
<p>생육 온도 코드명: {garden.detailInfo?.grwhTpCodeNm}</p>
<p>겨울 최저 온도 코드: {garden.detailInfo?.winterLwetTpCode}</p>
<p>겨울 최저 온도 코드명: {garden.detailInfo?.winterLwetTpCodeNm}</p>
<p>습도 코드: {garden.detailInfo?.hdCode}</p>
<p>습도 코드명: {garden.detailInfo?.hdCodeNm}</p>
<p>비료 정보: {garden.detailInfo?.frtlzrInfo}</p>
<p>토양 정보: {garden.detailInfo?.soilInfo}</p>
<p>물주기 봄 코드: {garden.detailInfo?.watercycleSprngCode}</p>
<p>물주기 봄 코드명: {garden.detailInfo?.watercycleSprngCodeNm}</p>
<p>물주기 여름 코드: {garden.detailInfo?.watercycleSummerCode}</p>
<p>물주기 여름 코드명: {garden.detailInfo?.watercycleSummerCodeNm}</p>
<p>물주기 가을 코드: {garden.detailInfo?.watercycleAutumnCode}</p>
<p>물주기 가을 코드명: {garden.detailInfo?.watercycleAutumnCodeNm}</p>
<p>물주기 겨울 코드: {garden.detailInfo?.watercycleWinterCode}</p>
<p>물주기 겨울 코드명: {garden.detailInfo?.watercycleWinterCodeNm}</p>
<p>병충해 관리 정보: {garden.detailInfo?.dlthtsManageInfo}</p>
<p>특별관리 정보: {garden.detailInfo?.speclmanageInfo}</p>
<p>기능성 정보: {garden.detailInfo?.fncltyInfo}</p>
<p>화분직경 대 정보: {garden.detailInfo?.flpodmtBigInfo}</p>
<p>화분직경 중 정보: {garden.detailInfo?.flpodmtMddlInfo}</p>
<p>화분직경 소 정보: {garden.detailInfo?.flpodmtSmallInfo}</p>
<p>가로 대 정보: {garden.detailInfo?.WIDTH_BIG_INFO}</p>
<p>가로 중 정보: {garden.detailInfo?.widthMddlInfo}</p>
<p>가로 소 정보: {garden.detailInfo?.widthSmallInfo}</p>
<p>세로 대 정보: {garden.detailInfo?.vrticlBigInfo}</p>
<p>세로 중 정보: {garden.detailInfo?.vrticlMddlInfo}</p>
<p>세로 소 정보: {garden.detailInfo?.vrticlSmallInfo}</p>
<p>높이 대 정보: {garden.detailInfo?.hgBigInfo}</p>
<p>높이 중 정보: {garden.detailInfo?.hgMddlInfo}</p>
<p>높이 소 정보: {garden.detailInfo?.hgSmallInfo}</p>
<p>볼륨 대 정보: {garden.detailInfo?.volmeBigInfo}</p>
<p>볼륨 중 정보: {garden.detailInfo?.volmeMddlInfo}</p>
<p>볼륨 소 정보: {garden.detailInfo?.volmeSmallInfo}</p>
<p>가격 대 정보: {garden.detailInfo?.pcBigInfo}</p>
<p>가격 중 정보: {garden.detailInfo?.pcMddlInfo}</p>
<p>가격 소 정보: {garden.detailInfo?.pcSmallInfo}</p>
<p>관리요구도 코드: {garden.detailInfo?.managedemanddoCode}</p>
<p>관리요구도 코드명: {garden.detailInfo?.managedemanddoCodeNm}</p>
<p>분류 코드: {garden.detailInfo?.clCode}</p>
<p>분류 코드명: {garden.detailInfo?.clCodeNm}</p>
<p>생육형태 코드: {garden.detailInfo?.grwhstleCode}</p>
<p>생육형태 코드명: {garden.detailInfo?.grwhstleCodeNm}</p>
<p>실내정원구성 코드: {garden.detailInfo?.indoorpsncpacompositionCode}</p>
<p>실내정원구성 코드명: {garden.detailInfo?.indoorpsncpacompositionCodeNm}</p>
<p>생태 코드: {garden.detailInfo?.eclgyCode}</p>
<p>생태 코드명: {garden.detailInfo?.eclgyCodeNm}</p>
<p>잎무늬 코드: {garden.detailInfo?.lefmrkCode}</p>
<p>잎무늬 코드명: {garden.detailInfo?.lefmrkCodeNm}</p>
<p>잎색 코드: {garden.detailInfo?.lefcolrCode}</p>
<p>잎색 코드명: {garden.detailInfo?.lefcolrCodeNm}</p>
<p>발화 계절 코드: {garden.detailInfo?.ignSeasonCode}</p>
<p>발화 계절 코드명: {garden.detailInfo?.ignSeasonCodeNm}</p>
<p>꽃색 코드: {garden.detailInfo?.flclrCode}</p>
<p>꽃색 코드명: {garden.detailInfo?.flclrCodeNm}</p>
<p>과일 계절: {garden.detailInfo?.fmldeSeasonCode}</p>
<p>과일 계절 코드명: {garden.detailInfo?.fmldeSeasonCodeNm}</p>
<p>과일색 코드: {garden.detailInfo?.fmldecolrCode}</p>
<p>과일색 코드명: {garden.detailInfo?.fmldecolrCodeNm}</p>
<p>번식방법 코드: {garden.detailInfo?.prpgtmthCode}</p>
<p>번식방법 코드명: {garden.detailInfo?.prpgtmthCodeNm}</p>
<p>광요구도 코드: {garden.detailInfo?.lighttdemanddoCode}</p>
<p>광요구도 코드명: {garden.detailInfo?.lighttdemanddoCodeNm}</p>
<p>배치장소 코드: {garden.detailInfo?.postngplaceCode}</p>
<p>배치장소 코드명: {garden.detailInfo?.postngplaceCodeNm}</p>
<p>병충해 코드: {garden.detailInfo?.dlthtsCode}</p>
<p>병충해 코드명: {garden.detailInfo?.dlthtsCodeNm}</p>

    </div>
  );
};

export default DetailPage;
