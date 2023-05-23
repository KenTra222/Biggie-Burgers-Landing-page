import React, {useEffect, useRef, useState} from 'react'
import { useFBX, Center,  } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { motion } from "framer-motion-3d"


const Experience = () => {

    const burgerRef = useRef()


    const headset = useFBX('/models/headset/headset.fbx')
    const phone = useFBX('/models/phone/Smartphone.fbx')
    
 

   useFrame((state)=>{
        const time = state.clock.getElapsedTime()
        const y = Math.sin(time)
   })
   
  return <>
  
    <pointLight position={[0, 4, 0]}/>
    <ambientLight/>
    <Center>
     

         
      
        <primitive object={phone} scale={0.25}>
            <meshBasicMaterial color={'hotpink'}/>
        </primitive>
    </Center>
    </>
}

export default Experience