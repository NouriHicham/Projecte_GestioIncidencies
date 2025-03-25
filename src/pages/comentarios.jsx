import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Comentario(props) {
  const { comentario, fecha, autor } = props;
  return (
    <div className="card p-3 mt-2">
      <h5 className="">Autor: <span>{autor}</span><span className="ms-4">{new Date(fecha).toLocaleString()}</span></h5>
      <p>{comentario}</p>
    </div>
  );
}

export default function Comentarios() {
  const { id } = useParams();
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const usuario = JSON.parse(localStorage.getItem("usuari")) || "Anonimo";

  useEffect(() => {
    // Cargar comentarios del localStorage al montar el componente
    const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    setComentarios(comentariosGuardados);
  }, []);

  const comentariosActuales = comentarios.filter((comentario) => comentario.id === parseInt(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    const comentarioTexto = e.target.elements.comentario.value.trim();
    if (comentarioTexto === "") return;

    const nuevoComentarioObj = {
      id: parseInt(id),
      comentario: comentarioTexto,
      fecha: new Date().toISOString(),
      autor: usuario.user // Aquí podrías poner el nombre del usuario logueado
    };

    const nuevosComentarios = [...comentarios, nuevoComentarioObj];
    setComentarios(nuevosComentarios);
    localStorage.setItem('comentarios', JSON.stringify(nuevosComentarios));
    setNuevoComentario("");
  };

  return (
    <>
      <main className="container mt-5">
        <div className="d-flex">
          <h1>Comentarios</h1>
          <button className="btn btn-link ms-auto"><Link className="nav-link" to="/"> &lt; Volver</Link></button>
        </div>
        <h2 className="my-4">Código ticket: <span>{id}</span></h2>
        {comentariosActuales.length > 0 ? (
          comentariosActuales.map((comentario, index) => (
            <Comentario key={index} comentario={comentario.comentario} fecha={comentario.fecha} autor={comentario.autor} />
          ))
        ) : (
          <p>No hay comentarios para este ticket.</p>
        )}
        <div>
          <form onSubmit={handleSubmit} className="form card p-3 shadow mt-4">
            <label htmlFor="comentario" className="form-label">Comentario: </label>
            <textarea 
              className="form-control" 
              id="comentario"
              required
            ></textarea>
            <div className="d-flex align-items-center mt-3">
              <button type="submit" className="btn btn-success ms-auto">Añadir comentario</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

