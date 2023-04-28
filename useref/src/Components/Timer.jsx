import { useRef, useState } from "react"



export default function Timer() {
  
    const[timer,setTimer]=useState(0)
    let timerId=useRef(0)
const startTimer=()=>{
  timerId.current =  setInterval(()=>{
        // setTimer(timer+1)
        setTimer((prevTimer)=>prevTimer+1)
    },1000)
}
const stopTimer=()=>{
    clearInterval(timerId.current);
}





  return (
    <div>
        <h2>Timer is {timer}</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

