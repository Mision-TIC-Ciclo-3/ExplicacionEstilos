import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='flex flex-col md:flex-row'>
        <div className='mx-2 bg-green-500'>Elemento 1</div>
        <div className='mx-2 bg-red-800'>Elemento 2</div>
        <div className='mx-2 bg-purple-400'>Elemento 3</div>
        <div className='mx-2 bg-yellow-700'>Elemento 4</div>
        <button className='boton'>Haz Click Aqui</button>
        <button className='boton'>Este es el boton 2</button>
      </div>
    </div>
  );
}

export default App;
