import React, { useEffect, useState } from 'react'


const App = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const [cHour, setcHour]= useState(0);
  const [cMin, setcMin]= useState(0);
  const [cSec, setcSec]= useState(0);
  const [cDay, setcDay]= useState(0);
  const [cDate, setcDate]= useState(0);
  const [cYear, setcYear]= useState(0);
  const [cMonth, setcMonth]= useState(0);


  function getTime(){
      setInterval(() => {
        const time= new Date();
        
        const hour= time.getHours();
        hour<10? setcHour('0'+hour):setcHour(hour);
      
        const min= (time.getMinutes());
        (min<10)? setcMin('0'+min):setcMin(min);
        
        const sec= time.getSeconds();
        sec<10? setcSec('0'+sec): setcSec(sec);
      
        setcDay(time.getDay());

        const date= time.getDate();
        date<10? setcDate('0'+date): setcDate(date);

        setcYear(time.getFullYear());
        setcMonth(time.getMonth());

        
    }, 1000);
  }

  useEffect(()=>{
    getTime();
  }, []);

  return (
    <div className=' text-[4rem] bg-[rgb(183,158,158)] min-h-screen w-screen text-white flex justify-center items-center font-[900] relative flex-col p-10'>
      <div className='text-[1.2rem] md:text-[2rem] gap-[8px] flex justify-around flex-wrap'>
        {
          daysOfWeek.map((day, index)=>{
            return <div className={index==cDay?"text-white": "text-[rgb(228,204,204)]"}>{day}</div>
          })
        }
      </div>

      <div className='flex justify-center items-center md:text-[6.25rem] '>
        <span> {cHour} </span>
        <span> : </span>
        <span> {cMin} </span>
        <span> : </span>
        <span> {cSec} </span>
      </div>

      <div className='flex justify-center items-center text-[1.8rem] md:text-[2.5rem]'>
          <span>{cDate}</span>
          <pre>, </pre>
          <span>{months[cMonth]}</span>
          <pre> </pre>
          <span>{cYear}</span>

      </div>
    </div>
  )
}

export default App
