import React, {useRef, useState} from 'react'

const StopWatch = () => {
    let timerid= useRef("");
    const [sec, setSec]= useState(0);
    const startHandler= ()=>{
        timerid.current= setInterval(()=>{
            setSec(sec=>sec+1);
        }, 1000);
        console.log(timerid);
    }
    const stopHandler= ()=>{
        clearInterval(timerid.current);
        setSec(0);
    }
  return (
    <div>
        <div className='text-[1rem] md:text-[1.5rem] text-center text-white'>StopWatch</div>
        <div className='grid grid-cols-3 gap-x-4 text-[1rem] md:text-[1.5rem] text-center'>
            <button onClick={startHandler}>Start</button>
            <span>{sec}</span>
            <button onClick={stopHandler}>Stop</button>
        </div>
    </div>
  )
}

export default StopWatch