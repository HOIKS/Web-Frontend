import * as c from "../styles/contents/reportStyle.js";
import * as l from "../styles/common/layoutStyle.js";

import ReportW from "../assets/imgs/ReportW.jpg"


const ReportContent = () => {

    return (
        <l.MainContainer>
            <c.ReportContainer>
                <img src={ReportW} alt="reportIcon" />
            </c.ReportContainer>
        </l.MainContainer>
    )
}
export default ReportContent;