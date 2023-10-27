import { OrbitControls, useHelper } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { DirectionalLightHelper } from 'three'
import { Color } from 'three'
import { Perf } from 'r3f-perf'
import { Stars } from '@react-three/drei'

import Character from './Characters/Character'
import Rabbit from './Characters/Rabbit'
import Treestump from './World/Treestump'
import { Treetop } from './World/Trees/Treetop'
import Treetrunk from './World/Trees/Treetrunk'
import SecondTreeTrunk from './World/Trees/SecondTreeTrunk'
import Ambience from './World/Ambience'
import Portal from './World/Portal'
import Fireflies from './World/Fireflies'
import Grass from './World/Grass'
import Walls from './World/Walls'

export default function Experience() {

  const directionalLightRed = useHelper()
  const directionalLightBlue = useHelper()

  // useHelper(directionalLightRed, DirectionalLightHelper, 1, "red")
  // useHelper(directionalLightBlue, DirectionalLightHelper, 1, "blue")

  return <>
    
    {/* <Perf position="top-left"/> */}

    {/* <OrbitControls/> */}

    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />


    <Physics gravity={[0, -9.81, 0]} debug={false}>


      {/* //- Lights */}

      <directionalLight color="#ffffff" intensity={1} position={[10, 10, 10]} ref={directionalLightBlue} castShadow />

      <directionalLight color="#ffffff" intensity={0.5} position={[-10, 10, -10]} ref={directionalLightRed} castShadow />

      {/* <axesHelper scale={5} position={[0,2,0]}/> */}

      {/* //- Character */}
      <Character />

      {/* //- Rabbit */}
      <Rabbit position={[9.8, 1.4, 2.2]} scale={0.5} rotation={[0,-0.7,0]}/>
      <Treestump position={[10, 0.3, 2]} rotation={[0,11,0]}/>

      {/* //- Trees */}
      <Treetop
        position={[10, 5, -10]}
        rotation-y = {-0.5}
        colors={[
          new Color("#4a8d7e").convertLinearToSRGB(),
          new Color("#377f6a").convertLinearToSRGB(),
          new Color("#184f52").convertLinearToSRGB(),
          new Color("#143b36").convertLinearToSRGB(),
        ]}
      />

      <Treetrunk 
        position={[11, 0, -10.5]} 
        scale={0.6} 
        rotation-y={-0.8}
      />

      <Treetop
        position={[-10, 5, 0]}
        rotation-y = {-1.5}
        colors={[
          new Color("#4a8d7e").convertLinearToSRGB(),
          new Color("#377f6a").convertLinearToSRGB(),
          new Color("#184f52").convertLinearToSRGB(),
          new Color("#143b36").convertLinearToSRGB(),
        ]}
      />  
      <SecondTreeTrunk
        position={[-9.5, 0, 0]} 
        scale={0.6} 
        rotation-y={-0.8}
      />


      {/* //- Portal */}
      <Portal position={[0, 5.7, -30]} scale={2.5}/>


      {/* //- Ambience */}
      <Ambience position={[0,1, 0]}/>

      {/* //- Fireflies  */}
      <Fireflies shape="box"/>


      {/* //- Grass */}
      <Grass/>

      <Walls/>

      
      {/* //- Floor  */}
      <RigidBody type="fixed">
        <mesh position-y={0.3} rotation-x={- Math.PI * 0.5} scale={36} receiveShadow>
          <planeGeometry />
          <meshStandardMaterial color="#5ca364" transparent opacity={0}/>
        </mesh>
      </RigidBody>

    </Physics>

  </>
}