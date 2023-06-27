import "./Header.scss";
import CustomList from "../../custom-camponents/Custom-static-components/CustomList";
export function NumberIcons() {
  const IconLinksSocialWebArray = [
    {
      id: "0",
      url: "#",
      text: "+7 926 996 14 55",
    },
    {
      id: "1",
      url: "#",
      image:
        process.env.PUBLIC_URL +
        "/image/img_Header_and_Block1/иконка почты.png",
    },
    {
      id: "2",
      url: "#",
      image:
        process.env.PUBLIC_URL +
        "/image/img_Header_and_Block1/иконка звонка.png",
    },
    {
      id: "3",
      url: "#",
      image:
        process.env.PUBLIC_URL +
        "/image/img_Header_and_Block1/иконка телеги.png",
    },
  ];
  return (
    <>
      <CustomList
        linkArray={IconLinksSocialWebArray}
        customUlStyle={"header_ul_number_icon_style"}
        customLiStyle={"header_li_number_icon_style"}
        customPStyle={"header_number_style"}
      />
      <hr className="header_hr" />
    </>
  );
}

export function HeaderNavLinks() {
  const HeaderNavLinks = [
    {
      url: "#",
      link: "О компании",
    },
    {
      url: "#",
      link: "Проекты",
    },
    {
      url: "#",
      link: "Услуги",
    },
    {
      url: "#",
      link: "Образование",
    },
    {
      url: "#",
      link: "Отзывы",
    },
    {
      url: "#",
      link: "Контакты",
    },
  ];
  return (
    <CustomList
      linkArray={HeaderNavLinks}
      customUlStyle={"header_ul_linck_style"}
      customLiStyle={"header_li_linck_style"}
      customAStyle={"header_a_linck_style"}
    />
  );
}
