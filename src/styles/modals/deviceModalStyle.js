import styled from "styled-components";

export const KioskSetupModal = styled.div`
    position: fixed;
    top: 20vh;
    left: 25vw;
    width: 110rem;
    height: 50rem;
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
        padding: 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;

        .left {
            height: 95%;
            width: 30%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-evenly;
            align-items: center;
            border-right : 1px solid ${props => props.theme.colors.gray2};

            h3 {
                width: 68%;
                font-size : 26px;
                color : ${props => props.theme.colors.mainColor};
                padding-bottom : 10px;
                margin-bottom : 20px;
                text-align : center;
                border-bottom : 1px solid ${props => props.theme.colors.gray2};
            }
            img {
                width: 70%;
            
            }
        }

        .right {
            height: 95%;
            width: 70%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-evenly;
            align-items: left;
            margin-left: 25px;

            h3 {
                font-size : 24px;
                color : ${props => props.theme.colors.dark};
                text-indent: 1rem;
            }

            table {
                width: 95%;
                border-collapse: collapse;
                margin-left: 10px;
                margin-right: 10px;
                font-size : 18px;
                
                tbody {
                    display: table-row-group;
                    vertical-align: middle;
                    border-color: inherit;
                }

                tr > td:nth-child(1) {
                    text-align: left;
                    width: 100px;
                }

                }
                th, td {
                    padding: 10px 10px;
                    border-bottom: 1px solid ${props => props.theme.colors.gray2};
                }
            }

            .buttons {
                button {
                    margin-top: 10px;
                    margin-left: 10px;
                    height: 40px;
                    line-height: 100%;
                    font-size: 20px;
                    background-color: ${props => props.theme.colors.gray2};
                    border: 5px solid ${props => props.theme.colors.gray2};
                    border-radius: 10px;
                    color : ${props => props.theme.colors.black};

                    &:hover {
                        cursor: pointer;
                    }
                }

                .delete {
                    width: 15rem;
                    background-color: #FF8D8D;
                    border: 5px solid #FF8D8D;
                    color : ${props => props.theme.colors.white};
                }

                .reissue {
                    width: 22rem;
                
                }     
            }      
    }

`

export const KioskAddModal = styled.div`
    position: fixed;
    top: 20vh;
    left: 25vw;
    width: 100rem;
    height: 50rem;
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
        padding: 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;

        .left {
            height: 95%;
            width: 30%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-evenly;
            align-items: center;
            border-right : 1px solid ${props => props.theme.colors.gray2};

            h3 {
                width: 65%;
                font-size : 28px;
                color : ${props => props.theme.colors.mainColor};
                padding-bottom : 10px;
                margin-bottom : 15px;
                text-align : center;
                border-bottom : 1px solid ${props => props.theme.colors.gray2};
            }
            img {
                width: 70%;
            
            }
        }

        .right {
            height: 95%;
            width: 70%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-evenly;
            align-items: left;
            margin-left: 25px;

            h3 {
                font-size : 24px;
                color : ${props => props.theme.colors.dark};
                text-indent: 1rem;
            }

            .name {
                display: flex;
                flex-flow: row nowrap;
                justify-content: left;
                align-items: center;

                p {
                    color : ${props => props.theme.colors.gray6};
                }

                input {
                    width: 30rem;
                    height: 6rem;
                    line-height: 100%;
                    text-indent: 2rem;
                    font-size: 18px;
                    color : ${props => props.theme.colors.gray6};
                    background-color: ${props => props.theme.colors.white};
                    outline: none;
                    border-radius : 8px;
                    margin-left : 35px;
                    border: 1px solid ${props => props.theme.colors.mainColor};
                }

            }

            .desc {
                font-size : 18px;
                padding: 1rem;
                height: 12rem;
            
            }
        
            

            .buttons {
                button {
                    margin-top: 10px;
                    margin-left: 10px;
                    height: 40px;
                    line-height: 100%;
                    font-size: 20px;
                    background-color: ${props => props.theme.colors.gray2};
                    border: 5px solid ${props => props.theme.colors.gray2};
                    border-radius: 10px;
                    color : ${props => props.theme.colors.black};

                    &:hover {
                        cursor: pointer;
                    }
                }

                .cancel {
                    width: 15rem;
                    background-color: #FF8D8D;
                    border: 5px solid #FF8D8D;
                    color : ${props => props.theme.colors.white};
                }

                .add {
                    width: 22rem;
                }     
            }      
    }

    
    
`