import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Usuarios() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const roles = ['admin', 'user',];
    const usuario = JSON.parse(localStorage.getItem('usuari'));

    useEffect(() => {
      const usuarios = JSON.parse(localStorage.getItem('dades_usuaris'));
      if (usuarios) {
        setUsers(usuarios);
      }
    }, []);

    const handleRoleChange = (id, newRole) => {
      if(usuario && usuario.role === 'admin') {
        const actualizarRole = users.map((user) =>
          user.id === id ? { ...user, role: newRole } : user
        );
        setUsers(actualizarRole);
        localStorage.setItem('dades_usuaris', JSON.stringify(actualizarRole));

      } else {
        alert("No tienes permisos para cambiar roles.");
      }
    };

    const handleDeleteUser = (id) => {
      if(usuario && usuario.role === 'admin') {
        const filtrarUsuario = users.filter((user) => user.id !== id);
        setUsers(filtrarUsuario);
        localStorage.setItem('dades_usuaris', JSON.stringify(filtrarUsuario));
        
      } else {
        alert("No tienes permisos para eliminar usuarios.");
      }
    };

    return (
      <div className='container'>
        <h2>User Management</h2>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.user}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                    {roles.map((role) => (
                      <option key={role}>{role}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/register')}
        >
          Add User
        </button>
      </div>
    );
  }
