import { Link } from "react-router-dom";

export default function Header(){
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
                  <button className="btn btn-secondary ms-2"><Link className="nav-link" to="/comentarios">COMENTARIOS</Link></button>
               </div>
               <div>
                  <span>administrador@fpllefia.com</span>
               </div>
               </div>
            </nav>
         </header>
         <div className="container mt-4">
         </div>
      </>
   );
}