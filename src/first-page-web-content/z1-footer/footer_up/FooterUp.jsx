import "./FooterUp.css";
import CustomDiv from "../../../custom-camponents/Custom-static-components/CustomDiv";
import { FooterUpTitleInfo, FooterUpMaps } from "./FooterUpContetn";
function FooterUp() {
  const FooterUpArrayObject = [
    {
      componentOne: <FooterUpTitleInfo />,
      componentTwo: <FooterUpMaps />,
    },
  ];
  const FooterUpStyleObject = {
    customDivStyleConteiner: "conteiner_Div_footer_Up_Global",
  };
  return (
    <CustomDiv
      divArray={FooterUpArrayObject}
      customClass={FooterUpStyleObject}
    />
  );
}

export default FooterUp;
