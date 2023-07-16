import "./App.css";
import HeaderEnd from "./first-page-web-content/a1-header/HeaderEnd";
import HeadBlock from "./first-page-web-content/first-page-blocks/first-page-head-block/HeadBlock";
import FirstPageTeam from "./first-page-web-content/first-page-blocks/first-page-team/firstPageTeam";
import Form from "./first-page-web-content/Form/Form";
import TestCustom from "./test";
import FooterUp from "./first-page-web-content/z1-footer/footer_up/FooterUp";
import FooterDown from "./first-page-web-content/z1-footer/footer-down/footerDown";
function App() {
  return (
    <>
      <HeaderEnd />

      <HeadBlock />

      <FirstPageTeam />

      <Form />

      <FooterUp />

      <FooterDown/>
    </>
  );
}

export default App;
