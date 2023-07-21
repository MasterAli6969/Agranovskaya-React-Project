import HeaderEnd from "./a1-header/HeaderEnd";
import HeadBlock from "./first-page-blocks/first-page-head-block/HeadBlock";
import FirstPageTeam from "./first-page-blocks/first-page-team/firstPageTeam";
import Form from "./Form/Form";
import FooterUp from "./z1-footer/footer_up/FooterUp";
import FooterDown from "./z1-footer/footer-down/footerDown";
function FirstPage() {
  return (
    <>
      <HeaderEnd />

      <HeadBlock />

      <FirstPageTeam />

      <Form />

      <FooterUp />

      <FooterDown />
    </>
  );
}
export default FirstPage;
