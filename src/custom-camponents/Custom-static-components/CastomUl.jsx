function CastomUl(props) {
  const { ulArray } = props;
  return (
    <>
      {ulArray.map((text, index) => {
        return (
          <ul>
            <li key={index}>{text}</li>
          </ul>
        );
      })}
    </>
  );
}
export default CastomUl;
