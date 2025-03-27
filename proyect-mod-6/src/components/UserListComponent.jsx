import { useContext, useState,useEffect } from "react";
import { UserContext } from "../context/UserContext";
import defaultImage from "../img/IMGusuario.png";
import "../styles/user.css"
const UserListComponent = ()=>{
  const {isLoggedIn,authUser, updatedUser,logoutUser}=useContext(UserContext);
  const[editField, setEditField] = useState(null);
  const [formulario,setFormulario]=useState (authUser||{});
  const [photo, setPhoto]= useState(authUser?.foto ||null);
  const [error,setError] = useState({});
 
  useEffect(()=>{
    if (authUser) {
      setFormulario(authUser);
      setPhoto(authUser.photo  || null);

    }
  },[authUser]);
  //comprueba si el usuario esta logeado o no
  if(!isLoggedIn || !authUser){
    return <p>No se ha registrado el usuario</p>
  }
  //funcion para cambiar la foto de perfil
  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    if(file){
      const previewUrl = URL.createObjectURL(file);
      setPhoto(previewUrl);
      setFormulario((prevFormulario)=>({
        ...prevFormulario,
        foto:file,
        
      }));
    }
  };
  //funcion guardar 
  const handleSave=(field)=>{
    if(!validateForm()){
      return;
    }
    const newUserData={...authUser,[field]: formulario[field]};
    if(field ==="foto"){
      newUserData.foto = photo;
      
    }
    console.log("newUserData:", newUserData);
    updatedUser(newUserData);
    localStorage.setItem("userData", JSON.stringify(newUserData));
    setEditField(null);
  }
  //funcion para si te arrepientes de hacer cambios en el formulario
  const handleCancel =()=>{
    setFormulario(authUser);
    setPhoto(authUser.foto);
    setEditField(null);
    setError({});
  }
  //esta funcion maneja los cambios del formulario
  const handleChange = (e)=>{
      const{name, value}= e.target;
      setFormulario((prevFormulario)=>({
        ...prevFormulario,
        [name]:value,
      }));
  };
//las validacions  con regex para que el usuario no ponga cosas absurdas
const validateForm=()=>{
  const newError={};
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
  //validacion para el numero de la casa
  if (!/^(?:[1-9][0-9]{0,2}|1000)$/.test(formulario.numero)) {
    newError.numero = "El número de la casa debe estar entre 1 y 1000.";
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
  if (!formulario.foto && !photo) {
    newError.foto = "Debes subir una foto de perfil.";
  }
  
  setError(newError);
  return Object.keys(newError).length ===0;
};

    return(
      <section class="section-perfil">

        <div className="div-perfil">
          <form className="form-perfil" >
            <h1 className="title-perfil">Tu perfil</h1>
            <div >
          
          {editField === "foto" ? (
            <div className="input-container">
              <input type="file" 
              name="foto"
              accept="image/*"
              onChange={handleFileChange} />
              
              <button className="b1" type="button" onClick={() => handleSave("foto")}>Guardar</button>
              <button className="b1" type="button"  onClick={handleCancel}>Cancelar</button>
              {error.foto && <span style={{ color: "red" }}>{error.foto}</span>}
            </div>
          ) : (
            
            <div className="button-container">
                <img
                src={photo|| authUser?.foto || defaultImage} 
                alt="Foto de perfil" 
                className="image-perfil"


             />
              <button type="button" onClick={() => setEditField("foto")}className="edit-button-img"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25px"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> 
    
                </button>
            </div>
            
          )}
        </div>
            <div>
<h3>Nombre</h3>
{editField ==="nombre" ?(
<div className="input-container"><input type="text"
name="nombre"
value={formulario.nombre || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("nombre")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.nombre && <span style={{color:"red"}}>{error.nombre} </span>}
</div>

  
):(
  <div>


    <span >{authUser.nombre}</span>
    <div className="button-container">
    <button onClick={()=>setEditField("nombre")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25pxS"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> 
    </button>
  </div>
    </div>

)}
</div>

            <div>
<h3>Apellidos</h3>
{editField ==="apellidos" ?(
<div className="input-container"><input type="text"
name="apellidos"
value={formulario.apellidos || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("apellidos")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.apellidos && <span style={{color:"red"}}>{error.apellidos} </span>}
</div>

  
):(
  <div>
    <span>{authUser.apellidos}</span>
    <div className="button-container">

    <button onClick={()=>setEditField("apellidos")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25pxS"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> </button>
  </div>
  </div>
)}
</div>

<div>
<h3>Email</h3>
{editField ==="email" ?(
<div className="input-container"><input type="text"
name="email"
value={formulario.email || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("email")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.email && <span style={{color:"red"}}>{error.email} </span>}
</div>

  
):(
  <div>
    <span>{authUser.email}</span>
    <div className="button-container">
    <button onClick={()=>setEditField("email")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25pxS"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> </button>
  </div>
  </div>
)}
</div>

<div>
<h3>Localidad</h3>
{editField ==="localidad" ?(
<div className="input-container"><input type="text"
name="localidad"
value={formulario.localidad || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("localidad")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.localidad && <span style={{color:"red"}}>{error.localidad} </span>}
</div>

  
):(
  <div>
    <span>{authUser.localidad}</span>
    <div className="button-container">
    <button onClick={()=>setEditField("localidad")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25pxS"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> </button>
  </div>
  </div>
)}
</div>

<div>
<h3>Calle</h3>
{editField ==="calle" ?(
<div className="input-container"><input type="text"
name="calle"
value={formulario.calle || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("calle")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.calle && <span style={{color:"red"}}>{error.calle} </span>}
</div>

  
):(
  <div>
    <span>{authUser.calle}</span>
    <div className="button-container">
    <button onClick={()=>setEditField("calle")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25pxS"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> </button>
  </div>
  </div>
)}
</div>

<div>
<h3>Número</h3>
{editField ==="numero" ?(
<div className="input-container"><input type="number"
name="numero"
value={formulario.numero || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("numero")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.numero && <span style={{color:"red"}}>{error.numero} </span>}
</div>

  
):(
  <div>
    <span>{authUser.numero}</span>
    <div className="button-container">
    <button onClick={()=>setEditField("numero")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25pxS"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> </button>
  </div>
  </div>
)}
</div>

<div>
<h3>Código Postal</h3>
{editField ==="codigoPostal" ?(
<div className="input-container"><input type="text"
name="codigoPostal"
value={formulario.codigoPostal || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("codigoPostal")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.codigoPostal && <span style={{color:"red"}}>{error.codigoPostal} </span>}
</div>

  
):(
  <div>
    <span>{authUser.codigoPostal}</span>
    <div className="button-container">
    <button onClick={()=>setEditField("codigoPostal")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25px"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> </button>
  </div>
  </div>
)}
</div>

<div>
<h3>Número Tarjeta</h3>
{editField ==="numeroTarjeta" ?(
<div className="input-container"><input type="text"
name="numeroTarjeta"
value={formulario.numeroTarjeta || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("numeroTarjeta")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.numeroTarjeta && <span style={{color:"red"}}>{error.numeroTarjeta} </span>}
</div>

  
):(
  <div>
    <span>{authUser.numeroTarjeta}</span>
    <div className="button-container">
    <button onClick={()=>setEditField("numeroTarjeta")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25pxS"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> </button>
  </div>
  </div>
)}
</div>

<div>
<h3>Caducidad</h3>
{editField ==="caducidad" ?(
<div className="input-container"><input type="text"
name="caducidad"
value={formulario.caducidad || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("caducidad")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.caducidad && <span style={{color:"red"}}>{error.caducidad} </span>}
</div>

  
):(
  <div>
    <span>{authUser.caducidad}</span>
    <div className="button-container">
    <button onClick={()=>setEditField("caducidad")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25pxS"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> </button>
  </div>
  </div>
)}
</div>
<div>
<h3>Contraseña</h3>
{editField ==="password" ?(
<div className="input-container"><input type="password"
name="password"
value={formulario.password || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("password")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.password && <span style={{color:"red"}}>{error.password} </span>}
</div>

  
):(
  <div>
    <span>************</span>
    <div className="button-container">
    <button onClick={()=>setEditField("password")} className="edit-button"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"25px", height:"25pxS"}}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg> </button>
  </div>
  </div>
)}
</div>

            <div className="div-close">
              <button onClick={logoutUser}>Cerrar sesion</button>
            </div>
            </form>
        </div>
      </section>
    
    )
};
export default UserListComponent;
