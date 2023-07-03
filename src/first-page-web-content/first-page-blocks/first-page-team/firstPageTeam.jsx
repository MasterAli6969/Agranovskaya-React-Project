import CustomDiv from "../../../custom-camponents/Custom-static-components/CustomDiv";
import {
  FirstPageTeamContentAvatar1,
  FirstPageTeamContentInfoList1,
} from "./FirstPageTeamBlockFirst";
import {
  FirstPageTeamContentAvatar2,
  FirstPageTeamContentInfoList2,
} from "./FirstPageTeamBlockSecond";
import {
  FirstPageTeamContentAvatar3,
  FirstPageTeamContentInfoList3,
} from "./FirstPageTeamBlockThird";
import "./FirstPageTeam.css";
function FirstPageTeam() {
  const FirstPageTeamArrayFirst = [
    {
      componentOne: <FirstPageTeamContentAvatar1 />,
      componentTwo: <FirstPageTeamContentInfoList1 />,
    },
  ];
  const FirstPageTeamArraySecond = [
    {
      componentOne: <FirstPageTeamContentAvatar2 />,
      componentTwo: <FirstPageTeamContentInfoList2 />,
    },
  ];
  const FirstPageTeamArrayThird = [
    {
      componentOne: <FirstPageTeamContentAvatar3 />,
      componentTwo: <FirstPageTeamContentInfoList3 />,
    },
  ];
  const FirstPageTeamStyleGlobal = {
    customDivStyleConteiner: "first_page_team_Div",
  };
  const FirstPageTeamStyleSekondBlock = {
    customDivStyleConteiner: "first_page_team_Div",
    customDivStyleSubConteinerLeft: "first_page_team_second_block_Div_Left",
    customDivStyleSubConteinerRight: "first_page_team_second_block_Div_Right",
  };
  return (
    <>
      <CustomDiv
        divArray={FirstPageTeamArrayFirst}
        customClass={FirstPageTeamStyleGlobal}
      />

      <CustomDiv
        divArray={FirstPageTeamArraySecond}
        customClass={FirstPageTeamStyleSekondBlock}
      />

      <CustomDiv
        divArray={FirstPageTeamArrayThird}
        customClass={FirstPageTeamStyleGlobal}
      />
    </>
  );
}
export default FirstPageTeam;
