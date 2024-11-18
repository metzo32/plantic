import { MenuLarge, MenuSmall } from "./Menus";
import InputComponent from "./InputComponent";



export default function Header() {

  return (
    <div className="header-wrapper">
      <MenuLarge />
      <InputComponent/>
      <MenuSmall />
    </div>
  );
}
