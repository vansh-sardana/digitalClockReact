import React from 'react'
import Clock from './components/Clock'
import Calendar from './components/Calendar'

const App = () => {
  return (
    <div className=' text-[4rem] bg-[rgb(183,158,158)] min-h-screen w-screen relative text-white font-[900] flex flex-col justify-center items-center p-10'>
      <Clock/>
      <Calendar/>
    </div>
  )
}

export default App
