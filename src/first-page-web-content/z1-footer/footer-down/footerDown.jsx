import "./FooterDown.css";
import CustomFooterList from "../../../custom-camponents/Custom-static-components/CustomFooterList";
function FooterDown() {
  const footerUpTitleInfoObjectArray = [
    {
      id: 1,
      linkArray: [
        { text: "Ⓒ2022, Agranovskaya & Partners", id: "" },
        {
          text: "Политика конфиденциальности, cогласие на обработку персональных данных",
          url: "#",
        },
      ],
    },
    {
      id: 2,
      linkArray: [
        { text: "О компании", url: "#" },
        { text: "Проекты", url: "#" },
      ],
    },
    {
      id: 2,
      linkArray: [
        { text: "Команда", url: "#" },
        { text: "Услуги", url: "#" },
      ],
    },
    {
      id: 2,
      linkArray: [
        { text: "Партнеры", url: "#" },
        { text: "Образование", url: "#" },
      ],
    },
    {
      id: 2,
      linkArray: [
        { text: "Новости", url: "#" },
        { text: "Отзывы", url: "#" },
      ],
    },
  ];
  const footerUpTitleInfoStyleObject = {
    customDivStyle: "conteiner_Div_footer_down",
    customSubDivStyle: "conteiner_Sub_Div_footer_down",
    customDivContentStyle: "conteiner_Div_footer_down_text",
    customTextStyle1: "footer_down_text_1",
    customTextStyle2: "footer_down_text_2",
  };
  return (
    <div className="conteiner_Div_footer_down_Global">
      <hr className="footer_line" />
      <CustomFooterList
        footerListArray={footerUpTitleInfoObjectArray}
        customClass={footerUpTitleInfoStyleObject}
      />
    </div>
  );
}
export default FooterDown;
