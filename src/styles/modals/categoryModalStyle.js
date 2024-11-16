import styled from "styled-components"

export const CategorySettingModal = styled.div`
    position: fixed;
    top: 20vh;
    left: 25vw;
    width: 115rem;
    height: 67rem;
    display: grid; 
    grid-template-rows: 70px 1fr;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    z-index: 999;

    .modalHeader {
        background-color: ${props => props.theme.colors.mainColor};
        color : ${props => props.theme.colors.white};
        border-radius : 10px 10px 0 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        .first {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
        
        }

        h2 {
            padding-left : 20px;
            font-size : 26px;
        }

        .mac-close-button {
            width: 25px;
            height: 25px;
            cursor: pointer;
            margin-left : 20px;
        }
    }

    .mainWrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        padding-left : 20px;
        padding-right: 20px;
        height: 57rem;

        .mainCatWrapper {
            height: 95%;
            width: 32%;
            border-right : 1px solid ${props => props.theme.colors.gray4};
            padding-right : 10px;

            h3 {
                padding: 10px;
                margin-bottom : 15px;
                margin-right : 10px;
                border-bottom : 1px solid ${props => props.theme.colors.gray4};
                font-weight : 600;
                font-size : 24px;
            }

            ul {
                list-style : none;
                color : ${props => props.theme.colors.dark};
                overflow-y : auto;
                height: 80%;

                li {
                    color : ${props => props.theme.colors.gray4};
                    height: 50px;
                    font-size : 20px;
                    text-indent: 2rem;
                    line-height: 50px;
                    margin-right: 15px;
                    margin-bottom : 10px;
                    border : 1px solid ${props => props.theme.colors.gray2};
                    border-radius : 10px;

                    &:hover {
                        background-color: ${props => props.theme.colors.gray00};
                        color : ${props => props.theme.colors.black};
                    }
                }
            }
        }

        .subCatWrapper {
            height: 95%;
            width: 32%;
            border-right : 1px solid ${props => props.theme.colors.gray4};
            padding-right : 10px;

            h3 {
                padding: 10px;
                margin-bottom : 15px;
                margin-right : 10px;
                border-bottom : 1px solid ${props => props.theme.colors.gray4};
                font-weight : 600;
                font-size : 24px;
            }

            ul {
                list-style : none;
                color : ${props => props.theme.colors.dark};
                overflow-y : auto;
                height: 80%;

                li {
                    color : ${props => props.theme.colors.gray4};
                    height: 50px;
                    font-size : 20px;
                    text-indent: 2rem;
                    line-height: 50px;
                    margin-right: 15px;
                    margin-bottom : 10px;
                    border : 1px solid ${props => props.theme.colors.gray2};
                    border-radius : 10px;

                    &:hover {
                        background-color: ${props => props.theme.colors.gray00};
                        color : ${props => props.theme.colors.black};
                    }
                }
            }
        }

        .extended {
            width: 65% !important;
        }
        .selectedCatWrapper {
            height: 95%;
            width: 32%;
            padding-left : 10px;

            

            .selectedCat {
                height: 80%;

                h3 {
                    padding: 10px;
                    margin-bottom : 15px;
                    margin-right : 10px;
                    border-bottom : 1px solid ${props => props.theme.colors.gray4};
                    font-weight : 700;
                    font-size : 24px;
                    color : ${props => props.theme.colors.mainColor};
                }
            
                h2 {
                    border : 1px solid ${props => props.theme.colors.gray2};
                    border-radius : 10px;
                    font-size : 24px;
                    margin-top : 10px;
                    padding: 15px;
                    margin-right: 10px;
                    text-align : center;
                }

                input {
                    width : 95%;
                    border : 1px solid ${props => props.theme.colors.gray2};
                    border-radius : 10px;
                    font-size : 24px;
                    padding: 15px;
                    margin-right: 10px;
                    text-align : center;

                    &::placeholder {
                        color : ${props => props.theme.colors.gray2};
                        font-size : 18px;
                    }
                
                }

                h5 {
                    margin-top : 15px;
                    color : ${props => props.theme.colors.gray4};
                    font-size : 18px;
                    text-indent: 1rem;
                
                }

                p {
                    margin-top : 10px;
                    color : ${props => props.theme.colors.gray4};
                    font-size : 16px;
                    margin-left : 10px;
                    padding-right : 15px;
                    text-align : justify;
                }
            
            }


            .buttons {
                margin-top : 5px;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                .deleteBtn {
                    width: 100%;
                    height: 70px;
                    line-height: 100%;
                    font-size: 20px;
                    font-weight : 700;
                    color : ${props => props.theme.colors.white};
                    background-color: #FF8D8D;
                    border-radius : 8px;
                    border: 1px solid #FF8F8F;
                    margin-bottom : 10px;

                    &:hover {
                        cursor : pointer;
                    }
                }

                .addBtn {
                    width: 60%;
                    height: 70px;
                    line-height: 100%;
                    font-size: 20px;
                    font-weight : 700;
                    color : ${props => props.theme.colors.white};
                    background-color: ${props => props.theme.colors.mainColor};
                    border-radius : 8px;
                    border: 1px solid ${props => props.theme.colors.mainColor};

                    &:hover {
                        cursor : pointer;
                    }
                
                }

                .returnBtn {
                    width: 35%;
                    height: 70px;
                    line-height: 100%;
                    font-size: 20px;
                    font-weight : 700;
                    color : ${props => props.theme.colors.white};
                    background-color: ${props => props.theme.colors.gray2};
                    border-radius : 8px;
                    border: 1px solid ${props => props.theme.colors.gray2};

                    &:hover {
                        cursor : pointer;
                    }
                
                }
            }
        }
    }


`