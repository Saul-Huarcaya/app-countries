import { useContext } from "react";
import styled from "styled-components";
import {ContextTheme} from "../Context/ContextTheme.jsx";

const ContainerButton = styled.div`
    background-color: ${props => props.color == "dark" ? "white":"rgb(29, 31, 27)"};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    user-select: none;
    position: fixed;
    width: 3.5rem;
    height: 4rem;
    font-size: 2.2rem;
    bottom: 1rem;
    right: 1rem;
    &:hover{
        background-color: ${props => props.color == "dark" ? "yellow":"black"};
    }
`;
function BotonTheme(){
    const {theme,handleTheme} = useContext(ContextTheme);
    
    return <ContainerButton onClick={handleTheme} color={theme} >
        ☀️ 
    </ContainerButton>
}
export default BotonTheme;