import {createContext , useState} from "react";

export const ContextTheme = createContext();

export const ProviderTheme = ({children}) =>{
    const InitialTheme = "dark";
    const [theme,setTheme] = useState(InitialTheme);

    const handleTheme = (e) =>{
        if(e.target.innerHTML == "🌙"){
            setTheme("dark");
            e.target.innerHTML = "☀️"; 
        }else{
            e.target.innerHTML = "🌙";
            setTheme("light");
        }
    }

    const data = {theme,handleTheme};

    return(
        <ContextTheme.Provider value={data}>
            {children}
        </ContextTheme.Provider>
    )
}