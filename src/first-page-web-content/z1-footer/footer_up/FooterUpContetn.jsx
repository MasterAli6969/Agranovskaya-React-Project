import "./FooterUp.css";
import CustomFooterList from "../../../custom-camponents/Custom-static-components/CustomFooterList";
export function FooterUpTitleInfo() {
  const footerUpTitleInfoObjectArray = [
    {
      id: 1,
      linkArray: [
        { text: "Или свяжитесь с нами любым", id: "" },
        { text: "удобным для вас способом:", id: "" },
      ],
    },
    {
      id: 2,
      image:
        process.env.PUBLIC_URL +
        "/image/img_Header_and_Block1/иконка звонка.png",
      linkArray: [{ text: "+7 903 969 62 11" }, { text: "+7 903 969 14 55" }],
    },
    {
      id: 1,
      image:
        process.env.PUBLIC_URL +
        "/image/img_Header_and_Block1/иконка почты.png",
      linkArray: [
        { text: "maria@agranovskaya.com", url: "#" },
        { text: "office@agranovskaya.com", url: "#" },
      ],
    },
  ];

  const footerUpTitleInfoStyleObject = {
    customDivStyle: "conteiner_Div_footer_Up_title_info",
    customSubDivStyle: "sub_conteiner_Div_footer_Up_icon_info",
    customImgStyle: "footer_Up_icon",
    customDivContentStyle: "conteiner_Div_footer_up_text_content",
    customTextStyle1: "textClacc1",
    customTextStyle2: "textclacc2",
  };

  return (
    <CustomFooterList
      footerListArray={footerUpTitleInfoObjectArray}
      customClass={footerUpTitleInfoStyleObject}
    />
  );
}

export function FooterUpMaps() {}
