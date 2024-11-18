import styled from "styled-components";
import LoginBackground from "../../assets/imgs/landingImage.png"
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

    &:hover {
      cursor: pointer;
    }
  
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
    
    .plusSection {
      
      padding-top: 5rem;
      text-align: right;

      a {
        display: inline-block;
        margin-top: 1rem;
        text-decoration: none;
        color : ${props => props.theme.colors.gray4};
      }
    }
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