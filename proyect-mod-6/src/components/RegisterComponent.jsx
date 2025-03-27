import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../styles/register.css"
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
            numeroTarjeta:"",
            caducidad:"",
            titularTarjeta:"",
            password:"",
            foto:null
    
        });

    const[error,setError]=useState({});
//FUNCION PARA MANEJAR EL ENVIO DEL FORMULARIO
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
    //FUNCION PARA VALIDAR EL FORMULARIO
    const validateForm =()=>{
      const newError ={};

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
        newError.email = "El correo electrónico no es válido.";
      }
    //validacion para el numero de la casa
    if (!/^(?:[1-9][0-9]{0,2}|1000)$/.test(formulario.numero)) {
      newError.numero = "El número de la casa debe estar entre 1 y 1000.";
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
  
      // Validación de Número de Tarjeta
      if (!/^\d{16}$/.test(formulario.numeroTarjeta)) {
        newError.numeroTarjeta = "El número de tarjeta debe tener exactamente 16 dígitos.";
      }
  
      // Validación de Caducidad
    
      if (!/^(0[1-9]|1[0-2])\/(2[5-9]|3[0-9])$/.test(formulario.caducidad)) {
        newError.caducidad = "La caducidad debe tener el formato MM/AA, con el mes entre 01 y 12 y el año entre 25 y 39.";
      }
  
      // Validación de Contraseña
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{9,12}$/.test(formulario.password)) {
        newError.password = "La contraseña debe tener entre 9-12 caracteres e incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial.";
      
      }
         setError(newError);
         return Object.keys(newError).length ===0;
} 

//FUNCION QUE MANEJA LOS CAMBIOS 
const handleChange =(e)=>{
  const {name,value}=e.target;
  setFormulario((prevFormulario)=>({
    ...prevFormulario,[name]:value,
  }));
};
//ESTA FUNCION ES SOLO PARA LA FOTO
const handleFileChange =(e)=>{
  const file = e.target.files[0];
  setFormulario((prevFormulario)=>({
    ...prevFormulario,
    foto: file,
  }));
};
return(
  <section className="section-register">

  <div className="div-register">
  <h1 className="title-register">Registro de usuario</h1>
  <form className="form-register" onSubmit={handleSubmit}>
                    {Object.keys(error).length > 0 && (
                      <div style={{color:"red"}}>
                        {Object.entries(error).map(([key,message])=>(
                          <p key={key}>{message}</p>
                        ))}
                      </div>
                    )}
                    <div className="div-form">

                    </div>
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
                        <input type="number"
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
  <div className="button-img">

      <label className="file-label"></label>
      <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      required />

  </div>
  
  
  <label className="div--img"></label>
  <label className="div--img2"></label>
  <div className="div-save">

                    <button className="button-save" type="submit">Guardar</button>
  </div>
                  

               
  </form>
  </div>
  </section>
);
}; 
export default RegisterComponent;
