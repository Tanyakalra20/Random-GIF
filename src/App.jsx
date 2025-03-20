import React from 'react'
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className='w-full h-full flex flex-col background relative items-center '>
   <h1 className= 'absolute bg-white w-11/12 text-center mt-[40px] p-4 overflow-hidden rounded-2xl text-3xl font-bold '>
   RANDOM GIFS
   </h1>
   <div className='flex flex-col w-full items-center gap-y-10 mt-[80px]'>
    <Random/>
    <Tag/>
    
   </div>
    </div>
  )
}

export default App