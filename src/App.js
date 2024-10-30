import React,{useState,useMemo} from 'react'
import './App.css'
const App = () => {
  const [weight,setWeight]=useState(80);
  const [height,setHeight]=useState(180);
 
  function onWeightChange(event){
    setWeight(event.target.value);
  }

  function onHeightChange(event){
    setHeight(event.target.value);
  }

  const output=useMemo(()=>{
    const heightInMeters=height/100;
    return (weight/(heightInMeters*heightInMeters)).toFixed(2);
  },[weight,height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight:{weight}</p>
        <input className='input-slider' type="range" step="1" min="40" max="200" onChange={onWeightChange}/>
        <p className='slider-output'>Height:{height}</p>
        <input className='input-slider' type="range" step="1" min="140" max="220" onChange={onHeightChange}/>
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
