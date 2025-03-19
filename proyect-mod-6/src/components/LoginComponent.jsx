import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginComponent = ()=>{
    const navigate =useNavigate();
    const[formulario, setFormulario] =useState({
            email:"",
            password:""
    
        });
        const[error,setError]=useState("");
        const handleLogin = (e)=>{
            e.preventDefault();
            const userData=JSON.parse(localStorage.getItem("userData"));
            if(userData && userData.email === formulario.email && userData.password ===formulario.password){
    navigate("/");
        }else{
            setError("Correo o contraseña incorrectos");
        }
    };
    const handleChange =(e)=>{
        const {name,value}=e.target;
        setFormulario((prevFormulario)=>({
          ...prevFormulario,[name]:value,
        }));
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
           {error &&(
            <div>
                <p>¿No tienes cuenta aun?<button onClick={()=>navigate("/register")}>Crear cuenta</button></p>
            </div>
           )}
            
        </div>
      )
    }
    export default LoginComponent;