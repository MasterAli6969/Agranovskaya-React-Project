import "./test.css";
import CastomAvatarImage from "./custom-camponents/Custom-static-components/CastomAvatarImage";
function TestCustom() {
  const avaObject = [
    {
      id: 1,
      name: "Мария Аграновская ",
      jobTitle1: "Адвокат, Управляющий",
      jobTitle2: "партнер МКА «ГРАД»",
      imagePath: process.env.PUBLIC_URL + "/image/ava_image/Аватарка-Мария.png",
    },
  ];
  return (
    <CastomAvatarImage AvaArrayObject={avaObject} />
  );
}
export default TestCustom;