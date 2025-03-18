import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Panel from './pages/panel';
import Login from './pages/login';
import Registro from './pages/registro';
import Comentarios from './pages/comentarios';
import { UserProvider } from './components/UserContext';

function App() {

  if (!localStorage.getItem('dades_tiquets_pendientes')){
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
}


  return (
    <>
      <UserProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Panel/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/comentarios" element={<Comentarios/>} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
