function CustomDiv(props) {
  const {
    divArray,
    castomDivStyleConteiner,
    castomDivStyleSubConteinerLeft,
    castomDivStyleSubConteinerRight,
  } = props;
  return (
    <>
      {divArray.map((component) => (
        <div className={`${castomDivStyleConteiner}`} key={component.id}>
          <>
            <div className={`${castomDivStyleSubConteinerLeft}`}>
              {component.componentOne}
            </div>
            <div className={`${castomDivStyleSubConteinerRight}`}>
              {component.componentTwo}
            </div>
          </>
        </div>
      ))}
    </>
  );
}
export default CustomDiv;
