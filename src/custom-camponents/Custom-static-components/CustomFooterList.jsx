function CustomFooterList(props) {
  const { footerListArray, customClass = {} } = props;
  return (
    <div className={`${customClass.customDivStyle}`}>
      {footerListArray.map((content) => {
        return (
          <div key={content.id} className={`${customClass.customSubDivStyle}`}>
            {content.image && (
              <img
                className={`${customClass.customImgStyle}`}
                src={content.image}
              />
            )}
            <div className={`${customClass.customDivContentStyle}`}>
              {content.linkArray.map((text) => (
                <>
                  <a
                    className={` ${
                      typeof text.id === "string"    // ЭТА ЛОГИКА НУЖНА ДЛЯ ТОГО ЧТО БЫ МО МЫГЛИ ИСПОЛЬЗУЯ ДЕЛАТЬ РАЗНЫЕ КЛАССЫ СО СТИЛЯМИ ЕСТЬ ЕСТЬ РАЗНИЦА В НЕ ЕДИНОМ ОТОБРАЖЕНИИ
                        ? customClass.customTextStyle1
                        : customClass.customTextStyle2
                    }`}
                    key={text.id}
                    href={text.url}
                  >
                    {text.text}
                  </a>
                  <br />
                </>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CustomFooterList;
