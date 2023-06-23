import { useState } from "react";
function CustomLinck(props) {
  const { linkArray, customUlStyle, customLiStyle, customAStyle } = props;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <ul className={`${customUlStyle}`}>
      {linkArray.map((link, index) => {
        const isLinkActive = activeIndex === index;
        return (
          <li
            className={` ${customLiStyle}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <a className={` ${customAStyle}`} href={link.url}>
              {link.text}
            </a>
            {isLinkActive && link.submenu && <div>{link.submenu}</div>}
          </li>
        );
      })}
    </ul>
  );
}

export default CustomLinck;
