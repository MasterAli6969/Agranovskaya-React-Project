function CastomDiv(props) {
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
              {component.left}
            </div>
            <div className={`${castomDivStyleSubConteinerRight}`}>
              {component.right}
            </div>
          </>
        </div>
      ))}
    </>
  );
}
export default CastomDiv;
