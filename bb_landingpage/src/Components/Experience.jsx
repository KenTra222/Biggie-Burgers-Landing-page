import React from 'react'
import { useFBX, Center } from '@react-three/drei'


const Experience = () => {

   const burger = useFBX('/models/burger.fbx')
   console.log(burger);
   
  return <>
    <pointLight position={[0, 4, 0]}/>
    <ambientLight/>
    <Center>

        <primitive object={burger} scale={0.0075}/>
    </Center>
    </>
}

export default Experience