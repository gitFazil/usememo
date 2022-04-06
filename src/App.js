import { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import './App.css';
import CheckM from './CheckM'

function App() {
  const [value, setValue] = useState(0)
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])
  const input = useRef()
  const memoCom = useMemo(() =>
    <CheckM />
    , [count])

  const getItems = useCallback(
    () => {
      console.log("useCallback")
      return value === isNaN ? [value, parseInt(value) + 2, parseInt(value) + 3] : [0]
    }, [value]
  )
  useEffect(() => {
    setList(getItems())
  }, [value])
  return (
    <div className="App">
      <input ref={input} type='text' value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => {
        input.current.style.backgroundColor = 'black';
        setCount(count + 1)
      }}>change color</button>
      {list.map((i) => <h2 key={i}>{i}</h2>)}
      <h4>{count}</h4>
      <CheckM />
      <br />
      {memoCom}

    </div>
  );
}

export default App;
