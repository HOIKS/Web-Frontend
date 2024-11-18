import styled from "styled-components";

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