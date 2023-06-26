import "./HeaderBurgerMenu.css";
import CustomList from "../../../custom-camponents/Custom-static-components/CustomList";
function HeaderBurgerMenuContent(props) {
  const UlStyle = "header_ul_Burger_linck_style";
  const LiStyle = "header_li_Burger_linck_style";
  const AStyle = "header_a_Burger_linck_style";
  const Modif = "_modif";
  const {isVisible} = props;
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
      customUlStyle={UlStyle}
      customLiStyle={LiStyle}
      customAStyle={AStyle}
      customModif={Modif}
      isVisible={isVisible}
    />
  );
}
export default HeaderBurgerMenuContent;
