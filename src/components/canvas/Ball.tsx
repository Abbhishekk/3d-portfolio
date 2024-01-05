/* eslint-disable @typescript-eslint/no-explicit-any */
import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,Float, OrbitControls, Preload, useTexture
 } from "@react-three/drei";

 import CanvasLoader from "../Loader"

const Ball = (props: any) => {
  const [decal] = useTexture([props.icon]);
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = (props:any) =>{
    return (
      <Canvas 
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          
        />
        <Ball icon={props.icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
    )
}

export default BallCanvas