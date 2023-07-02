import CustomDiv from "../../../custom-camponents/Custom-static-components/CustomDiv";
import { FirstPageTeamContentAvatar1, FirstPageTeamContentInfoList1 } from "./FirstPageTeamBlockFirst";
import "./FirstPageTeam.css"
function FirstPageTeam() {
    const FirstPageTeamArray = [
        {
          id: 1,
          componentOne: <FirstPageTeamContentAvatar1 />,
          componentTwo: <FirstPageTeamContentInfoList1 />,
        },
      ];
    return (
        <>
        <CustomDiv divArray={FirstPageTeamArray}/>
        </>
    )
}
export default FirstPageTeam;