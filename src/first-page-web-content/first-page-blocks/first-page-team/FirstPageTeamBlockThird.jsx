import CustomAvatarImage from "../../../custom-camponents/Custom-static-components/CustomAvatarImage";
import CustomList from "../../../custom-camponents/Custom-static-components/CustomList";
import "./FirstPageTeam.css";
export function FirstPageTeamContentAvatar3() {
  const avaArrayFirst = [
    {
      name: "Давид Кицмаришвили",
      jobTitle1: "Адвокат,",
      jobTitle2: "кандидат юридических наук",
      imagePath:
        process.env.PUBLIC_URL + "/image/first-page-team/Аватарка-Давид.png",
    },
  ];

  const avaUniqueChangesObjectClass = {
    castomImgStyle: "avatar_image_style_Third_block",
  };

  return (
    <CustomAvatarImage
      AvaArrayObject={avaArrayFirst}
      customClass={avaUniqueChangesObjectClass}
    />
  );
}

export function FirstPageTeamContentInfoList3() {
  const infoListTextArray = [
    {
      id: "0",
      text: "Адвокат с опытом работы более 10 лет",
    },
    {
      id: "1",
      text: "Образование: МГЮА им. Кутафина",
    },
    {
      id: "2",
      text: "Приглашенный профессор ВАВТ ",
    },
    {
      id: "3",
      text: "Опыт включает структурирование сделок, судебные процессы и процедуры банкротства; общее юридическое сопровождение клиентов в различных проектах",
    },
    {
      id: "4",
      text: "Основные направления практики: финансы, телекоммуникации, банковское дело, энергетика, фармацевтика, недвижимость, финтех и другие сектора",
    },
    {
      id: "5",
      text: "Языки: английский, грузинский, украинский",
    },
    {
      id: "6",
      text: "Рейтинг ведущих экспертов Chambers FinTech Guide, The Legal 500",
    },
  ];
  const infoListTextArrayStyleOdject = {
    customDivStyle: "info_Div_List_Text",
    customLineStyle: "info_Line_List_Text",
    customUlStyle: "info_Ul_List_Text",
  };
  return (
    <CustomList
      linkArray={infoListTextArray}
      customClass={infoListTextArrayStyleOdject}
    />
  );
}
