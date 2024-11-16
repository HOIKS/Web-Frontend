import styled from "styled-components"

export const ProfileModal = styled.div`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    top: 65px;
    right: 10px;
    width: 220px;
    height: 120px;
    padding: 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    z-index: 999;
    
    h2 {
        font-size: 20px;
    
    }

    button {
        margin-top: 10px;
        width: 100px;
        height: 40px;
        line-height: 100%;
        font-size: 18px;
        background-color: ${props => props.theme.colors.gray2};
        border: 5px solid ${props => props.theme.colors.gray2};
        color : ${props => props.theme.colors.black};
    }

`

export const MenuCommonModal = styled.form`
    position: fixed;
    top: 20vh;
    left: 25vw;
    width: 110rem;
    height: 71rem;
    padding-bottom: 20px;
    display: grid; 
    grid-template-rows: 70px 1fr 2fr 1fr;
    gap: 15px;
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

    .menuTop {
        padding-left : 20px;
        padding-right : 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        input {
            width: 35rem;
            height: 7rem;
            line-height: 100%;
            text-indent: 2rem;
            font-size: 20px;
            font-weight: 700;
            color : ${props => props.theme.colors.gray6};
            background-color: ${props => props.theme.colors.white};
            outline: none;
            border-radius : 8px;
            border: 0;
            border: 2px solid ${props => props.theme.colors.mainColor};
        }
        
        select {
            width: 32rem;
            height: 7rem;
            font-size: 18px;
            border-color: ${props => props.theme.colors.mainColor};
            margin-left : 2rem;
            border-radius : 8px;
            padding-left : 1rem;
        }
    }


    .menuMid {
        padding-left : 20px;
        padding-right : 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        img {
            width: 30rem;
            height: 30rem;
            margin-left : 2.5rem;
            background-color: ${props => props.theme.colors.gray00};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius : 8px;
            border: 1px solid ${props => props.theme.colors.white};
            margin-bottom : 1rem;
        }

        input[type="file"] {
            padding-left: 3px;
            width: 30rem;
            margin-left : 2.5rem;
            border-radius : 4px;
            padding: 5px;
            border: 1px solid ${props => props.theme.colors.gray2};
        }
        
        input[type="textarea"] {
            width: 66rem;
            height: 100%;
            line-height: 100%;
            text-indent: 2rem;
            font-size: 18px;
            margin-left : 5rem;
            color : ${props => props.theme.colors.gray6};
            background-color: ${props => props.theme.colors.white};
            outline: none;
            border-radius : 8px;
            border: 1px solid ${props => props.theme.colors.gray4};
        
        }    
    }

    .menuBottom {
        padding-left : 20px;
        padding-right : 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        h3 {
            color : ${props => props.theme.colors.gray4};
            font-size : 3rem;
            margin-right : 3rem;
            margin-left : 1rem;
            display: inline-block;
        }

        input {
            display: inline-block;
            width: 35rem;
            height: 7rem;
            line-height: 100%;
            text-indent: 2rem;
            font-size: 18px;
            color : ${props => props.theme.colors.gray6};
            background-color: ${props => props.theme.colors.white};
            outline: none;
            border-radius : 8px;
            border: 1px solid ${props => props.theme.colors.mainColor};
        }

        button {
            width: 22rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            font-weight: 700;
            color : ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.mainColor};
            border-radius : 8px;
            border: 5px solid ${props => props.theme.colors.mainColor};
            margin-left : 2rem;

            &:hover {
                cursor: pointer;
            }
        }

        .modalClose {
            width: 15rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            background-color: ${props => props.theme.colors.gray2};
            border: 5px solid ${props => props.theme.colors.gray2};
            color : ${props => props.theme.colors.black};

            &:hover {
                cursor: pointer;
            }
        }

        .menuDelete {
            width: 20rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            background-color: ${props => props.theme.colors.gray2};
            border: 5px solid ${props => props.theme.colors.gray2};
            color : ${props => props.theme.colors.black};
        
            &:hover {
                cursor: pointer;
            }

        }
    }
`

export const MenuSettingModal = styled.form`
    position: fixed;
    top: 20vh;
    left: 25vw;
    width: 110rem;
    height: 70rem;
    display: grid; 
    padding-bottom : 20px;
    grid-template-rows: 70px 1fr 2fr 1fr;
    gap: 15px;
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

    .menuTop {
        padding-left : 20px;
        padding-right : 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        input {
            width: 35rem;
            height: 7rem;
            line-height: 100%;
            text-indent: 2rem;
            font-size: 20px;
            font-weight: 700;
            color : ${props => props.theme.colors.gray6};
            background-color: ${props => props.theme.colors.white};
            outline: none;
            border-radius : 8px;
            border: 0;
            border: 2px solid ${props => props.theme.colors.mainColor};
        }
        
        .menuCategory {
            width: 68rem;
            display : flex;
            flex-flow : row nowrap;
            justify-content : space-between;
            align-items : center;
        }

        select {
            display : inline-block;
            width: 32rem;
            height: 7rem;
            font-size: 18px;
            border-color: ${props => props.theme.colors.mainColor};
            margin-left : 2rem;
            border-radius : 8px;
            padding-left : 1rem;
        }
    }


    .menuMid {
        padding-left : 20px;
        padding-right : 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        img {
            width: 30rem;
            height: 30rem;
            margin-left : 2.5rem;
            background-color: ${props => props.theme.colors.gray00};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius : 8px;
            border: 1px solid ${props => props.theme.colors.white};
            margin-bottom : 1rem;
        }

        input[type="file"] {
            padding-left: 3px;
            margin-left : 2.5rem;
            width: 30rem;
            border-radius : 4px;
            padding: 5px;
            border: 1px solid ${props => props.theme.colors.gray2};
        }
        
        input[type="textarea"] {
            width: 66rem;
            height: 100%;
            line-height: 100%;
            text-indent: 2rem;
            font-size: 18px;
            margin-left : 5rem;
            color : ${props => props.theme.colors.gray6};
            background-color: ${props => props.theme.colors.white};
            outline: none;
            border-radius : 8px;
            border: 1px solid ${props => props.theme.colors.gray4};
        
        }    
    }

    .menuBottom {
        padding-left : 20px;
        padding-right : 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        h3 {
            color : ${props => props.theme.colors.gray4};
            font-size : 3rem;
            margin-right : 3rem;
            margin-left : 1rem;
            display: inline-block;
        }

        input {
            display: inline-block;
            width: 35rem;
            height: 7rem;
            line-height: 100%;
            text-indent: 2rem;
            font-size: 18px;
            color : ${props => props.theme.colors.gray6};
            background-color: ${props => props.theme.colors.white};
            outline: none;
            border-radius : 8px;
            border: 1px solid ${props => props.theme.colors.mainColor};
        }

        button {
            width: 21rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            font-weight : 700;
            color : ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.mainColor};
            border-radius : 8px;
            border: 5px solid ${props => props.theme.colors.mainColor};
            margin-left : 2rem;
        }

        .modalClose {
            width: 15rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            background-color: ${props => props.theme.colors.gray2};
            border: 5px solid ${props => props.theme.colors.gray2};
            color : ${props => props.theme.colors.black};
        }

        .menuDelete {
            width: 21rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            background-color: ${props => props.theme.colors.gray2};
            border: 5px solid ${props => props.theme.colors.gray2};
            color : ${props => props.theme.colors.black};
        
        }
    }
`

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