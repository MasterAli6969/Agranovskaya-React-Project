import "./Header.css";
function Logo() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/image/img_Header_and_Block1/лого.png"}
        className="header_desktop_logo"
      />
    </div>
  );
}

export default Logo;
