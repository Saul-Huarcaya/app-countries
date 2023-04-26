import { AiOutlineArrowUp } from "react-icons/ai";
import { useContext, useEffect , useState } from "react";
import styled from "styled-components";
import { ContextTheme } from "../Context/ContextTheme";

const Boton = styled.div`
    background-color: ${props => props.color == "dark" ? "white":"rgb(29, 31, 27)"};
    color: ${props => props.color == "dark" ? "black":"white"};
    width: 3.5rem;
    height: 4rem;
    font-size: 2.2rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 1rem;
    bottom: 5.5rem;
    z-index: 100;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: ${props => props.color == "dark" ? "yellow":"black"};
    }
`;

function BotonTop(){

    const [btnTop,setBtnTop] = useState(false);
    const {theme} = useContext(ContextTheme);

    useEffect(()=>{
        const HandleMouse = () =>{
            let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
            
            (scrollTop > 300) ? setBtnTop(true) : setBtnTop(false);
        }

        window.addEventListener("scroll",HandleMouse);

        return () =>{
            window.removeEventListener("scroll",HandleMouse);
        }
    },[]);

    const HandleTop = () =>{
        window.scrollTo(0,0);
    }


    return <>
        {btnTop && <Boton onClick={HandleTop} color={theme}>
            <AiOutlineArrowUp/>
        </Boton>}
    </>
}
export default BotonTop;