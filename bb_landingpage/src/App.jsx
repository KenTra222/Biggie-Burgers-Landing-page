import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import './style.css'
import Experience from './Components/Experience'

const url = "https://wallpaperaccess.com/full/3514955.jpg"

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='min-w-full h-screen flex items-stretch'>

    <section className='section1 bg-slate-100 w-1/2 h-full flex flex-col items-center justify-evenly bg-cover bg-center'  
    style={{backgroundImage: "url('https://wallpaperaccess.com/full/3514955.jpg"}}>
      
   

        <h1 className='text-5xl'> Gigibite</h1>

        <div className='opacity-80 px-6 py-2 bg-black w-5/6 h-48 flex flex-col items-center justify-evenly '  >
          <p className='text-white text-base text-center'>20% off on all orders  over $200 and more </p>
          <button className='bg-slate-700 text-white w-40 h-12 rounded hover:text-black hover:bg-slate-300'>Show Me The Goods</button>
        </div>
       

    </section>

    <section className=' bg-black w-1/2 h-full flex flex-col items-center'>
    <p className='font-bold text-white mt-10'>Buy, Sell, or Trade your the latest tech!</p>
      <Canvas> 
        <Experience/>
      </Canvas>
    </section>
    </div>
  )
}

export default App
