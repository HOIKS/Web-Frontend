import styled from "styled-components"

export const MenuCommonModal = styled.form`
    position: fixed;
    top: 20vh;
    left: 25vw;
    width: 110rem;
    height: 67rem;
    padding: 30px;
    display: grid; 
    grid-template-rows: 1fr 2fr 1fr;
    gap: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    z-index: 999;

    .menuTop {
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
            width: 30rem;
            height: 7rem;
            font-size: 18px;
            border-color: ${props => props.theme.colors.mainColor};
            margin-left : 2rem;
            border-radius : 8px;
            padding-left : 1rem;
        }
    }


    .menuMid {
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        align-items: center;

        img {
            width: 35rem;
            height: 35rem;
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
            width: 35rem;
            border-radius : 4px;
            padding: 5px;
            border: 1px solid ${props => props.theme.colors.gray2};
        }
        
        input[type="textarea"] {
            width: 100%;
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
            width: 20rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            font-weight: 700;
            color : ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.mainColor};
            border-radius : 8px;
            border: 5px solid ${props => props.theme.colors.mainColor};
            margin-left : 2rem;
        }

        .modalClose {
            width: 14rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            background-color: ${props => props.theme.colors.gray2};
            border: 5px solid ${props => props.theme.colors.gray2};
            color : ${props => props.theme.colors.black};
        }

        .menuDelete {
            width: 20rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            background-color: ${props => props.theme.colors.gray2};
            border: 5px solid ${props => props.theme.colors.gray2};
            color : ${props => props.theme.colors.black};
        
        }
    }
`

export const MenuSettingModal = styled.form`
    position: fixed;
    top: 20vh;
    left: 25vw;
    width: 110rem;
    height: 67rem;
    padding: 30px;
    display: grid; 
    grid-template-rows: 1fr 2fr 1fr;
    gap: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    z-index: 999;

    .menuTop {
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
            width: 64rem;
            display : flex;
            flex-flow : row nowrap;
            justify-content : space-between;
            align-items : center;
        }

        select {
            display : inline-block;
            width: 30rem;
            height: 7rem;
            font-size: 18px;
            border-color: ${props => props.theme.colors.mainColor};
            margin-left : 2rem;
            border-radius : 8px;
            padding-left : 1rem;
        }
    }


    .menuMid {
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        align-items: center;

        img {
            width: 35rem;
            height: 35rem;
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
            width: 35rem;
            border-radius : 4px;
            padding: 5px;
            border: 1px solid ${props => props.theme.colors.gray2};
        }
        
        input[type="textarea"] {
            width: 100%;
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
            width: 20rem;
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
            width: 14rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            background-color: ${props => props.theme.colors.gray2};
            border: 5px solid ${props => props.theme.colors.gray2};
            color : ${props => props.theme.colors.black};
        }

        .menuDelete {
            width: 20rem;
            height: 7rem;
            line-height: 100%;
            font-size: 18px;
            background-color: ${props => props.theme.colors.gray2};
            border: 5px solid ${props => props.theme.colors.gray2};
            color : ${props => props.theme.colors.black};
        
        }
    }
`