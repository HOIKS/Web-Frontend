import styled from "styled-components";

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
    padding-right: 5px;

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
      padding-top: 15px;
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