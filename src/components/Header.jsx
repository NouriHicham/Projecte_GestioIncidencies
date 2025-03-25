import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "./UserContext";

export default function Header(){
   const [user, setUser] = useState("");
   const [active, setActive] = useState(false);

   //obtener el nombre del usuario que ha iniciado sesión
   useEffect(() => {
      const usuario = JSON.parse(localStorage.getItem('usuari'));
      if(usuario){
         setUser(usuario.user);
         setActive(false);
      }else{
         setUser("Inicie sesión");
         setActive(true);
      }
   }, []);

   return (
      <>
         <header>
            <nav className="navbar navbar-light bg-light">
               <div className="container-fluid">
               <Link className="navbar-brand" to="/">PANEL</Link>
               <div>
                  <button className="btn btn-secondary ms-2"><Link className="nav-link" to="/">PANEL</Link></button>
                  <button className="btn btn-secondary ms-2"><Link className="nav-link" to="/login">LOGIN</Link></button>
                  <button className="btn btn-secondary ms-2"><Link className="nav-link" to="/registro">REGISTRO</Link></button>
               </div>
               <div>
                  <span>{user} <button onClick={logout} disabled={active} className="btn btn-secondary ms-2">Cerrar sesion</button> </span>
               </div>
               </div>
            </nav>
         </header>
         <div className="container mt-4">
         </div>
      </>
   );
}