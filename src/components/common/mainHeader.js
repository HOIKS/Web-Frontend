import * as l from "../../styles/common/layoutStyle.js"
import * as m from "../../styles/modals/modalStyle.js"
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { GetProfile, Logout } from "../api/authService";
import CalendarIcon from "../../assets/imgs/calendar.png";
import AlarmFalseIcon from "../../assets/imgs/alarmFalse.png";
import SettingIcon from "../../assets/imgs/setting.png";
import SkipToggleIcon from "../../assets/imgs/skipToggle.png";
import GrayBackground from "../../assets/imgs/grayBackground.png";
import { useNavigate } from "react-router-dom"; 
import { useState, useEffect } from "react";

const MainHeader = () => {

  let [userProfile, setUserProfile] = useState({});
  let [isProfileOpen, setIsProfileOpen] = useState(false);

  var formattedDate = format(new Date(), "yyyy년 M월 d일");
  const navigate = useNavigate();

  useEffect(() => {
    async function effectGetProfile() {
      try {
        const userProfile = await GetProfile();
        setUserProfile(userProfile);
        
      } catch (error) {
          console.error(error);
      }
    }
   effectGetProfile();
  }, [])

  const handleLogout = () => {
    Logout();
    window.alert("로그아웃 되었습니다. 로그인 화면으로 이동합니다.")
    navigate("/login");
  }

  return (
    <l.HeaderContainer>
      <l.HeaderContainer>
        <div className="calendarBox">
          <img alt="" src={CalendarIcon} />
          <h1>{formattedDate}</h1>
        </div>
        <img src={AlarmFalseIcon} alt=""/>
        <img src={SettingIcon} alt="" onClick={() => setIsProfileOpen(!isProfileOpen)}/>
        <div className="profile">
          <img className="profileImg" src={GrayBackground} alt=""/>
          <h1>{userProfile.name}</h1>
          <img className="more" alt="" src={SkipToggleIcon} onClick={() => setIsProfileOpen(!isProfileOpen)} />
        </div>
        {isProfileOpen && (
          <m.ProfileModal>
            <h2>{userProfile.name} 님 반가워요!</h2>
            <h2><button onClick={handleLogout}>로그아웃</button></h2>
          </m.ProfileModal>
        )}
        </l.HeaderContainer>
    </l.HeaderContainer>
  )
}

export default MainHeader;