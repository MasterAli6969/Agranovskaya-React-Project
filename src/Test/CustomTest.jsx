function CustomTest(props) {
  const { castomClass } = props;
  return (
    <ul className= {`${castomClass}`}>
      {linkArray.map((link, index) => {
        return (
          <li className={` ${castomClass}`} key={index}>
            <p className={` ${castomClass}`}> {link.text}</p>
            <a className={` ${castomClass}`} href={link.url}>
              <img className={`${castomClass}`} src={link.image} />
              {link.link}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default CustomTest;
