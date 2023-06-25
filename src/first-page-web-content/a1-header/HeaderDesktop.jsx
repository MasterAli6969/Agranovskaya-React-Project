import "./Header.scss";
import CustomDiv from "../../custom-camponents/Custom-static-components/CustomDiv";
import Logo from "./HeaderLogo";
import HeaderContentRight from "./HeaderContentRight";


function HeaderDesktop() {
  const DivStyleConteiner = "global_div_header";
  const DivStyleSubConteinerLeft = "global_div_left_header";
  const DivStyleSubConteinerRight = "global_div_right_header"
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
      castomDivStyleConteiner={DivStyleConteiner}
      castomDivStyleSubConteinerLeft = {DivStyleSubConteinerLeft}
      castomDivStyleSubConteinerRight = {DivStyleSubConteinerRight}
    />
  );
}
export default HeaderDesktop;
