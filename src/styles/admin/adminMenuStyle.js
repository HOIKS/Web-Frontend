import styled from "styled-components";

export const HeaderContainer = styled.div`
  display : flex;
  align-items : center;
  justify-content: flex-end;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.05);
  background-color: ${props => props.theme.colors.white};
  width: 161.6rem;
  height: 10rem;
  font-size : 1.3rem;
  color: ${props => props.theme.colors.black};

  .calendarBox {
    height : 3rem;
    display : flex;
    align-items : center;
    justify-content : space-between;
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
  }
`