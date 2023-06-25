import "./Header.scss";

function Logo() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/image/img_Header_and_Block1/лого.png"}
      />
    </div>
  );
}

export default Logo;
