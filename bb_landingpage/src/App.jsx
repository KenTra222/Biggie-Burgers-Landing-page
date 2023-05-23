import { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import './style.css'
import Experience from './Components/Experience'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='min-w-full h-screen flex items-stretch'>
    <section className='bg-amber-50 w-1/2 h-full'>
      <div>

        <h1 className=''> hello you guys!!</h1>
      </div>

    </section>
    <section className='bg-slate-950 w-1/2 h-full'>

      <Canvas> 
        
        <Experience/>
      </Canvas>
    </section>
    </div>
  )
}

export default App
