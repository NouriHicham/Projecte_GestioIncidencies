import React, { useState } from 'react';
import { getTiquetsPendents, setTiquetsPendents } from '../components/TiquetsDades';

export default function TiquetForm() {
  const [aula, setAula] = useState('');
  const [ordinador, setOrdinador] = useState('');
  const [descripcio, setDescripcio] = useState('');
  const [alumne, setAlumne] = useState('');
  const [grup, setGrup] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouTiquet = {
      id: Date.now(), // genera id segun el fecha
      fecha: new Date().toLocaleDateString(),
      aula,
      ordenador: ordinador,
      descripcion: descripcio,
      alumno: alumne,
      grupo: grup,
    };

    const tiquetsActuals = getTiquetsPendents();
    setTiquetsPendents([...tiquetsActuals, nouTiquet]);

    setAula('');
    setOrdinador('');
    setDescripcio('');
    setAlumne('');
    setGrup('');
  };

  return (
    <form onSubmit={handleSubmit} className="form card p-3 shadow mt-4 container">
      <div className="mb-3">
        <label htmlFor="aula" className="form-label">Aula:</label>
        <input
          type="text"
          className="form-control"
          id="aula"
          value={aula}
          onChange={(e) => setAula(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="grup" className="form-label">Grup:</label>
        <input
          type="text"
          className="form-control"
          id="grup"
          value={grup}
          onChange={(e) => setGrup(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ordinador" className="form-label">Ordinador:</label>
        <input
          type="text"
          className="form-control"
          id="ordinador"
          value={ordinador}
          onChange={(e) => setOrdinador(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcio" className="form-label">Descripció:</label>
        <textarea
          className="form-control"
          id="descripcio"
          value={descripcio}
          onChange={(e) => setDescripcio(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="alumne" className="form-label">Alumne:</label>
        <input
          type="text"
          className="form-control"
          id="alumne"
          value={alumne}
          onChange={(e) => setAlumne(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Crear Tiquet</button>
    </form>
  );
}