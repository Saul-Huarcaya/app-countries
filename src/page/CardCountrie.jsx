import { useContext } from "react";
import styled from "styled-components";
import { ContextTheme } from "../Context/ContextTheme";


const Card = styled.div`
    background-color: ${props => props.color == "dark" ? "white":"rgb(29, 31, 27)"};
    border-radius: 6px;
    padding-bottom: 0.5rem;
`;

const CardImg = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

const CardContent = styled.div`
    padding: 0.5rem 1rem;
    color: ${props => props.color == "dark" ? "black":"white"};
   /*  #242424 */
`;

const CardTitle = styled.h2`
    text-align: center;
    margin-bottom: 0.5rem;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: fantasy;
`;

const Row = styled.div`
    display: flex;
    gap: 0.5rem;
    
`;

const Subtitle = styled.p`
    font-weight: 600;
`;

const Data = styled.p`
    flex-wrap: wrap;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: pre-wrap;
`;

export function CardCountrie({nombre,ruta,capital,poblacion,subregion}){
    
    const {theme} = useContext(ContextTheme);

    return <Card color={theme}>
                <CardImg src={ruta} alt={nombre}/>
                <CardContent color={theme}>
                    <CardTitle>{nombre}</CardTitle>
                    
                    <Row>
                        <Subtitle>Capital: </Subtitle> 
                        <Data>{(capital) ? capital.join(" "): "No Tiene"}</Data> 
                    </Row>

                    <Row>
                        <Subtitle>Población: </Subtitle> 
                        <Data>{(poblacion != "0")? poblacion:"-" }</Data> 
                    </Row>
                    
                    <Row>
                        <Subtitle>Subregion: </Subtitle>
                        <Data>{(subregion)? subregion:"No Tiene"}</Data> 
                    </Row>
                </CardContent>
            </Card>
}

