import React from 'react'
import '../styles/TareaFormulario.css'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const TareaFormulario = (props) => {

  const [input, setInput] = useState('')

  const manejarCambio = (e) => {
    setInput(e.target.value)
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto:input,
      completada:false
    }

    props.onSubmit(tareaNueva);
  }

  return (
    <form 
    className='tarea-formulario'
    onSubmit={manejarEnvio}>
        <input 
        className='tarea-input'
        type='text' 
        placeholder='Nueva tarea'
        name='texto' 
        onChange={manejarCambio}/>
        <button 
        className='tarea-boton' 
        type='submit'>
            Agregar</button>
    </form>
  )
}

export default TareaFormulario