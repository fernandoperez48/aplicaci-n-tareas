import React from 'react'
import TareaFormulario from './TareaFormulario'
import '../styles/ListaDeTareas.css'
import { useState } from 'react'
import Tareas from './Tareas'

const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        if(!tarea.texto || /^\s*$/.test(tarea.texto)){
            return;
        }

        const nuevasTareas = [tarea, ...tareas];
        setTareas(nuevasTareas);
    }

    const eliminarTarea = (id) => {
        const eliminarTarea = [...tareas].filter(tarea => tarea.id !== id);
        setTareas(eliminarTarea);
    }

    const completarTarea = (id) => {
        let actualizarTareas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(actualizarTareas);
    }

  return (
    <div>
        <>
          <TareaFormulario onSubmit={agregarTarea}/>
          <div className='tareas-lista-contenedor'>
            {
                tareas.map((tarea) => 
                <Tareas 
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}/>
                )
            }
          </div>
        </>
    </div>
  )
}

export default ListaDeTareas
