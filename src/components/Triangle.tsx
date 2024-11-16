import { ReactComponent as PopupTri } from "../assets/svg/popup_tri.svg";
import { ReactComponent as PopupBg } from "../assets/svg/popup_bg.svg";

export default function Triangle() {
  return (
    <>
      <PopupTri className="popup-tri" />
      <PopupBg className="popup-bg" />
    </>
  );
}
