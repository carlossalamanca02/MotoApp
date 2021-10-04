import { useCallback, useContext, useState } from "react";
import { Redirect } from "react-router";
import context from "../contextos/mecanico";
import loginmec from "../servicios/login";

export default function Mecanico(){
    //var isadmin=false;
    const{jwt,setjwt} = useContext(context)
    const [state, setstate]=useState({load:false,error:false,isadmin:false})
    const login = useCallback((user,pass) => {
        setstate({load:true,error:false})
        loginmec({user,pass})
        .then(jwt => {
            setstate({load:false,error:false})
            
            if(jwt.op.toString() == 0){
               
                //isadmin=true;
                setstate({isadmin:true})
            }
            window.sessionStorage.setItem('jwt',jwt.token.toString())
            setjwt(jwt.token.toString())
        })
        .catch(err=>{
            setstate({load:false,error:true})
            window.sessionStorage.removeItem('jwt')
            console.error(err)
        })
    },[setjwt])
    const logout= useCallback(()=>{
        setjwt(null);
        window.sessionStorage.removeItem('jwt')
    },[setjwt])
    return{
        logged: Boolean(jwt),
        login,
        logout,
        validatedata:state.load,
        errorlogin:state.error,
        isAdmin:state.isadmin
    }
}