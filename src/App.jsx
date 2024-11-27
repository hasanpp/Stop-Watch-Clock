import DigitalClock from "./DigitalClock"
import StopWatch from "./StopWatch";
import { useState } from "react"

function App() {

  const [isClock, setIsClock] = useState(true);

  function handleClockChage(){
    setIsClock(!isClock)
  }
  
  return (
    <>
      {isClock ? <DigitalClock/>:<StopWatch/>}
      <br />
      <button className="Timer-button" onClick={handleClockChage}>{isClock ?"Stop Watch":"Clock"}</button>
    </>
  )
}

export default App
