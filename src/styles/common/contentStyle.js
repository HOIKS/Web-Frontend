import styled from "styled-components"
import LoginBackground from "../../assets/imgs/landingImage.png"


export const LandingContentContainer = styled.div`
  display: flex;

  .landingSection {
    margin-top : 5rem;
    margin-left : 10rem;
  
  }

  .landingTitle {
    font-size : 8rem;
    display : inline-block;
  }

  .landingSubTitle {
    margin-left : 2rem;
    display : inline-block;  
    color : ${props => props.theme.colors.gray2};
  }

  .accentOne {
    color : ${props => props.theme.colors.mainColor};
    font-weight : 800;
  }

  .accentTwo {
    color : ${props => props.theme.colors.mainColor};
    font-weight : 700;

  }

  .landingDesc1 {
    font-size : 5rem;
    font-weight : 600;
  }


  .landingDesc2 {
    margin-top : 3rem;
    margin-left : 3rem;
    font-weight : 500;
    line-height : 4rem;
    color : ${props => props.theme.colors.gray4};
  }

  .gotoAuth {
    text-decoration : none;
    display : flex;
    justify-content: center;
    align-items: center;
    font-size : 32px; 
    background-color: ${props => props.theme.colors.mainColor};
    color : ${props => props.theme.colors.white};
    width: 350px;
    height: 90px;
    padding: 12px 20px 12px 24px;
    border-radius : 100px;
    margin-top : 25rem;
    margin-bottom : 2rem;
  }

  .gotoRegister {
    margin-left : 5rem;
    text-decoration : none;
    color : ${props => props.theme.colors.mainColor};
  }

  .landingImage {
    margin-top : 25rem;
    margin-left: 20rem;
    width : 70rem;
  }

`
export const LoginContentContainer = styled.div`

  display: flex;

  form {
    padding-top: 10rem;
    padding-left: 3rem;
  }

  form > button {
    margin-left: 45rem;
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 85px;
    font-size : 32px;
    border-radius : 60px;
    border : none;
    background-color: ${props => props.theme.colors.mainColor};
    color : ${props => props.theme.colors.white};
    font-weight : 700;
  
  }

  h3 {
    color : ${props => props.theme.colors.mainColor};
    display: inline-block;
    width: 10rem;
    height: 5rem;
  }


  .miscSection {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    height: 5rem;
    margin-top: 4rem;
    margin-left: 11rem;
    
  }
    
  .inputSection {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    margin-top: 7rem;

  }

  .inputLabel {
    font-size : 4rem;
    line-height : -4rem;
  }

  .inputInput {
    width: 65rem;
    height: 8rem;
    line-height: 100%;
    text-indent: 3rem;
    font-size: 22px;
    color : ${props => props.theme.colors.gray2};
    background-color: ${props => props.theme.colors.gray00};
    border-radius : 15px;
    border: 0;
    border-color : ${props => props.theme.colors.gray00};

  }

  .inputInput:focus{
    border: 2px solid ${props => props.theme.colors.mainColor};
    outline: none;
    color : ${props => props.theme.colors.black};
  }

  .idSaveCheck {
    width: 23px;
    height: 23px;
  
  }

  .loginSection {
    margin-top : 4rem;
    margin-left : 10rem;
  
  }

  .loginDescSection {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    margin-top : 4rem;
    margin-left : 15rem;
    background: 
      linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.95)), 
      url(${LoginBackground}); /* 이미지 경로 */
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  .loginTitle {
    font-size : 8rem;
    display : inline-block;
  }

  .loginSubTitle {
    margin-left : 2rem;
    display : inline-block;  
    color : ${props => props.theme.colors.gray2};
  }

  .accentOne {
    color : ${props => props.theme.colors.mainColor};
    font-weight : 800;
  }

  .accentTwo {
    color : ${props => props.theme.colors.mainColor};
    font-weight : 700;

  }

  .loginDesc1 {
    margin-top : 10rem;
    font-size : 5rem;
    font-weight : 600;
  }


  .loginDesc2 {
    margin-top : 3rem;
    margin-left : 3rem;
    font-weight : 500;
    line-height : 4rem;
    color : ${props => props.theme.colors.gray4};
  }

`
export const MenuSettingContainer = styled.div`

  .categoryView {
    margin-top: 25px;
    margin-left : 12px;
    margin-bottom : 15px;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
  }

  .categoryTitle {
    text-indent: 2px;
    font-size : 2rem;
    font-weight : 700;
  }

  .categorySelection {
    margin-right : 24px;
  }
    select {
      margin-top: 10px;
      padding: 10px;
      width: 280px;
      height: 50px;
      font-size: 18px;
      border-color: ${props => props.theme.colors.mainColor};
      box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05);
      border-radius : 8px;
    }

  .categorySettingButton {
    width: 160px;
    height: 50px;
    margin-top: 28px;
    margin-right: 10px;
    font-size: 20px;
    font-weight: 500;
    background-color: ${props => props.theme.colors.mainColor};
    color: ${props => props.theme.colors.white};
    border-radius: 10px;
    border: none;
  }
  .menuView{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px 10px;
    margin-left : 15px;
    margin-top : 25px;
  }

  .menuInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
  }

  .menuBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }

    .menuCreateButton {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .menuCreateButton:hover {
      cursor: pointer;
      background-color: ${props => props.theme.colors.mainColor}; 
    }
  }


  .menuImg {
    background-color: ${props => props.theme.colors.gray00};
    width: 200px;
    height: 200px;
    margin-bottom: 2rem; 
    border-radius : 15px;
  
  }

  .menuCreateButton {
    background-color: ${props => props.theme.colors.gray00};
    background-size: contain;
    width: 200px;
    height: 260px;
    border-radius : 15px;
  }

  .menuName {
    font-size : 18px;
    font-weight : 600;
  }

  .menuPrice {
    font-size : 18px;
    font-weight : 600;
  }

`
export const CountSettingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;

  grid-template-areas:
    "select select"
    "left    right  ";

  .countSelectButtons {
    grid-area: select;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    
    .selectorWrapper {
     
      button {
        width: 200px;
        height: 60px;
        margin-right: 10px;
        font-size: 20px;
        font-weight: 500;
        background-color: ${props => props.theme.colors.gray00};
        color: ${props => props.theme.colors.mainColor};
        border-radius: 10px;
        border: none;
      }
    }

    .settingWrapper {
    
      button {
        width: 100px;
        height: 50px;
        margin-right: 10px;
        font-size: 20px;
        font-weight: 500;
        background-color: ${props => props.theme.colors.gray00};
        color: ${props => props.theme.colors.mainColor};
        border-radius: 10px;
        border: none;
      }
    }
  }

  .leftChart {
    grid-area: left;
    margin: 20px;
    padding: 40px;
    border-radius: 20px;
    border : 1px solid ${props => props.theme.colors.gray2};

    h3 {
      color : ${props => props.theme.colors.mainColor};
      font-size : 20px;
    }

    h1 {
      font-size : 40px;
      fnot-weight : 600;
      margin-bottom : 30px;
    }

    .statusWrapper {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;

      color: ${props => props.theme.colors.gray4};

      .statusItem {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size : 20px;
        margin-bottom : 20px;
      }

      .graphItem > img {
        width: 100%;
      }
    }
  }

  .rightChart {
    grid-area: right;
    margin: 20px;
    padding: 40px;
    border-radius: 20px;
    border : 1px solid ${props => props.theme.colors.gray2};

    h3 {
      font-size : 20px;
      padding-bottom : 10px;
      border-bottom : 1px solid ${props => props.theme.colors.gray2};
    }

    .tableWrapper {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;

      .tableItem {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size : 20px;
        font-weight : 600;
        color: ${props => props.theme.colors.gray4};
        padding-top : 15px;
        padding-bottom : 15px;
        border-bottom : 1px solid ${props => props.theme.colors.gray2};
    
      }
    }
    .buttonWrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      button {
        width: 120px;
        height: 50px;
        font-size: 20px;
        font-weight: 500;
        background-color: ${props => props.theme.colors.gray00};
        color: ${props => props.theme.colors.mainColor};
        border-radius: 10px;
        border: none;
        margin-top : 20px;
      }
    }
  }
`
export const PaymentSettingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;

  grid-template-areas:
    "select"
    "view  ";

  .paymentSettingButtons {
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 0;
    grid-area: select;

    button {
      width: 200px;
      height: 60px;
      margin-right: 10px;
      font-size: 20px;
      font-weight: 500;
      background-color: ${props => props.theme.colors.mainColor};
      color: ${props => props.theme.colors.white};
      border-radius: 10px;
      border: none;
    }
  }


  .paymentSettingView {
    grid-area: view;
    margin: 20px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px 10px;

    .paymentAdd {
      border: 0 !important;

      h3 {
        color : ${props => props.theme.colors.white};
        font-size : 30px;
        font-weight : 600;
        margin-bottom : 30px;
      }

      img {
        height: 80px !important;
        width: 80px !important;
      }
    
      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.mainColor};
      }
    } 

    .paymentSettingItem {
      background-color: ${props => props.theme.colors.gray00};
      border: 2px solid ${props => props.theme.colors.mainColor};
      border-radius: 10px;
      padding: 10px;
      width: 180px;
      height: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h3 {
        font-size : 30px;
        font-weight : 600;
        margin-top: 10px;
        margin-bottom: 30px;
      }
      img {
        width: 120px;
        height: 80px;
        margin-bottom: 10px;
      }
    }
  
  }

`

export const DashboardContainer = styled.div`

  display: grid;
  grid-template-columns: 360px 520px 360px;
  grid-template-rows: 200px 500px;
  gap: 20px 20px;
  height: 100%;


  .BoxNorm {
    border-radius: 15px;
    background-color: ${props => props.theme.colors.gray00};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 20px;
  }

  .BoxGraph {
    grid-column: 1 / 3;
    padding: 20px;
  }


  .weatherBox {
    display: grid;
    grid-template-areas:
      "temperature  icon"
      "desc         icon";
    gap: 10px 10px;

    .weatherTemperature {
      grid-area: temperature;
    
      h1 {
        font-size: 36px;
        font-weight: 700;
        color: ${props => props.theme.colors.mainColor};
      }

      p {
        font-size : 14px;
        font-weight : 500;
        color : ${props => props.theme.colors.gray4};
      
      }
    }

    .weatherDesc {
      grid-area: desc;

      h3 {
        font-size : 18px;
        padding-bottom : 10px;
        padding-top : 10px;
        margin-top : 15px;

        span {
          font-weight : 700;
          color : ${props => props.theme.colors.mainColor};
        }
      }

      p {
        font-size : 14px;
        font-weight : 500;
        color : ${props => props.theme.colors.gray4};
      }
    }

    .weatherIcon {
      grid-area: icon;
      width: 120px;
    }
  
  }

  .countBox {

    .countTitle {
      h3 {
        font-size : 20px;
        font-weight : 700;
        color : ${props => props.theme.colors.black};
      }
    }

    .countGraph {
      .countGraphValue {
        margin-top : 50px;
        margin-left : 57%;

        p {
          font-size : 14px;
          text-align : right;
          padding-right : 5px;
        }

        h1 {
          font-size: 36px;
        
        }
      }
    }
  
  }

  .recentBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    
    .recentTitle {
      h3 {
        width: 50%;
        font-size : 22px;
        font-weight : 700;
        color : ${props => props.theme.colors.black};
      }

      p {
        font-size : 14px;
        font-weight : 500;
        color : ${props => props.theme.colors.gray4};
      
      }
    }

    .recentItem {
      h3 {
        width: 50%;
        font-size : 20px;
        font-weight : 600;
        color : ${props => props.theme.colors.mainColor};
      
      }

      p {
        font-size : 16px;
        font-weight : 500;
        color : ${props => props.theme.colors.gray4};
      
      }
    
    }

    .recentTotal {
      border-top : 1px solid ${props => props.theme.colors.gray2};
      padding-top : 10px;
      justify-content: flex-end;
      
      p {
        font-size : 22px;
      
      }
    
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

    }
  }


  .graphBox {
    
    .graphTitle {

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .graphIndex {
        width: 40%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        h3 {
          font-weight : 500;
        }

      }

      h1 {
        font-size : 40px;
        font-weight : 500;
        color : ${props => props.theme.colors.gray4};
      
      }

      h3 {
        font-size : 20px;
        font-weight : 700;
        color : ${props => props.theme.colors.black};
      }
    }

    .graphCanvas {
      img {
        width: 105%;
      }
        
      div {
        color : ${props => props.theme.colors.gray4};
        font-size : 18px;
        font-weight : 500;
        padding-left : 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .rankBox {
    .rankTitle {
      font-size : 26px;
      margin-bottom : 20px;
      span {
        color : ${props => props.theme.colors.mainColor};
      }
    }

    .rankItem {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;


      img {
        width: 120px;
        padding: 8px;
        border-radius: 15px;
      }

      .rankItemInfo {
        padding-top: 5px;
        padding-left: 10px;

        h3 {
          font-size : 24px;
          color : ${props => props.theme.colors.mainColor};
          padding-bottom : 10px;
        
        }

        p {
          font-size : 16px;
          color : ${props => props.theme.colors.gray4};
        }
      }
    
    }
  
  }

`