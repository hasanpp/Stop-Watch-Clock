import { useState, useEffect, useRef } from "react";


function StopWatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{

        if(isRunning){
            intervalIdRef.current =  setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        } 

        return() => {
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() -elapsedTime;
    }
    
    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime/ (1000 * 60 * 60));
        let minuts = Math.floor(elapsedTime/ (1000 * 60 ) % 60);
        let seconds = Math.floor(elapsedTime/ (1000) % 60);
        let milliseconds = Math.floor((elapsedTime% 1000 )/10);

        hours = String(hours).padStart(2,"0");
        minuts = String(minuts).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");


        return `${hours}:${minuts}:${seconds}:${milliseconds}`;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
                <div className="control-buttons">
                    <button className="start-button" onClick={start}>Start</button>
                    <button className="stop-button" onClick={stop}>Stop</button>
                    <button className="reset-button" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default StopWatch
