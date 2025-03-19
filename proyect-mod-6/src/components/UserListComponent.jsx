import { useContext } from "react";
import{UserContext} from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const UserList = ()=>{
    const {user,deleteUsers ,updateUser}= useContext(UserContext);
    console.log("usuarios",user);
    
    const{userName} = useContext(UserContext)
    const navigate= useNavigate();
    const handleEdit = (user)=>{
        
  if ( user.first_name !==userName ){
    alert("Tienes que ingresar los datos");
    return;}

        const newName= prompt("Nuevo nombre", user.userName);
        const newPassword = prompt("Nueva contraseña", user.password);
        
  if ( !newName || !newPassword ){
    alert("Tienes que ingresar los datos");
    return;
  }
  updateUser(user.id,{
    userName:newName,
    password:newPassword
  });
}
  const handleDelete = (user)=>{
    if (user.first_name!== userName){
    alert("Usuario eliminado");
    return;
    };
    deleteUsers(user.id)
};
//esto hay que cambiarlo a home, pero para poder tener un sitio donde usarlo esta aqui
const handleNavigateRegister=()=>{
  navigate("/register")
}
    return(
        <div>
            <h2>Usuarios y sus opiniones</h2>
            {user.map((user) => (
                <div key={user.id}>
                    <img src ={user.avatar || "https://via.placeholder.com/150"}/>
                    <h3>{user.first_name} {user.last_name}</h3>
                    <p>{user.email}</p>
                    <button onClick={()=>handleEdit(user)}>Editar</button>
                    <button onClick={()=>handleDelete(user)}>Eliminar</button>
                </div>
            ))}
        </div>
    )
};
export default UserList;