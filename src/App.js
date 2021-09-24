import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <form>
        <input type='email' />
        <input type='password' />
        <input type='text' defaultValue='Daniel' disabled />
        <select required defaultValue={0}>
          <option disabled value={0}>
            Seleccione una opcion
          </option>
          <option>op1</option>
          <option>op2</option>
        </select>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
