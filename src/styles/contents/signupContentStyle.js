import styled from "styled-components";
import LoginBackground from "../../assets/imgs/landingImage.png"

export const SignUpContentContainer = styled.div`
    margin-left : 3rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .Titles {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;

        h2 {
            font-size : 60px;
        }

        p {
            padding-left: 14px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px 10px;
        margin: 5rem;


        .label {
            margin-bottom: 20px;
        
        }
        input {
            margin-left: 10px;
            margin-bottom: 15px;
            width: 65rem;
            height: 8rem;
            line-height: 100%;
            text-indent: 3rem;
            font-size: 22px;
            color : ${props => props.theme.colors.gray6};
            background-color: ${props => props.theme.colors.gray00};
            border-radius : 15px;
            border: 0;
            border-color : ${props => props.theme.colors.gray00};
        
            &:focus {
                color : ${props => props.theme.colors.black};
            }
        }

        .checkEmailButton{
            margin-left: 20px;
            margin-bottom: 15px;
            width: 15rem;
            height: 6rem;
            line-height: 100%;
            font-size: 18px;
            color : ${props => props.theme.colors.mainColor};
            background-color: ${props => props.theme.colors.gray00};
            border-radius : 15px;
            border: 1px solid ${props => props.theme.colors.gray6};

            &:hover {
                cursor: pointer;
            }
        
        }

        .emailChecked {
            margin-left: 20px;
            margin-bottom: 15px;
            width: 16rem;
            height: 6rem;
            font-size: 18px;
            color : ${props => props.theme.colors.gray4};
            background-color: ${props => props.theme.colors.gray00};
            border-radius : 15px;
            border: 1px solid ${props => props.theme.colors.gray6};
        }

        .passwordNotMatch {
            font-size: 18px;
            width: 30rem;
            color : red;
            margin-left: 140px;
        }

        .signupButtonWrapper {
            width: 65rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
         
            .signupButton {
                margin-top: 20px;
                margin-left: 10px;
                margin-bottom: 15px;
                width: 25rem;
                height: 8rem;
                line-height: 100%;
                font-size: 24px;
                color : ${props => props.theme.colors.white};
                background-color: ${props => props.theme.colors.mainColor};
                border-radius : 15px;
                border: 1px solid ${props => props.theme.colors.mainColor};

                &:hover {
                    cursor: pointer;
                }
            }
         }
         

    
    }
 }

`