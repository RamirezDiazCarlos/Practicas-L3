
import { useState } from "react";
import AgregarTarea from "./components/agregarTarea/AgregarTarea"
import ListaTareas from "./components/listaTareas/ListaTareas";


function App() {

  const [tareas, setTareas] = useState([]);
  const [contadorTareas, setContadorTareas] = useState(1);

  const agregarTarea = (tarea) => {
    const nuevaTarea = { id: contadorTareas, texto: tarea, completada: false };
    setTareas([...tareas, nuevaTarea]);
    setContadorTareas(contadorTareas + 1);
  };

  const alternarCompletada = (idTarea) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === idTarea ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (idTarea) => {
    setTareas(tareas.filter((tarea) => tarea.id !== idTarea));
  };



  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="w-50">

        <h1 className="text-center mb-4">Tareas</h1>

        <AgregarTarea agregarTarea={agregarTarea} />
        <div className="mt-3">
          <ListaTareas
            tareas={tareas}
            alternarCompletada={alternarCompletada}
            eliminarTarea={eliminarTarea} />
        </div>
      </div>
    </div>
  );


}


export default App
