import * as h from "../../styles/admin/adminMenuStyle"
import CalendarIcon from "../../assets/imgs/calendar.png";
import AlarmFalseIcon from "../../assets/imgs/alarmFalse.png";
import SettingIcon from "../../assets/imgs/setting.png";
import SkipToggleIcon from "../../assets/imgs/skipToggle.png";
import GrayBackground from "../../assets/imgs/grayBackground.png";

const MainHeader = () => {

  return (
    <h.HeaderContainer>
      <div className="calendarBox">
        <img alt="" src={CalendarIcon} />
        <h1>2024년 6월 12일</h1>
      </div>
      <img src={AlarmFalseIcon} alt=""/>
      <img src={SettingIcon} alt=""/>
      <div className="profile">
        <img className="profileImg" src={GrayBackground} alt=""/>
        <h1>최태영 사장님</h1>
        <img className="more" alt="" src={SkipToggleIcon} />
      </div>
    </h.HeaderContainer>
  )
}

export default MainHeader;