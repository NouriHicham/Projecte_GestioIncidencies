import { useEffect } from "react";

export default function Panel() {

  useEffect(() => {
    const tiquetsPendientes = [
      {
        id: 123459,
        fecha: '18/04/2023',
        aula: 'T6',
        grupo: 'DAW1',
        ordenador: 'PC3',
        descripcion: 'Error de impresora',
        alumno: 'Ana Martínez',
      },
      {
        id: 123460,
        fecha: '19/04/2023',
        aula: 'T8',
        grupo: 'DAW2',
        ordenador: 'PC4',
        descripcion: 'Problema de acceso a archivos',
        alumno: 'Pedro Gómez',
      },
      {
        id: 123461,
        fecha: '20/04/2023',
        aula: 'T6',
        grupo: 'DAW1',
        ordenador: 'PC1',
        descripcion: 'Aplicación se cierra inesperadamente',
        alumno: 'Sofía Fernández',
      },
      {
        id: 123462,
        fecha: '21/04/2023',
        aula: 'T7',
        grupo: 'DAW2',
        ordenador: 'PC2',
        descripcion: 'Problema de conexión a la red',
        alumno: 'Luis Torres',
      },
      {
        id: 123463,
        fecha: '22/04/2023',
        aula: 'T8',
        grupo: 'DAW1',
        ordenador: 'PC3',
        descripcion: 'Archivos corruptos',
        alumno: 'Carolina Ramírez',
      },
    ];

    const tiquetsResueltos = [
      {
        id: 123457,
        fecha: '16/04/2023',
        fechaResuelto: '15/05/2023',
        aula: 'T7',
        grupo: 'DAW2',
        ordenador: 'PC1',
        descripcion: 'Problema de conexión a Internet',
        alumno: 'Maria López',
      },
      {
        id: 123458,
        fecha: '17/04/2023',
        fechaResuelto: '15/05/2023',
        aula: 'T8',
        grupo: 'DAW1',
        ordenador: 'PC2',
        descripcion: 'Pantalla en blanco',
        alumno: 'Juan Rodríguez',
      },
      {
        id: 123459,
        fecha: '18/04/2023',
        fechaResuelto: '15/05/2023',
        aula: 'T8',
        grupo: 'DAW1',
        ordenador: 'PC3',
        descripcion: 'Error de impresora',
        alumno: 'Ana Martínez',
      },
    ];

    localStorage.setItem('dades_tiquets_pendientes', JSON.stringify(tiquetsPendientes));
    localStorage.setItem('dades_tiquets_resueltos', JSON.stringify(tiquetsResueltos));
  }, []);

  const tiquetsPendientes = JSON.parse(localStorage.getItem('dades_tiquets_pendientes'));
  const tiquetsResueltos = JSON.parse(localStorage.getItem('dades_tiquets_resueltos'));

  function TablaPendientes(props) {
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

  function TablaResueltos(props) {
    return (
      <tr key={props.ticket.id}>
        <td>{props.ticket.id}</td>
        <td>{props.ticket.fecha}</td>
        <td>{props.ticket.fechaResuelto}</td>
        <td>{props.ticket.aula}</td>
        <td>{props.ticket.grupo}</td>
        <td>{props.ticket.ordenador}</td>
        <td>{props.ticket.descripcion}</td>
        <td>{props.ticket.alumno}</td>
      </tr>
    );
  }

  return (
    <>
      <main className="container mt-5">
        <h1>Administración de incidencias</h1>
        <h2 className="mt-5">Tickets pendientes</h2>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha</th>
              <th>Aula</th>
              <th>Grupo</th>
              <th>Ordenador</th>
              <th>Descripción</th>
              <th>Alumno</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tiquetsPendientes.map((ticket) => (<TablaPendientes ticket={ticket} key={ticket.id} />))}

          </tbody>
        </table>

        <h2 className="mt-5">Tickets resueltos</h2>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha</th>
              <th>Fecha resuelto</th>
              <th>Aula</th>
              <th>Grupo</th>
              <th>Ordenador</th>
              <th>Descripción</th>
              <th>Alumno</th>
            </tr>
          </thead>
          <tbody>
            {tiquetsResueltos.map((ticket) => (<TablaResueltos ticket={ticket} key={ticket.id} />))}

          </tbody>
        </table>
      </main>


    {/* Modal */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Observaciones</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Código incidencia: <span>123546</span></p>
            <label htmlFor="comentario" className="form-label">Comentario:</label>
            <input className="form-control" defaultValue="Este es un comentario sobre esta incidencia" />
            <p className="small text-end">Autor: <span>Pepe Loco</span></p>
          </div>
          <div className="modal-footer">

            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}