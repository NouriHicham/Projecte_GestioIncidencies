export default function TiquetsResolts(props){
   
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