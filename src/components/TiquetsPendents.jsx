export default function TiquetsPendents(props){
   
  function eliminarTiquet(id){
    // Eliminar el tiquet de la lista y localStorage
    const pendientes = JSON.parse(localStorage.getItem('dades_tiquets_pendientes')) || [];
    const pendientesActualitzats = pendientes.filter((tiquet) => tiquet.id!== id);
    localStorage.setItem('dades_tiquets_pendientes', JSON.stringify(pendientesActualitzats));
  }

  function handleEliminar(){
    eliminarTiquet(props.ticket.id);
    location.reload();
  }

  function resolverTiquet(id){
    // Resolver el tiquet y añadirlo a la lista de resueltos y localStorage
    const pendientes = JSON.parse(localStorage.getItem('dades_tiquets_pendientes')) || [];
    const resueltos = JSON.parse(localStorage.getItem('dades_tiquets_resueltos')) || [];
    const pendiente = pendientes.find((tiquet) => tiquet.id === id);

    const fecha = new Date();
    pendiente['fechaResuelto'] = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
    resueltos.push(pendiente);
    localStorage.setItem('dades_tiquets_pendientes', JSON.stringify(pendientes.filter((tiquet) => tiquet.id!== id)));
    localStorage.setItem('dades_tiquets_resueltos', JSON.stringify(resueltos));
  }

  function handleResolver(){
    resolverTiquet(props.ticket.id);
    location.reload();
  }

  return (
    <tr key={props.ticket.id}>
      <td>{props.ticket.id}</td>
      <td>{props.ticket.fecha}</td>
      <td>{props.ticket.aula}</td>
      <td>{props.ticket.grupo}</td>
      <td>{props.ticket.ordenador}</td>
      <td>{props.ticket.descripcion}</td>
      <td>{props.ticket.alumno}</td>
      <td>
        <button className="btn btn-success" title="Resolver ticket" onClick={handleResolver}>Resolver</button>
      </td>
      <td>
        <button className="btn btn-warning" title="Añadir comentario">
          <i className="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
        </button>
      </td>
      <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i>
      </button></td>
      <td><button className="btn btn-danger" title="Eliminar ticket" onClick={handleEliminar}><i className="bi bi-trash3"></i>
      </button></td>
    </tr>
  );
    
}