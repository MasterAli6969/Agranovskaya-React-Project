import "./static.css";
function CastomAvatarImage(props) {
  const {
    AvaArrayObject,
    castomDivStyle,
    castomDivTextStyle,
    additionalClassName,
  } = props;
  return (
    <>
      {AvaArrayObject.map((content, index) => {
        return (
          <div className={`${castomDivStyle}`} key={index.id}>
            <div className={`${castomDivTextStyle}`}>
              <p className={`avaName ${additionalClassName}`}>{content.name}</p>
              <p className="jobTitle">
                {content.jobTitle1}
                <br />
                {content.jobTitle2}
              </p>
            </div>
            <img className="imagePath" src={content.imagePath} />
          </div>
        );
      })}
    </>
  );
}
export default CastomAvatarImage;
