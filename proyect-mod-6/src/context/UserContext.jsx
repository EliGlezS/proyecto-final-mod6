import { createContext,useState,useEffect } from "react";
export const UserContext = createContext();
const API_BASE_URL = "https://reqres.in/api/users";
export const UsuarioProvider = ({children}) =>{
    const [user, setUser]= useState([]);

//funcion get    
    useEffect(()=>{
        const getUser = async()=>{
            try {
                const respuesta = await fetch(`${API_BASE_URL}?per_page=20`);
                if (!respuesta.ok) {
                  throw new Error ("ERROR AL TRAER EL ELEMENTO");
                }
                    const data= await respuesta.json();
                    setUser(data.data);        
              } catch (error){
                console.error("ERROR AL OBTENER EL ELEMENTO",error);
                
              }
             
            };
            getUser();
        },[]);
 
  //FUNCION PUT
  const updateUser = async(id,datosUpdate)=>{
        try {
      await fetch(`${API_BASE_URL}/${id}`,{
          method : "PUT",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(datosUpdate),
        });
        setUser(
            user.map((user)=>(user.id ===id ?{...user,...datosUpdate} : user))
        );} catch(error){
          console.error("ERROR AL ACTUALIZAR",error);
          
        }
       
      };
  //FUNCION DELETE
  const deleteUser =async(id)=>{
    try{
        await fetch(`${API_BASE_URL}/${id}`,{ method:"DELETE"});
        setUser (user.filter((user)=>user.id !==id));
    }catch(error){
        console.error("ERROR AL ELIMINAR EL ELEMENTO",error);
    }
  };
  //Funcion para traer el usuario registrado
  const createUser = (myUser) =>{
    console.log("Nuevo usuario creado:", myUser);
    setUser((prevUser)=>[...prevUser,myUser]);
  }
  return(
    <UserContext.Provider
    value={{user,
        createUser,
        updateUser,
        deleteUser
    }}
        >
        {children}
        </UserContext.Provider>
  );
}

////hola