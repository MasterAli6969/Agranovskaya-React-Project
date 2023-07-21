import "./Header.css";
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
  const logoHeaderObjectStyle = {
    customDivStyleConteiner: "global_div_header",
    customDivStyleSubConteinerLeft: "global_div_left_header",
    customDivStyleSubConteinerRight: "global_div_right_header",
  };
  return (
    <CustomDiv
      divArray={logoHeaderObject}
      customClass={logoHeaderObjectStyle}
    />
  );
}
export default HeaderDesktop;
