import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment)}>+</button>
      <button>-</button>
      {isLogged ? <h3>Display if logged in</h3> : ''}
    </div>
  );
}

export default App;
