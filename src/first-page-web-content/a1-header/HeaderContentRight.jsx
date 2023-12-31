import "./Header.css";
import CustomDiv from "../../custom-camponents/Custom-static-components/CustomDiv";
import { NumberIcons, HeaderNavLinks } from "./HeaderNavContent";
function HeaderContentRight() {
  const headerContentRight = [
    {
      id: 1,
      componentOne: <NumberIcons />,
      componentTwo: <HeaderNavLinks />,
    },
  ];
  
  return <CustomDiv divArray={headerContentRight} />;
}
export default HeaderContentRight;
