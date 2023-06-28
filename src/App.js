import Logo from './components/logo';
import { useState } from 'react';
import Counter from "./components/counter"
import './App.css';

function App() {
  const [count, setCount]=useState(0)
  return (
<div> 
< Logo />
< Counter
count={count}
/>
<div id="buttons"><button className="button" onClick={()=>{
  setCount(count+1)
}} > add </button>

<button className="button" onClick={()=>{
  setCount(count-1)
}} > subtract </button>

<button  className="button" onClick={()=>{ 
  setCount(count-count)
}} > reset </button>
</div>
</div>
  )
}

export default App;
