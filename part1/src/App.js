import './App.css';
import Mensaje from './Mensaje.js';

//Las funciones con Mayusculas son componentes
const App = () => {
  const mensaje = 'Hola Mundo';
  const a = 2;
  const b = 3;
  return (
    <div className="App">
      <h1>{mensaje + ' me llamo Lidia'}</h1>
      <strong>Estamos trabajando en ello </strong>
      <p>El resultado de la suma es {a + b}</p>
      <Mensaje msg='Estamos pasando un parametro' color='red' />
      <Mensaje msg='Hola esto es mi parametro msg en react se llama props un parametro' color='blue' />
      <Description />
    </div>
  );
}



const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

export default App;
