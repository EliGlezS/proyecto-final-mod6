import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import{UserContext} from "../context/UserContext";

const LoginComponent = ()=>{
    const navigate =useNavigate();
    const{loginUser}=useContext(UserContext);
    console.log("loginUser:", loginUser);

    const[formulario, setFormulario] =useState({
            email:"",
            password:""
    
        });
        const[error,setError]=useState("");
//funcion para manejar el inicio de sesion
        const handleLogin = (e)=>{
            e.preventDefault();
            if(loginUser(formulario.email,formulario.password)){
                navigate("/perfil");
            }else{
                setError("Correo o contraseña incorrectos")
            }
          
        }
        //funcion para manejar loas cambios en el formulario
    const handleChange =(e)=>{
        const {name,value}=e.target;
            setFormulario((prevFormulario)=>({...prevFormulario,[name]:value}));
      };
      return(
        <div>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleLogin}>
                {error && <div style={{color:"red"}}>{error}</div>}
                <div> 
                    <label>Correo</label>
                    <input type="email" name="email" value={formulario.email} onChange={handleChange} required/>
                </div>
                <div> 
                    <label>Contraseña</label>
                    <input type="password" name="password" value={formulario.password} onChange={handleChange} required/>
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
           
            <div>
                <p>¿No tienes cuenta aun?<button onClick={()=>navigate("/register")}>Crear cuenta</button></p>
            </div>
           
            
        </div>
      )
    }

    export default LoginComponent;
   