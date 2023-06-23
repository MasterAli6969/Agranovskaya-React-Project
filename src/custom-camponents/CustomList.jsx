function CustomList(props) {
  const {
    linkArray,
    customUlStyle,
    customLiStyle,
    customAStyle,
    customImgStyle,
  } = props;
  return (
    <ul className={`${customUlStyle}`}>
      {linkArray.map((link, index) => {
        return (
          <li className={` ${customLiStyle}`} key={index}>
            <a className={` ${customAStyle}`} href={link.url}>
              <img className={`${customImgStyle}`} src={link.image} />
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default CustomList;
