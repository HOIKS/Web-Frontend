import * as l from "../../styles/common/layoutStyle"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

const SideBar = ({isLogin}) => {

  const location = useLocation();

  if (isLogin) {
    switch(location.pathname) {
      case "/dashboard": {
        return (
          <l.SideBarContainer>
          <div className="mainLogo">
            <h1>HOIKS</h1>
          </div>
  
          <ul className="serviceList">
            <li className="imHere"><h2><Link to="/dashboard">대시보드</Link></h2></li>
            <li>
              <h3 style = {{marginBottom : 10}}> 메인 메뉴</h3>
              <h2> <Link to="/manage/menu">관리</Link> </h2>
              {/* <ul className="serviceExtended">
                <li> <h3> <Link to="/manage/menu"> 메뉴 </Link> </h3></li>
                <li> <h3> <Link to="/manage/count"> 시재 </Link> </h3></li>
                <li> <h3> <Link to="/manage/payment"> 결제 </Link> </h3></li>
              </ul> */}
            </li>
            <li> <h2> <Link to="/finish/kiosk">마감</Link></h2></li>
            <li> <h2> <Link to="/report">보고서</Link></h2></li>
          </ul>
          </l.SideBarContainer>
        )
      }
      case "/manage/menu": {
        return (
          <l.SideBarContainer>
          <div className="mainLogo">
            <h1>HOIKS</h1>
          </div>
  
          <ul className="serviceList">
            <li><h2><Link to="/dashboard">대시보드</Link></h2></li>
            <li>
              <h3 style = {{marginBottom : 10}}> 메인 메뉴</h3>
              <h2 className="alsoHere"> <Link to="/manage/menu">관리</Link> </h2>
              <ul className="serviceExtended">
                <li className="imHere"> <h3> <Link to="/manage/menu"> 메뉴 </Link> </h3></li>
                <li> <h3> <Link to="/manage/count"> 시재 </Link> </h3></li>
                <li> <h3> <Link to="/manage/payment"> 결제 </Link> </h3></li>
              </ul>
            </li>
            <li> <h2><Link to="/finish/kiosk">마감</Link></h2></li>
            <li> <h2><Link to="/report">보고서</Link></h2></li>
          </ul>
          </l.SideBarContainer>
        )
      }
      case "/manage/count": {
        return (
          <l.SideBarContainer>
          <div className="mainLogo">
            <h1>HOIKS</h1>
          </div>
  
          <ul className="serviceList">
            <li><h2><Link to="/dashboard">대시보드</Link></h2></li>
            <li>
              <h3 style = {{marginBottom : 10}}> 메인 메뉴</h3>
              <h2 className="alsoHere"> <Link to="/manage/menu">관리</Link> </h2>
              <ul className="serviceExtended">
                <li> <h3> <Link to="/manage/menu"> 메뉴 </Link> </h3></li>
                <li className="imHere"> <h3> <Link to="/manage/count"> 시재 </Link> </h3></li>
                <li> <h3> <Link to="/manage/payment"> 결제 </Link> </h3></li>
              </ul>
            </li>
            <li> <h2><Link to="/finish/kiosk">마감</Link></h2></li>
            <li> <h2><Link to="/report">보고서</Link></h2></li>
          </ul>
          </l.SideBarContainer>
        )
      }
      case "/manage/payment": {
        return (
          <l.SideBarContainer>
          <div className="mainLogo">
            <h1>HOIKS</h1>
          </div>
  
          <ul className="serviceList">
            <li><h2><Link to="/dashboard">대시보드</Link></h2></li>
            <li>
              <h3 style = {{marginBottom : 10}}> 메인 메뉴</h3>
              <h2 className="alsoHere"> <Link to="/manage/menu">관리</Link> </h2>
              <ul className="serviceExtended">
                <li> <h3> <Link to="/manage/menu"> 메뉴 </Link> </h3></li>
                <li> <h3> <Link to="/manage/count"> 시재 </Link> </h3></li>
                <li className="imHere"> <h3> <Link to="/manage/payment"> 결제 </Link> </h3></li>
              </ul>
            </li>
            <li> <h2><Link to="/finish/kiosk">마감</Link></h2></li>
            <li> <h2><Link to="/report">보고서</Link></h2></li>
          </ul>
          </l.SideBarContainer>
        )
      }
      case "/finish/kiosk": {
        return (
          <l.SideBarContainer>
          <div className="mainLogo">
            <h1>HOIKS</h1>
          </div>
  
          <ul className="serviceList">
            <li><h2><Link to="/dashboard">대시보드</Link></h2></li>
            <li>
              <h3 style = {{marginBottom : 10}}> 메인 메뉴</h3>
              <h2> <Link to="/manage/menu">관리</Link> </h2>
            </li>
            <li> 
              <h2 className="alsoHere">마감</h2>
              <ul className="serviceExtended">
                  <li className="imHere"> <h3> <Link to="/finish/kiosk"> 키오스크 마감</Link> </h3></li>
                  <li> <h3> <Link to="/finish/calendar"> 캘린더식 마감 보고서 </Link> </h3></li>
              </ul>
            </li>
              
            <li> <h2><Link to="/report">보고서</Link></h2></li>
          </ul>
          </l.SideBarContainer>
        )
      }
      case "/finish/calendar": {
        return (
          <l.SideBarContainer>
          <div className="mainLogo">
            <h1>HOIKS</h1>
          </div>
  
          <ul className="serviceList">
            <li><h2><Link to="/dashboard">대시보드</Link></h2></li>
            <li>
              <h3 style = {{marginBottom : 10}}> 메인 메뉴</h3>
              <h2> <Link to="/manage/menu">관리</Link> </h2>
            </li>
            <li> 
              <h2 className="alsoHere" >마감</h2>
              <ul className="serviceExtended">
                  <li> <h3> <Link to="/finish/kiosk">키오스크 마감</Link> </h3></li>
                  <li className="imHere" > <h3> <Link to="/finish/calendar"> 캘린더식 마감 보고서 </Link></h3></li>
              </ul>
            </li>
              
            <li> <h2><Link to="/report">보고서</Link></h2></li>
          </ul>
          </l.SideBarContainer>
        )
      }
      case "/report": {
        return (
          <l.SideBarContainer>
          <div className="mainLogo">
            <h1>HOIKS</h1>
          </div>
  
          <ul className="serviceList">
            <li><h2><Link to="/dashboard">대시보드</Link></h2></li>
            <li>
              <h3 style = {{marginBottom : 10}}> 메인 메뉴</h3>
              <h2> <Link to="/manage/menu">관리</Link> </h2>
              {/* <ul className="serviceExtended">
                <li> <h3> 메뉴 </h3></li>
                <li> <h3> 시재 </h3></li>
                <li> <h3> 결제 </h3></li>
              </ul> */}
            </li>
            <li> <h2><Link to="/finish/kiosk">마감</Link></h2></li>
            <li className="imHere"> <h2><Link to="/report">보고서</Link></h2></li>
          </ul>
          </l.SideBarContainer>
        )
      }
    }
  } else {
  }
}
  
  export default SideBar;