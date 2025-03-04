export default function TiquetsPendents(props){
   
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
            <button className="btn btn-success" title="Resolver ticket">
              Resolver
            </button>
          </td>
          <td>
            <button className="btn btn-warning" title="Añadir comentario">
              <i className="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </button>
          </td>
          <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i>
          </button></td>
          <td><button className="btn btn-danger" title="Eliminar ticket"><i className="bi bi-trash3"></i>
          </button></td>
        </tr>
      );
    
}