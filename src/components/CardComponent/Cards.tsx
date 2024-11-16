import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface CardProps {
  name: string;
  nameEng?: string | null;
  info?: string | null;
  tagLevel?: React.ReactNode;
  tagSpeed?: React.ReactNode;
  tagLight?: React.ReactNode;
  tagWater?: React.ReactNode;
  imageSrc: string;
  altMessage: string;
  delay?: number; // 추가된 prop
}

export default function Cards({
  name,
  nameEng,
  info,
  tagLevel,
  tagSpeed,
  tagLight,
  tagWater,
  imageSrc,
  altMessage,
  delay,
}: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay }} // delay 추가
      >
        <div className="card-container">
          <div className="flex flex-row mb-[2%] mt-[4%]">
            {tagLevel}
            {tagSpeed}
            {tagLight}
            {tagWater}
          </div>

          <h2 className="h2 mb-[1%] mt-[3%]">{name}</h2>
          <h3 className="h3 mb-[1%]">{nameEng}</h3>
          <h4 className="h4 my-[3%]">{info}</h4>
          <img src={imageSrc} alt={altMessage} className="card-image" />
        </div>
      </motion.div>
    </div>
  );
}
