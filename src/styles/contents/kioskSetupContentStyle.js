import styled from "styled-components";

export const KioskSetupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;

  grid-template-areas:
    "select"
    "view  ";

  .buttons {
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

      &:hover {
        cursor: pointer;
      }
    }
  }


  .setupView {
    grid-area: view;
    margin: 20px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, auto));
    grid-template-rows: 1fr 1fr 1fr;
    gap: 8px;

    .deviceAdd {
      border: 0 !important;
      background-color: ${props => props.theme.colors.gray2} !important;

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
        background-color: ${props => props.theme.colors.mainColor} !important;
      }
    } 

    .deviceSetupItem {
      background-color: ${props => props.theme.colors.gray00};
      border: 2px solid ${props => props.theme.colors.mainColor};
      border-radius: 10px;
      padding: 10px;
      width: 190px;
      height: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.gray2};
      }

      h3 {
        font-size : 26px;
        font-weight : 600;
        margin-top: 10px;
        margin-bottom: 30px;
      }

      img {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
      }
    }
  }


`