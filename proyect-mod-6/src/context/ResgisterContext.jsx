import { createContext, useState } from "react";
export const RegisterContext= createContext();
export const RegisterProvider =({children})=>{
    const[userName,setUserName]= useState("");
    const createUser=(myUser)=>{

    }
    return(
        <RegisterContext.Provider value={{userName,setUserName,createUser}}>
            {children}
        </RegisterContext.Provider>
    );
};