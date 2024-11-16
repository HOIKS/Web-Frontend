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
