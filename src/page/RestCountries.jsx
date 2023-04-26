import { useState , useEffect, useContext } from "react";
import Loader from "../components/Loader"; 
import {CardCountrie} from "./CardCountrie.jsx"; 
import BotonTop from "../components/BotonTop";
import styled from "styled-components";
import BotonTheme from "../components/BotonTheme";
import { ContextTheme } from "../Context/ContextTheme";

/* CABECERA DE LA APP */
const ContainerApp = styled.div`
    background-color: ${props => props.color == "dark" ? "rgb(29, 31, 27)":"white"};
    min-height: 100vh;
    width: 100%;
    padding-top: 7rem;
    padding-bottom: 1rem;
`;
const HeaderCountrie = styled.header`
    position: fixed;
    z-index: 400;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const ContainerCountrie = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`;
const TitleCountrie = styled.h1`
    color: white;
    font-size: 1.5rem;
    @media screen and (min-width:480px){
        font-size: 2rem;
    }
`;
const ControlsCountries = styled.div`
    width: calc(100% - 2rem);
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.color == "dark" ? "rgb(29, 31, 27)":"white"};
`;
const InputSearch = styled.input`
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    width: 140px;
    color: ${props => props.color == "dark" ? "black":"white"};
    background-color: ${props => props.color == "dark" ? "white":"black"};
    
    @media screen and (min-width:480px){
        width: 180px;
    }
`;
const SelectCountries = styled.select`
    padding: 0.25rem 1rem;
    background-color: ${props => props.color == "dark" ? "white":"black"};
    color: ${props => props.color == "dark" ? "black":"white"};
`;

/*CUERPO DE LA APP*/
const MainCountries = styled.main`  
    position: relative;
    width: 100%;
    scroll-behavior: smooth;

    @media screen and (min-width:768px){
        width: calc(100% - 2rem);
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width:1048px){
        width: 100%;
    } 

`;
const ErrorInput = styled.p`
    color: ${props => props.color == "dark" ? "white":"black"};
`;
const ContainerLoader = styled.div`
    position: fixed;
    height: 100vh;
    left: calc(50% - 28px);
`;
const ContainerCountries = styled.div`
    display: grid;
    grid-template-columns: repeat(1,minmax(1,1fr));
    gap: 1rem;

    @media screen and (min-width:480px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
    @media screen and (min-width:768px){
        grid-template-columns: repeat(3,minmax(0,1fr));
        gap: 1.5rem;
    }
    @media screen and (min-width:1048px){
        grid-template-columns: repeat(4,minmax(0,1fr));
    }
`;

function RestCountries(){
    const [paises,setPaises] = useState([]);
    const [url,setUrl] = useState("https://restcountries.com/v3.1/all");
    const [search,setSearch] = useState("");
    const {theme} = useContext(ContextTheme);
    const [loader,setLoader] = useState(false);

    const Search = (e) =>{
        setSearch(e.target.value);
    }

    let results = [];
    if(!search){
        results = paises;
    }else{
        results = paises.filter((dato) => dato.name.common.toLowerCase().includes(search.toLowerCase()));      
    }

    const Filtro = (e) =>{
        if(e.target.value === "all"){
            setUrl("https://restcountries.com/v3.1/all")
        }else{
            setUrl(`https://restcountries.com/v3.1/region/${e.target.value}`)
        }
    }

    useEffect(()=>{
        const Proceso = () =>{
            const countries = fetch(url);
            setLoader(true);
            countries
            .then(
                (data)=>data.json()
            ).then((res)=>{
                setPaises([...res]);
                setLoader(false);
            
            }).catch(error => 
                console.log(error)
            );
        }
        Proceso();
    },[url]);


    return <ContainerApp color={theme}>

        <div className="container">
            <HeaderCountrie>

                <ContainerCountrie color={theme}>
                    <TitleCountrie>Where in the world?</TitleCountrie>
                </ContainerCountrie>
                
                <ControlsCountries className="container" color={theme}>
                    <InputSearch value={search} onChange={Search} type="text" placeholder="Buscar País" color={theme}/>
                    
                    <SelectCountries name="paises" onChange={Filtro} color={theme}>
                        <option value="all">Todos</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europa</option>
                        <option value="Oceania">Oceania</option>
                    </SelectCountries>
                </ControlsCountries>
            </HeaderCountrie>
            
            <MainCountries>
                {(results.length === 0)? <ErrorInput color={theme}>No se encuentra: <mark>{search}</mark></ErrorInput>
                :
                    <ContainerCountries>{
                            results.map((pais)=> 
                            <CardCountrie 
                            key={pais.name.common}
                                    nombre={pais.name.common}
                                    ruta={pais.flags.svg}
                                    capital={pais.capital}
                                    poblacion={pais.population}
                                    subregion={pais.subregion}
                                /> 
                                )
                        }
                    </ContainerCountries>
                }

                { loader && 
                    <ContainerLoader>
                        <Loader/>
                    </ContainerLoader> 
                }
                
            </MainCountries>
            <BotonTop/>
            <BotonTheme/>
        </div>
    </ContainerApp>
    
}
export default RestCountries;