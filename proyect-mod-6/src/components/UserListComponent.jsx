import { useContext, useState,useEffect } from "react";
import { UserContext } from "../context/UserContext";
const UserListComponent = ()=>{
  const {isLoggedIn,authUser, updatedUser,logoutUser}=useContext(UserContext);
  const[editField, setEditField] = useState(null);
  const [formulario,setFormulario]=useState (authUser||{});
  const [photo, setPhoto]= useState(authUser.foto ||null);
  const [error,setError] = useState({});
  //
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
  if (!formulario.foto && !photo) {
    newError.foto = "Debes subir una foto de perfil.";
  }
  
  setError(newError);
  return Object.keys(newError).length ===0;
};

    return(
        <div className="div-perfil">
          <form className="form-perfil" >
            <h2>Tu perfil</h2>
            <div>
              <h3>Nombre</h3>
              {editField ==="nombre" ?(
        <div><input type="text"
        name="nombre"
        value={formulario.nombre || ""}
        onChange={handleChange} /> 
        <button onClick={()=>handleSave("nombre")}>Guardar</button>
        <button onClick={handleCancel}>Cancelar</button>
        {error.nombre && <span style={{color:"red"}}>{error.nombre} </span>}
        </div>

                
              ):(
                <div>
                  <span>{authUser.nombre}</span>
                  <button onClick={()=>setEditField("nombre")}>Editar</button>
                </div>
              )}
            </div>

            <div>
<h3>Apellidos</h3>
{editField ==="apellidos" ?(
<div><input type="text"
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
    <button onClick={()=>setEditField("apellidos")}>Editar</button>
  </div>
)}
</div>

<div>
<h3>Email</h3>
{editField ==="email" ?(
<div><input type="text"
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
    <button onClick={()=>setEditField("email")}>Editar</button>
  </div>
)}
</div>

<div>
<h3>Localidad</h3>
{editField ==="localidad" ?(
<div><input type="text"
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
    <button onClick={()=>setEditField("localidad")}>Editar</button>
  </div>
)}
</div>

<div>
<h3>Calle</h3>
{editField ==="calle" ?(
<div><input type="text"
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
    <button onClick={()=>setEditField("calle")}>Editar</button>
  </div>
)}
</div>

<div>
<h3>Número</h3>
{editField ==="numero" ?(
<div><input type="text"
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
    <button onClick={()=>setEditField("numero")}>Editar</button>
  </div>
)}
</div>

<div>
<h3>Código Postal</h3>
{editField ==="codigoPostal" ?(
<div><input type="text"
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
    <button onClick={()=>setEditField("codigoPostal")}>Editar</button>
  </div>
)}
</div>

<div>
<h3>DNI</h3>
{editField ==="dni" ?(
<div><input type="text"
name="dni"
value={formulario.dni || ""}
onChange={handleChange} /> 

<button onClick={()=>handleSave("dni")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.dni && <span style={{color:"red"}}>{error.dni} </span>}
</div>

  
):(
  <div>
    <span>{authUser.dni}</span>
    <button onClick={()=>setEditField("dni")}>Editar</button>
  </div>
)}
</div>

<div>
<h3>Número Tarjeta</h3>
{editField ==="numeroTarjeta" ?(
<div><input type="text"
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
    <button onClick={()=>setEditField("numeroTarjeta")}>Editar</button>
  </div>
)}
</div>

<div>
<h3>Caducidad</h3>
{editField ==="caducidad" ?(
<div><input type="text"
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
    <button onClick={()=>setEditField("caducidad")}>Editar</button>
  </div>
)}
</div>
<div>
<h3>Contraseña</h3>
{editField ==="password" ?(
<div><input type="password"
name="password"
value={formulario.password || ""}
onChange={handleChange} /> 
<button onClick={()=>handleSave("password")}>Guardar</button>
<button onClick={handleCancel}>Cancelar</button>
{error.password && <span style={{color:"red"}}>{error.password} </span>}
</div>

  
):(
  <div>
    <span>{authUser.password}</span>
    <button onClick={()=>setEditField("password")}>Editar</button>
  </div>
)}
</div>
<div>
          <h3>Foto de perfil:</h3>
          {editField === "foto" ? (
            <div>
              <input type="file" onChange={handleFileChange} />
              <button onClick={() => handleSave("foto")}>Guardar</button>
              <button onClick={handleCancel}>Cancelar</button>
              {error.foto && <span style={{ color: "red" }}>{error.foto}</span>}
            </div>
          ) : (
            <div>
              {photo ? (
                <img src={photo} alt="Foto de perfil" style={{ width: "100px", height: "100px" }} />
              ) : (
                <span>Foto de perfil</span>
              )}
              <button onClick={() => setEditField("foto")}>Editar</button>
            </div>
          )}
        </div>
            <div>
              <button onClick={logoutUser}>Cerrar sesion</button>
            </div>
            </form>
        </div>
    
    )
};
export default UserListComponent;
