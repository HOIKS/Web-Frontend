import styled from "styled-components";

export const FinishCalendarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2.5rem;
    width: 100%;
    height: 65%;

    .statusContainer {
        width: 25%;
        margin: 20px;
        padding: 40px;
        border-radius: 20px;
        border : 1px solid ${props => props.theme.colors.gray2};
    

        .statusWrapper {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: space-between;

            color: ${props => props.theme.colors.dark};
            .statusTitleWrapper {
                margin-bottom: 40px;
            }

            .statusTitle {
                color: ${props => props.theme.colors.mainColor};
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 10px;
            }

            .statusValue {
                font-size: 40px;
                font-weight: 600;
            }

            .statusItem {
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                font-size : 20px;
                margin-bottom : 20px;
            }
        }

        .detailReportButton {
            margin-top: 20px;
            background-color: ${props => props.theme.colors.gray2};
            color: ${props => props.theme.colors.mainColor};
            border-radius: 10px;
            border: none;
            padding: 10px 20px;
            width: 210px;
            height: 60px;
            font-size: 20px;
            font-weight: 600;

            &:hover {
                background-color: ${props => props.theme.colors.mainColor};
                color: white;
                cursor: pointer;
            }
        }
    }

`;