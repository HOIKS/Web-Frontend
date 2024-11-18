import styled from "styled-components";

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