function CustomList(props) {
  const {
    linkArray,
    customUlStyle,
    customLiStyle,
    customPStyle,
    customAStyle,
    customImgStyle,
  } = props;
  return (
    <ul className= {`${customUlStyle}`}>
      {linkArray.map((link, index) => {
        return (
          <li className={` ${customLiStyle}`} key={index}>
            <p className={` ${customPStyle}`}> {link.text}</p>
            <a className={` ${customAStyle}`} href={link.url}>
              <img className={`${customImgStyle}`} src={link.image} />
              {link.link}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default CustomList;
