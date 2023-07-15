import "./test.css";
import CustomFooterList from "./custom-camponents/Custom-static-components/CustomFooterList";
function TestCustom() {
  const testArrayObject = [
    {
      id: 1,
      image:
        process.env.PUBLIC_URL +
        "/image/img_Header_and_Block1/иконка почты.png",
      linkArray: [
        { text: "LINCK1", url: "#" },
        { text: "LINCK1", url: "#" },
      ],
    },
  ];

  const testStyleObject = {
    customDivStyle: "",
    customSubDivStyle: "",
    customImgStyle: "",
    customDivContentStyle: "div_test_class",
    customLinksStyle: "",
    customLinksStyle: "",
  };
  return <CustomFooterList footerListArray={testArrayObject} />;
}

export default TestCustom;
