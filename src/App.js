import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import logo from './images/logo.png'

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={logo}
        alt='imagen logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
     
      </div>
    </div>
  );
}

export default App;
