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
     // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div className="card-box">
            <div className="tags-container">
              {tagLevel}
              {tagSpeed}
              {tagLight}
              {tagWater}
            </div>

            <h2>{name}</h2>
            <h3>{nameEng}</h3>
            <h4>{info ? `${info}에서 서식하는 식물` : null}</h4>
          </div>
          <img src={imageSrc} alt={altMessage} className="card-image" />
        </div>
      </motion.div>
    </div>
  );
}
