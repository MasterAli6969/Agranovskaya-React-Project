import React, { useState } from "react";
import "./Test.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
function Test() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="test_conteiner">
      <Component1 handleClick={handleClick} />
      <Component2 isVisible={isVisible} />
    </div>
  );
}
export default Test;
