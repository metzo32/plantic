
import Modal from "./Modal";
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

type IconProps = {
  Icon: React.ElementType;
  label: string;
};

const IconWithLabel = ({ Icon, label }: IconProps) => (
  <>
    <Icon />
    <span className="tag-span">{label}</span>
  </>
);

export const getLevelIcon = (levelData: string | undefined) => {
  const handleinfoLevel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log("난이도")
  }


  switch (levelData) {
    case "초보자":
      return (
        <button className="tag hoverMd group" onClick={handleinfoLevel}>
          <IconWithLabel Icon={LevNum01} label="키우기 쉬워요" />
        </button>
      );
    case "경험자":
      return (
        <button className="tag hoverSm group" onClick={handleinfoLevel}>
          <IconWithLabel Icon={LevNum02} label="키울만 해요" />
        </button>
      );
    case "전문가":
      return (
        <button className="tag hoverMd group" onClick={handleinfoLevel}>
          <IconWithLabel Icon={LevNum03} label="키우기 어려워요" />
        </button>
      );
    default:
      return null;
  }
};

export const getSpeedIcon = (speedData: string | undefined) => {
  const handleinfoSpeed = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log("성장속도")
  }


  switch (speedData) {
    case "느림":
      return (
        <button className="tag hoverSm group" onClick={handleinfoSpeed}>
          <IconWithLabel Icon={LevTime01} label="금방 자라요" />
        </button>
      );
    case "보통":
      return (
        <button className="tag hoverSm group" onClick={handleinfoSpeed}>
          <IconWithLabel Icon={LevTime02} label="곧 자라요" />
        </button>
      );
    case "빠름":
      return (
        <button className="tag hoverMd group" onClick={handleinfoSpeed}>
          <IconWithLabel Icon={LevTime03} label="시간이 걸려요" />
        </button>
      );
    default:
      return null;
  }
};

export const getLightIcon = (lightData: string | undefined) => {
  const handleinfoLight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log("광도")
  }


  switch (lightData) {
    case "낮은":
      return (
        <button className="tag hoverMd group" onClick={handleinfoLight}>
          <IconWithLabel Icon={LevLight01} label="그늘도 좋아요" />
        </button>
      );
    case "중간":
      return (
        <button className="tag hoverMd group" onClick={handleinfoLight}>
          <IconWithLabel Icon={LevLight02} label="햇볕이 필요해요" />
        </button>
      );
    case "높은":
      return (
        <button className="tag hoverLg group" onClick={handleinfoLight}>
          <IconWithLabel Icon={LevLight03} label="햇볕이 많이 필요해요" />
        </button>
      );
    default:
      return null;
  }
};

export const getWaterIcon = (waterData: number | undefined) => {
  const handleinfoWater = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log("물주기")
  }

  switch (waterData) {
    case 53001:
      return (
        <button className="tag hoverMd group" onClick={handleinfoWater}>
          <IconWithLabel Icon={LevWater01} label="물을 매일 줘요" />
        </button>
      );
    case 53002:
      return (
        <button className="tag hoverMd group" onClick={handleinfoWater}>
          <IconWithLabel Icon={LevWater02} label="물을 자주 줘요" />
        </button>
      );
    case 53003:
      return (
        <button className="tag hoverMd group" onClick={handleinfoWater}>
          <IconWithLabel Icon={LevWater03} label="물을 가끔 줘요" />
        </button>
      );
    case 53004:
      return (
        <button className="tag hoverMd group" onClick={handleinfoWater}>
          <IconWithLabel Icon={LevWater04} label="물을 드물게 줘요" />
        </button>
      );
    default:
      return null;
  }
};
