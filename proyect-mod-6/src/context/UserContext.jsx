import { createContext,useState,useEffect } from "react";
import {useNavigate} from"react-router-dom";

export const UserContext = createContext();

export const UsuarioProvider = ({children}) =>{
  const[isLoggedIn,setIsLoggedIn]=useState(false);
    const [authUser, setAuthUser]= useState({});
    const navigate= useNavigate();
    useEffect(()=>{
      const storedIsLoggedIn= localStorage.getItem("isLoggedIn");
      if(storedIsLoggedIn=== "true"){
        setIsLoggedIn(true);
        const storedUser=JSON.parse(localStorage.getItem("userData"));
        setAuthUser(storedUser);

      }
    },[]);

    //funcion para iniciar sesion
    const loginUser=(email, password)=>{
      const storedUser=JSON.parse(localStorage.getItem("userData"));
      if(storedUser && storedUser.email === email && storedUser.password === password){
        setAuthUser(storedUser);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("userData",JSON.stringify(storedUser));
        navigate("/");
        return true;
    }
    return false;
    }
//funcion para cerrar sesion
const logoutUser =()=>{
  setAuthUser(null);
  setIsLoggedIn(false);
  localStorage.removeItem("isLoggedIn");
  // localStorage.removeItem("userData"); 
  navigate("/login");
};

/*TODO FUNCION PARA ELIMINAR CUENTA USUARIO (creariamos un boton en perfil y que use un onclick que tenga esa funcion)
const deleteUser =()=>{
  setAuthUser(null);
  setIsLoggedIn(false);
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userData");
  navigate("/login");
};*/


//Funcion para crear el usuario
const createUser=(newUser)=>{
  setAuthUser(newUser);
  setIsLoggedIn(true);
  localStorage.setItem("userData",JSON.stringify(newUser));
  localStorage.setItem("isLoggedIn" ,"true");


}
//funcion para actualizar el usuario
const updatedUser = (newUserData)=>{
  setAuthUser(newUserData);
  localStorage.setItem("userData",JSON.stringify(newUserData));
};
  return(
    <UserContext.Provider
    value={{isLoggedIn,authUser,loginUser,logoutUser,updatedUser,createUser
    }}
        >
        {children}
        </UserContext.Provider>
  );
}
