import "./static.css";
function CustomAvatarImage(props) {
  const { AvaArrayObject, customClass } = props;
  return (
    <>
      {AvaArrayObject.map((content, index) => {
        return (
          <div className={`${customClass.castomDivStyle}`} key={index.id}>
            <div className={`${customClass.castomDivTextStyle}`}>
              <p className={`${customClass.castomText1Style}`}>
                {content.name}
              </p>
              <p className={`${customClass.castomText2Style}`}>
                {content.jobTitle1}
                <br />
                {content.jobTitle2}
              </p>
            </div>
            <img
              className={`${customClass.castomImgStyle}`}
              src={content.imagePath}
            />
          </div>
        );
      })}
    </>
  );
}
export default CustomAvatarImage;
