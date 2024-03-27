import { useEffect, useState } from 'react'

const Calendar = () => {
    const w = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const [currDay, setcurrDay]= useState(0);
    const [currDate, setcurrDate]= useState(0);
    const [currYear, setcurrYear]= useState(0);
    const [currMonth, setcurrMonth]= useState(0);
    function isLeap(y){
        return (currYear % 4 === 0 && currYear % 100 !== 0) || (currYear % 400 === 0);
    }
    const daysOfMonth= [31,28,31,30,31,30,31,31,30,31,30,31];
    isLeap(currYear)?daysOfMonth[1]=29:28;
    let numbersArray = [];
    const day1= new Date(currYear, currMonth, 1).getDay();
    for(let i=0; i<day1; i++){
        numbersArray.push("");
    }
    for(let i=1; i<=daysOfMonth[currMonth]; i++){
        numbersArray.push(i);
    }
    function setDate(){
        const date= new Date();
        setcurrDate(date.getDate());
        setcurrMonth(date.getMonth());
        setcurrYear(date.getFullYear());
    }
    useEffect(()=>{
        setDate()
    },[]);
  return (
    <div className='mt-20'>
        <div className='grid grid-cols-7 gap-x-4 text-[1rem] md:text-[1.5rem]'>
        {
          w.map((day, index)=>{
            return <div className='flex justify-center items-center'>{day}</div>
          })
        }
        </div>
        <div className='grid grid-cols-7 gap-x-4 text-[1rem] md:text-[1.5rem]'>

            {
                numbersArray.map((d)=>{
                    return <div className={`${currDate==d?"text-white":"text-[rgb(228,204,204)]"} flex justify-center items-center`}>{d}</div>
                })
            }
        </div>
    </div>
  )
}

export default Calendar
