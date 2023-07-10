import CustomAvatarImage from "../../../custom-camponents/Custom-static-components/CustomAvatarImage";
import CustomList from "../../../custom-camponents/Custom-static-components/CustomList";
import "./FirstPageTeam.css";
export function FirstPageTeamContentAvatar2() {
  const avaArrayFirst = [
    {
      name: "Сергей Леошко",
      jobTitle1: "Партнер, налоговый и",
      jobTitle2: "финансовый эксперт",
      imagePath:
        process.env.PUBLIC_URL + "/image/first-page-team/Аватарка-Сергей.png",
    },
  ];
  const avaUniqueChangesObjectClass = {
    castomDivTextStyle: "avatar_div_text_style_conteiner_second_block",
    castomImgStyle: "avatar_image_style_second_block",
  };

  return (
    <CustomAvatarImage
      AvaArrayObject={avaArrayFirst}
      customClass={avaUniqueChangesObjectClass}
    />
  );
}

export function FirstPageTeamContentInfoList2() {
  const infoListTextArray = [
    {
      id: "0",
      text: "Более 20 лет опыта работы, в т.ч. в BIG4 и крупнейших международных и российских группах компаний",
    },
    {
      id: "1",
      text: "Учредитель и управляющий партнёр бизнес-консалтинговой компании «ЮНФ СОПРОВОЖДЕНИЕ»",
    },
    {
      id: "2",
      text: "Образование: МГИМО (У) МИД РФ",
    },
    {
      id: "3",
      text: "Эксперт по налогам, трансфертному ценообразованию, экономическому моделированию и бизнес-планированию, IPO, ICO, токеномике, рискам, отчётности.",
    },
    {
      id: "4",
      text: "Консультант, ментор и соучредитель проектов цифровой экономики, технологий ИИ, блокчейн, shared economy и в добыче, услугах, FMCG, строительстве и других отраслях.",
    },
    {
      id: "5",
      text: "Ключевые направления деятельности: международная экспансия российского бизнеса, международное налоговое и финансовое планирование, due diligence, M&A, структурирование инвестиций для частных инвесторов, фондов, корпоративных структур, размещения облигаций, IPO, ICO, токенизация, локализация международного бизнеса в России и СНГ, оптимизация бизнес-моделей в связи с внедрением новых технологий, цифровизацией и т.д.",
    },
    {
      id: "6",
      text: "Языки: русский, английский, испанский Рейтинг ведущих экспертов Chambers FinTech Guide, The Legal 500",
    },
  ];
  const infoListTextStyleOdject = {
    customDivStyle: "info_Div_List_Text",
    customLineStyle: "info_Line_List_Text",
    customUlStyle: "info_Ul_List_Text",
    customADDLineStyle: "info_Line_List_Text_Second_Block",
    customAddUlStyle: "info_Ul_List_Text_Second_Block",
  };
  return (
    <CustomList
      linkArray={infoListTextArray}
      customClass={infoListTextStyleOdject}
    />
  );
}
