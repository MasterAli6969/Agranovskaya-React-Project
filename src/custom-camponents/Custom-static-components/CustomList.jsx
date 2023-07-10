function CustomList(props) {
  const { linkArray, customClass } = props;
  return (
    <div
      className={`${customClass.customDivStyle}`}
    >
      <div
        className={`${customClass.customLineStyle} ${customClass.customADDLineStyle}`}
      />
      <ul className={`${customClass.customUlStyle} ${customClass.customAddUlStyle}`}>
        {linkArray.map((link, index) => {
          return (
            <li className={` ${customClass.customLiStyle}`} key={index}>
              <p className={` ${customClass.customPStyle}`}> {link.text}</p>
              <a className={` ${customClass.customAStyle}`} href={link.url}>
                <img
                  className={`${customClass.customImgStyle}`}
                  src={link.image}
                />
                {link.link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CustomList;
