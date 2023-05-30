import React, {useEffect, useRef, useState} from 'react'
import { useFBX, Center, OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { motion } from "framer-motion-3d"


const Experience = (props) => {

    const phoneRef = useRef()

    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')

    const headset = useFBX('/models/headset/headset.fbx')
    
    
 

   useFrame((state)=>{
        const time = state.clock.getElapsedTime()
        const rotationSpeed = 0.65; // Adjust the rotation speed as desired
    const rotation = (time * rotationSpeed) % (2 * Math.PI); // Calculate the rotation angle
    phoneRef.current.rotation.y = rotation; // Update the rotation of the phone model
   })
   
  return <>


  
    <pointLight position={[0, 4, 0]}/>
    <ambientLight/>
    <Center>
     

         
      
    <primitive ref={phoneRef} object={scene} {...props} />
    </Center>
    </>
}

export default Experience

