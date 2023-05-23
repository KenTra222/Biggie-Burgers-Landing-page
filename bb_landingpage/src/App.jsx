import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import './style.css'
import Experience from './Components/Experience'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='min-w-full h-screen flex items-stretch'>
    <section className='bg-amber-500 w-1/2 h-full flex flex-col items-center justify-evenly'>
      
   

        <h1 className='text-5xl'> Gigibite</h1>
        <div className='bg-green-900 w-5/6 h-32 flex flex-col items-center justify-evenly'>
          <p className='text-white'>20% off on all orders  over $200 and more </p>
          <button className='bg-black text-white w-28 h-8 rounded'>Shop now</button>
        </div>
       

    </section>
    <section className=' w-1/2 h-full'>
    <p>Buy, Sell, or Trade your the latest tech!</p>
      <Canvas> 
        <Experience/>
      </Canvas>
    </section>
    </div>
  )
}

export default App
