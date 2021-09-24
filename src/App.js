import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

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
      <div className='card'>
        <img src='...' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
