import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'

import Interface from './Interface.jsx'
import Caption from './World/Caption.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <KeyboardControls
    map={[
      {name: 'forward', keys: ['ArrowUp', 'KeyW']},
      {name: 'backward', keys: ['ArrowDown', 'KeyS']},
      {name: 'leftward', keys: ['ArrowLeft', 'KeyA']},
      {name: 'rightward', keys: ['ArrowRight', 'KeyD']},
      {name: 'jump', keys: ['Space']}
    ]}

  >

    <Canvas 
        shadows
        camera={{
          position: [20,30,40]
        }}
      >
        <Experience/>  
    </Canvas>

    <Interface/>
    <Caption/>

  </KeyboardControls>

)
