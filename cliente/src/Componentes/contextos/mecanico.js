import React,{useState} from "react";
const context= React.createContext({});

export function ContextoMecanico({children}){
    const [jwt, setjwt] = useState(()=>window.sessionStorage.getItem('jwt'))
    return <context.Provider value={{jwt, setjwt}}>
    {children}
    </context.Provider>
}
export default context