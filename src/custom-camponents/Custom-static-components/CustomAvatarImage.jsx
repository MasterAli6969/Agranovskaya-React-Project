import "./static.css";
function CustomAvatarImage({AvaArrayObject, customClass = {}}) {
  return (
    <>
      {AvaArrayObject.map((content, index) => {
        return (
          <div
            className={`avatar_div_style_conteiner ${customClass.castomDivStyle}`}
            key={index.id}
          >
            <div
              className={`avatar_div_text_style_conteiner ${customClass.castomDivTextStyle}`}
            >
              <p
                className={`avatar_text1_style ${customClass.castomText1Style}`}
              >
                {content.name}
              </p>
              <p
                className={`avatar_text2_style ${customClass.castomText2Style}`}
              >
                {content.jobTitle1}
                <br />
                {content.jobTitle2}
              </p>
            </div>
            <img
              className={`avatar_image_style ${customClass.castomImgStyle}`}
              src={content.imagePath}
            />
          </div>
        );
      })}
    </>
  );
}
export default CustomAvatarImage;
