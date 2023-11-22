import './App.css';
import Navbar from './components/Navbar';
import Togglehook from './hooks';
import Counter from './hooks/counter';

function App() {
  const {value, toggle} = Togglehook(false)
  const [ count, increase, decrease ] = Counter();
  const [ count1, increase1, decrease1 ] = Counter();

  return (
    <div className="App">
      <button onClick={toggle}>Submit</button>
      {
        value ? <Navbar /> : ""
      }
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <p>{count1}</p>
      <button onClick={increase1}>+</button>
      <button onClick={decrease1}>-</button>
      
    </div> 
  );
}

export default App;
