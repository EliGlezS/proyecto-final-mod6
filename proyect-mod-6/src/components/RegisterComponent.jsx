import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserContext";
const RegisterComponent = ()=>{
    const {createUser} = useContext(UserContext);
    const navigate =useNavigate();
    const[formulario, setFormulario] =useState({
            nombre:"",
            apellidos:"",
            email:"",
            localidad:"",
            calle:"",
            numero:"",
            codigoPostal:"",
            dni:"",
            numeroTarjeta:"",
            caducidad:"",
            titularTarjeta:"",
            password:"",
            foto:null
    
        });

    const[error,setError]=useState("");

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(validateForm()){
        const myUser= {...formulario,
          foto: formulario.foto ? URL.createObjectURL(formulario.foto):null,
        };
        localStorage.setItem("userData", JSON.stringify(myUser));
        createUser(myUser);

        navigate("/login")
      }
    }
    const validateForm =()=>{
      const newError ={};

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
        newError.email = "El correo electrónico no es válido.";
      }
  
      // Validación de Localidad
      if (/[\d]/.test(formulario.localidad)) {
        newError.localidad = "La localidad no puede contener números.";
      }
  
      // Validación de Nombre y Apellidos
      if (/[\d]/.test(formulario.nombre) || /[\d]/.test(formulario.apellidos)) {
        newError.nombre = "El nombre y los apellidos no pueden contener números.";
      }
  
      // Validación de Código Postal
      if (!/^\d{5}$/.test(formulario.codigoPostal)) {
        newError.codigoPostal = "El código postal debe tener exactamente 5 dígitos.";
      }
  
      // Validación de DNI
      if (!/^\d{8}[A-Za-z]$/.test(formulario.dni)) {
        newError.dni = "El DNI debe tener 8 números seguidos de una letra.";
      }
  
      // Validación de Número de Tarjeta
      if (!/^\d{16}$/.test(formulario.numeroTarjeta)) {
        newError.numeroTarjeta = "El número de tarjeta debe tener exactamente 16 dígitos.";
      }
  
      // Validación de Caducidad
      if (!/^\d{2}\/\d{2}$/.test(formulario.caducidad)) {
        newError.caducidad = "La caducidad debe tener el formato MM/AA.";
      }
  
      // Validación de Contraseña
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{9,12}$/.test(formulario.password)) {
        newError.password = "La contraseña debe tener entre 9-12 caracteres e incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial.";
      
      }
         setError(newError);
         return Object.keys(newError).length ===0;
} 

const handleChange =(e)=>{
  const {name,value}=e.target;
  setFormulario((prevFormulario)=>({
    ...prevFormulario,[name]:value,
  }));
};
const handleFileChange =(e)=>{
  const file = e.target.files[0];
  setFormulario((prevFormulario)=>({
    ...prevFormulario,
    foto: file,
  }));
};
return(
  <div>
  <h1>Registro de usuario</h1>
  <form onSubmit={handleSubmit}>
                    {Object.keys(error).length > 0 && (
                      <div style={{color:"red"}}>
                        {Object.entries(error).map(([key,message])=>(
                          <p key={key}>{message}</p>
                        ))}
                      </div>
                    )}
                    <div>
                        <label>Nombre</label>
                        <input type="text"
                        name ="nombre"
                        value={formulario.nombre}
                        onChange={handleChange}
                        required />
                    </div>
                    <div>
                        <label>Apellidos</label>
                        <input type="text"
                        name ="apellidos"
                        value={formulario.apellidos}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text"
                        name ="email"
                        value={formulario.email}
                        onChange={handleChange}
                        required />

                    </div>
                    
                    <div>
                        <label>Calle</label>
                        <input type="text"
                        name ="calle"
                        value={formulario.calle}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                        <label>Número</label>
                        <input type="text"
                        name ="numero"
                        value={formulario.numero}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                        <label>Código Postal</label>
                        <input type="text"
                        name ="codigoPostal"
                        value={formulario.codigoPostal}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                    <label>Localidad</label>
                        <input type="text"
                        name ="localidad"
                        value={formulario.localidad}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                        <label>DNI</label>
                        <input type="text"
                        name ="dni"
                        value={formulario.dni}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                        <label>Número de tarjeta</label>
                        <input type="text"
                        name ="numeroTarjeta"
                        value={formulario.numeroTarjeta}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                        <label>Caducidad</label>
                        <input type="text"
                        name ="caducidad"
                        value={formulario.caducidad}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                        <label>Titular de la tarjeta</label>
                        <input type="text"
                        name ="titularTarjeta"
                        value={formulario.titularTarjeta}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password"
                        name ="password"
                        value={formulario.password}
                        onChange={handleChange}
                        required />

                    </div>
                    <div>
                        <label>Foto</label>
                        <input type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required />

                    </div>
                    <button type="submit">Guardar datos</button>
  </form>
  </div>
);
};
export default RegisterComponent;
//OK comprobado si no funciona darle para atras a las valaidaciones 2 vece