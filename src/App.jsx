import React from 'react'
import Clock from './components/Clock'
import Calendar from './components/Calendar'
import StopWatch from './components/StopWatch'

const App = () => {
  return (
    <div className=' text-[4rem] bg-[rgb(183,158,158)] min-h-screen w-screen relative text-white font-[900] flex flex-col justify-center items-center p-10 gap-y-20'>
      <Clock/>
      <Calendar/>
      <StopWatch/>
    </div>
  )
}

export default App
