import { useState, useRef, useMemo } from 'react'
import './App.css';
import CheckM from './CheckM'
import Memo from './Memo';

function App() {
  const [value, setValue] = useState(0)
  const [count, setCount] = useState(0)
  const input = useRef()
  const memoCom = useMemo(() => <CheckM />, [])
  return (
    <div className="App">
      <input ref={input} type='text' value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => {
        input.current.style.backgroundColor = 'black';
      }}>change color</button>
      <button onClick={() => setCount(count + true)}>Counter</button>
      <br />
      {memoCom}
      <Memo value={count} />
    </div>
  );
}

export default App;
