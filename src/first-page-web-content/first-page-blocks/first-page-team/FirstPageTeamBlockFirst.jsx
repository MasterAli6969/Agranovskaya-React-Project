import CustomAvatarImage from "../../../custom-camponents/Custom-static-components/CustomAvatarImage";
import CustomList from "../../../custom-camponents/Custom-static-components/CustomList";
import "./FirstPageTeam.css";
export function FirstPageTeamContentAvatar1() {
  const avaArrayFirst = [
    {
      name: "Мария Аграновская ",
      jobTitle1: "Адвокат, Управляющий",
      jobTitle2: "партнер МКА «ГРАД»",
      imagePath:
        process.env.PUBLIC_URL + "/image/first-page-team/Аватарка1.png",
    },
  ];
  const avaStyleObject = {
    castomDivStyle: "avatar_div_style_conteiner",
    castomDivTextStyle: "avatar_div_text_style_conteiner",
    castomText1Style: "avatar_text1_style",
    castomText2Style: "avatar_text2_style",
    castomImgStyle: "avatar_image_style",
  };
  return (
    <CustomAvatarImage
      AvaArrayObject={avaArrayFirst}
      customClass={avaStyleObject}
    />
  );
}

export function FirstPageTeamContentInfoList1() {
  const infoListTextArray = [
    {
      id: "0",
      text: "Опыт работы более 27 лет",
    },
    {
      id: "1",
      text: "Образование: МГИМО (У) МИД РФ (Международное право), Германия, Нидерланды",
    },
    {
      id: "2",
      text: "Опыт работы: с 1997 года в нефтяной области, затем юридический отдел крупного англо-американского холдинга и 8 лет в большом семейном офисе, команда с 8 до 70 человек, обеспечение деятельности российских и иностранных холдингов, а также решение частных вопросов их владельцев и их семей",
    },
    {
      id: "3",
      text: "Уникальный опыт работы в РФ и ведущих странах по финтех и цифровым проектам, специалист по регулированию новых технологий, в т.ч. блокчейн-проектов с 2010 г., токенизации активов и предметов искусства, среди проектов — создание NFT для Эрмитажа, эксклюзивный юридический представитель крупнейшей мировой криптовалютной биржи Binance в России (до 03.22)",
    },
    {
      id: "4",
      text: "Член Экспертного совета при рабочей группе по цифровой экономике при ГосДуме РФ, экспертного совета СКОЛКОВО, РСПП, Рабочей группы BRICS по платежам, участие в разработке главных законов в области цифровых финансовых активов и цифровых валют в России",
    },
    {
      id: "5",
      text: "Приглашенный профессор ВШЭ (инвестиционные платформы, финтех), МГИМО, СПбГУ и др., лектор для сотрудников ЦБ РФ, ВТБ, Райффайзенбанка.; постоянный спикер мероприятий Blockchain Life, TechWeek Сколково и др.",
    },
    {
      id: "6",
      text: "Рейтинг ведущих экспертов Chambers FinTech Guide, The Legal 500 и Best Lawyers Языки: английский, немецкий, французский, итальянский, испанский",
    },
  ];
  const infoListTextArrayStyleOdject = {
    customDivStyle:"info_Div_List_Text",
    customLineStyle:"info_Line_List_Text",
    customUlStyle: "info_Ul_List_Text",
    customLiStyle: "info_Li_Text",
    customPStyle: "info_P_Text",
  };
  return (
    <CustomList
      linkArray={infoListTextArray}
      customClass={infoListTextArrayStyleOdject}
    />
  );
}
