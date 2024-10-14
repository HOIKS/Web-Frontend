import * as l from "../../styles/common/layoutStyle"
import { Link } from "react-router-dom";
import { format } from "date-fns";
import CalendarIcon from "../../assets/imgs/calendar.png";
import AlarmFalseIcon from "../../assets/imgs/alarmFalse.png";
import SettingIcon from "../../assets/imgs/setting.png";
import SkipToggleIcon from "../../assets/imgs/skipToggle.png";
import GrayBackground from "../../assets/imgs/grayBackground.png";

const MainHeader = ({isLogin}) => {

  var formattedDate = format(new Date(), "yyyy년 M월 d일");

  if (!isLogin) {
    return (
      <l.HeaderContainer>
          <div className="loginLink">   
              <h1><Link to="/login"> 로그인 </Link></h1>
          </div>
      </l.HeaderContainer>
    )
  } else {
    return (
      <l.HeaderContainer>
        <div className="calendarBox">
          <img alt="" src={CalendarIcon} />
          <h1>{formattedDate}</h1>
        </div>
        <img src={AlarmFalseIcon} alt=""/>
        <img src={SettingIcon} alt=""/>
        <div className="profile">
          <img className="profileImg" src={GrayBackground} alt=""/>
          <h1>최태영 사장님</h1>
          <img className="more" alt="" src={SkipToggleIcon} />
        </div>
      </l.HeaderContainer>
    )
  }
}

export default MainHeader;