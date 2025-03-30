import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import{UserContext} from "../context/UserContext";
import "../styles/login.css"
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
                navigate("/");
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
        <section className="section-login">

        <div className="div-login">
            <h1 className="title-login">Iniciar sesión</h1>
            <form className="form-login" onSubmit={handleLogin}>
                {error && <div style={{color:"red"}}>{error}</div>}
                <div className="form-email"> 
                    <label>Correo</label>
                    <input type="email" name="email" value={formulario.email} onChange={handleChange} required/>
                </div>
                <div className="form-pass"> 
                    <label>Contraseña</label>
                    <input type="password" name="password" value={formulario.password} onChange={handleChange} required/>
                </div>
                <div className="div-init">
                    
                <button className="button-init" type="submit">Iniciar sesión</button>
                </div>
            </form>
           
            <div>
                <p className="p-create">¿No tienes cuenta aun?</p>
                    <button className="button-create" onClick={()=>navigate("/register")}>Crear cuenta</button>
            </div>
           
            
        </div>
        </section>
      )
    }

    export default LoginComponent;
   