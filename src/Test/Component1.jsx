import "./Test.css";
function Component1(props) {
  const { handleClick, isActive } = props;
  return (
    <div
      className={`component1 ${isActive ? "_active" : ""}`}
      onClick={handleClick}
    />
  );
}
export default Component1;
