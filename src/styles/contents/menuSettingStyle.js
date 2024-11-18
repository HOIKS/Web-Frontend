import styled from "styled-components";

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

    &:hover {
      cursor: pointer;
    }
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