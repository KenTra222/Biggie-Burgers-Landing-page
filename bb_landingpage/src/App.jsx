import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import './style.css'
import Experience from './Components/Experience'

const url = "https://wallpaperaccess.com/full/3514955.jpg"

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='min-w-full h-screen flex items-stretch'>

    <section className=' bg-slate-100 w-3/4 h-full flex flex-col items-center justify-evenly bg-cover bg-center bg-no-repeat'  
    style={{backgroundImage: "url('https://www.macworld.com/wp-content/uploads/2021/03/cio_vr_virtual_reality_headset_by_damir_khabirov_gettyimages-1153003888_2400x1600-100802381-orig-2.jpg?quality=50&strip=all"}}>
      
   

        <h1 className='text-5xl text-white'> GIGIBITE</h1>

        <div className='opacity-80 px-6 py-2 w-5/6 h-48 flex flex-col items-center justify-evenly '  >
          <p className='text-white text-base text-center'>20% off on all orders  over $200 and more </p>
          <button className='bg-blue-900 text-white w-40 h-12 rounded hover:text-black hover:bg-slate-300'>Show Me The Goods</button>
        </div>
       

    </section>

    <section className=' bg-white w-1/4 h-full flex flex-col items-center'>
    <p className='font-bold text-black mt-20 px-4'>Buy, Sell, or Trade your the latest tech! And get a deal on your next purchase</p>
      <Canvas> 
        <Experience/>
      </Canvas>
    </section>
    </div>
  )
}

export default App
