import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 15vw 85vw;
    grid-template-rows: 10vh 90vh;

    grid-template-areas:
      "sidebar header"
      "sidebar main  ";
`

export const HeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-self: start;
  justify-content: flex-end;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.05);
  background-color: ${props => props.theme.colors.white};
  width: 85vw;
  height: 10rem;
  font-size : 1.3rem;
  color: ${props => props.theme.colors.black};

  .calendarBox {
    height : 3rem;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 0 1.5rem;

    img {
      height : 3rem;
      width : 3rem;
    }
  }

  img {
    height : 3rem;
    width : 3rem;
    margin : 0 1.5rem;
  }

  .profile {
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin : 0 1.5rem;
    .profileImg {
      height : 3.3rem;
      width : 3.3rem;
      border-radius : 10rem;
    }
    .more {
      width : 1.6rem;
      height : 0.9rem;
    }

  .loginLink {
    text-decoration: none;
    color: ${props => props.theme.colors.black};
  }
`

export const SideBarContainer = styled.div`
  grid-area: sidebar;
  display : block;
  align-items : center;
  flex-flow : row wrap;
  background-color: ${props => props.theme.colors.gray00};
  width: 15vw;
  height: 100vh;

  
  .mainLogo {
    font-size : 2.5rem;
    height: 8rem;
    margin-left : 3rem;
    margin-top : 3rem;
    margin-bottom : 3rem;
    a {
      text-decoration: none;
      color : ${props => props.theme.colors.mainColor};
    }
  }

  .serviceLand {
    list-style : none;
    margin-top : 5rem;
    margin-left : 4rem;
    background-color: ${props => props.theme.colors.mainColor};
    color : ${props => props.theme.colors.white};
    width: 12vw;
    height: 60px;
    padding: 20px 24px 20px 16px;
    border-radius : 10px;
    font-size : 1.5rem;
    margin-bottom : 3rem;
  }

  .serviceList > li {
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    list-style : none;
    color : ${props => props.theme.colors.gray5};
    width: 13vw;
    border-radius : 10px;
    margin: 10px 0px 10px 0px;
    margin-left : 2rem;
    padding: 10px 0px 10px 0px;
    font-size : 18px;
    font-weight : 600;
    text-indent: 12px;
    h2 {
      font-size : 21px;
      font-weight : 600;
      margin: 0;
      padding: 0;

      &>a:hover {
      color: ${props => props.theme.colors.mainColor};
    }
    }

    

    h3 {
      font-size : 16px;
    }

    

    a {
      text-decoration: none;
      line-height: 2rem;
      color : ${props => props.theme.colors.gray5};
    }
  }

  .serviceList > * > * {
    padding-top : 1rem;
    padding-bottom : 1rem;
  }

  .serviceExtended {
    list-style : none;
    margin-left: 3rem;
  }

  .serviceExtended > li {
    padding-top : 1rem;
    padding-bottom : 1rem;
    padding-left :  2rem;
    font-size : 14px;
    width: 23rem;
    border-radius : 10px;
  }

  .alsoHere {
    border-radius : 10px;
    height: 52px;
    line-height: 58px;
    width: 26rem;
    background-color: ${props => props.theme.colors.gray2};
    color : ${props => props.theme.colors.mainColor} !important;

    a {
      text-decoration: none;
      color : ${props => props.theme.colors.mainColor} !important;
    }
  }

  .imHere {
    background-color: ${props => props.theme.colors.mainColor};
    color : ${props => props.theme.colors.white} !important;

    a {
      text-decoration: none;
      color : ${props => props.theme.colors.white} !important;
    }
  }

`

export const MainContainer = styled.div`
  margin : 2rem;
  font-size : 3rem;
  grid-area: main;

`