import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState, useEffect} from 'react' 
function App() {
  const [state, ChangeState] = useState(false)
  useEffect(()=>{
    console.log("mounting");
  },[])
  return (
    <div className="App">
      <h1 onClick={ ()=> ChangeState(!state)} >❤️</h1> 
      {state && <Counter></Counter>}  
    </div>
  );
}

export default App;
