import React from 'react'
import '../styles/Tareas.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tareas = ({id,texto, completada,completarTarea,eliminarTarea}) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div 
        className='tareas-texto'
        onClick={() => completarTarea(id)}>
            {texto}
        </div>
        <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
            <AiOutlineCloseCircle className='tarea-icono'/>
        </div>
    </div>
  )
}

export default Tareas