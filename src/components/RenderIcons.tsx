// IconComponents.tsx
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
import React from "react";

interface IconProps {
  Icon: React.ComponentType;
  label: string;
};

const IconWithLabel = ({ Icon, label }: IconProps) => (
  <div className="flex">
    <Icon />
    <span className="hidden">{label}</span>
  </div>
);

export const getLevelIcon = (levelData: string | undefined) => {
  switch (levelData) {
    case "초보자":
      return <IconWithLabel Icon={LevNum01} label="키우기 쉬워요" />;
    case "경험자":
      return <IconWithLabel Icon={LevNum02} label="키울만 해요" />;
    case "전문가":
      return <IconWithLabel Icon={LevNum03} label="키우기 어려워요" />;
    default:
      return null;
  }
};

export const getSpeedIcon = (speedData: string | undefined) => {
  switch (speedData) {
    case "느림":
      return <IconWithLabel Icon={LevTime01} label="금방 자라요" />;
    case "보통":
      return <IconWithLabel Icon={LevTime02} label="곧 자라요" />;
    case "빠름":
      return <IconWithLabel Icon={LevTime03} label="시간이 걸려요" />;
    default:
      return null;
  }
};

export const getLightIcon = (lightData: string | undefined) => {
  switch (lightData) {
    case "낮은":
      return <IconWithLabel Icon={LevLight01} label="햇볕 없이도 좋아요" />;
    case "중간":
      return <IconWithLabel Icon={LevLight02} label="햇볕이 필요해요" />;
    case "높은":
      return <IconWithLabel Icon={LevLight03} label="햇볕이 많이 필요해요" />;
    default:
      return null;
  }
};

export const getWaterIcon = (waterData: number | undefined) => {
  switch (waterData) {
    case 53001:
      return <IconWithLabel Icon={LevWater01} label="물을 매일 줘요" />;
    case 53002:
      return <IconWithLabel Icon={LevWater02} label="물을 자주 줘요" />;
    case 53003:
      return <IconWithLabel Icon={LevWater03} label="물을 가끔 줘요" />;
    case 53004:
      return <IconWithLabel Icon={LevWater04} label="물을 드물게 줘요" />;
    default:
      return null;
  }
};
