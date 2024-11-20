import { useEffect, useState } from "react";
import { ReactComponent as PopupTriSm } from "../assets/svg/popup_tri.svg";
import { ReactComponent as PopupBgSm } from "../assets/svg/popup_bg.svg";
import { ReactComponent as PopupTri } from "../assets/svg/popup_tri2.svg";
import { ReactComponent as PopupBg } from "../assets/svg/popup_bg2.svg";

export default function Triangle() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        <>
          <PopupTriSm className="popup-tri mobile" />
          <PopupBgSm className="popup-bg mobile" />
        </>
      ) : (
        <>
          <PopupTri className="popup-tri" />
          <PopupBg className="popup-bg" />
        </>
      )}
    </>
  );
}
