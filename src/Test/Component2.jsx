import "./Test.css";
function Component2(props) {
  const { onClick, isVisible } = props;
  return (
    <div
      onClick={onClick}
      className={`component2 ${isVisible ? "_visible" : ""}`}
    />
  );
}
export default Component2;