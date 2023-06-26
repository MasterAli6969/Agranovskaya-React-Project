import React, { useState } from "react";
import "./HeaderBurgerMenu.css";
import BurgerIcon from "./BurgerIcon";
import HeaderBurgerMenuContent from "./HeaderBurgerMenuContent";
function HeaderBurger() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <BurgerIcon onClick={handleClick} />
      <HeaderBurgerMenuContent isVisible={isVisible} />
    </>
  );
}
export default HeaderBurger;