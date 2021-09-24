import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <span className='fondoNegro'>Hola Mundo</span>
      <button type='button' className='btn btn-primary'>
        Primary
      </button>
      <button type='button' className='btn btn-success'>
        Success
      </button>
      <div className='alert alert-primary' role='alert'>
        A simple primary alert—check it out!
      </div>
      <Card />
    </div>
  );
}

export default App;
