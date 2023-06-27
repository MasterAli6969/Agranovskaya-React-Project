import "./Header.scss";
import CustomDiv from "../../custom-camponents/Custom-static-components/CustomDiv";
import Logo from "./HeaderLogo";
import HeaderContentRight from "./HeaderContentRight";
function HeaderDesktop() {
  const logoHeaderObject = [
    {
      id: 1,
      componentOne: <Logo />,
      componentTwo: <HeaderContentRight />,
    },
  ];
  return (
    <CustomDiv
      divArray={logoHeaderObject}
      castomDivStyleConteiner={"global_div_header"}
      castomDivStyleSubConteinerLeft={"global_div_left_header"}
      castomDivStyleSubConteinerRight={"global_div_right_header"}
    />
  );
}
export default HeaderDesktop;
