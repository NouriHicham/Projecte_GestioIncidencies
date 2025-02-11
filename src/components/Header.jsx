import { Routes, Route } from 'react-router-dom';

export default function Header(){
   return (
      <Router>
         <header>
            <nav class="navbar navbar-light bg-light">
               <div class="container-fluid">
               <Link className="nav-link" to="/">PANEL</Link>
               <div>
                  <button class="btn btn-secondary ms-2"><Link className="nav-link" to="/">PANEL</Link></button>
                  <button class="btn btn-secondary ms-2"><Link className="nav-link" to="/">LOGIN</Link></button>
                  <button class="btn btn-secondary ms-2"><Link className="nav-link" to="/">REGISTRO</Link></button>
               </div>
               <div>
                  <span>administrador@fpllefia.com</span>
               </div>
               </div>
            </nav>
         </header>
      <div className="container mt-4">
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         </Routes>
      </div>
   </Router>
   );
}