import { useFrame } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useKeyboardControls } from "@react-three/drei"
import { useRef, useState } from "react"

import * as THREE from "three"

import Fox from './Fox'

const MOVEMENT_SPEED = 0.5;
const MAX_VEL = 3;

export default function Character(){

    const [subscribeKey, getKeys] = useKeyboardControls()
    const [characterState, setCharacterState] = useState("idle")

    
    const rigidbody = useRef();
    const character = useRef();
    
    const [smoothedCameraPosition] = useState(() => new THREE.Vector3(-100,-200,-100))
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3())


    useFrame((state,delta)=>{

        
        //- Camera 
        const bodyPosition = rigidbody.current.translation()

        const cameraPosition = new THREE.Vector3()
        cameraPosition.copy(bodyPosition)
        cameraPosition.z += 5
        cameraPosition.y += 2

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 1

        smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
        smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

        state.camera.position.copy(smoothedCameraPosition)
        state.camera.lookAt(smoothedCameraTarget)

        
        //- Controls

        const {forward, backward, leftward, rightward} = getKeys()

        const impulse = {x: 0, y: 0, z: 0}        

        const linvel = rigidbody.current.linvel();

        let changeRotation = false;

        if(forward && linvel.z > -MAX_VEL){
            impulse.z -= MOVEMENT_SPEED
            changeRotation = true
        }

        if (backward && linvel.z < MAX_VEL) {
            impulse.z += MOVEMENT_SPEED;
            changeRotation = true;

        }

        if (leftward && linvel.x > -MAX_VEL) {
            impulse.x -= MOVEMENT_SPEED;
            changeRotation = true;

        }

        if (rightward && linvel.x < MAX_VEL) {
            impulse.x += MOVEMENT_SPEED;
            changeRotation = true;

        }

        rigidbody.current.applyImpulse(impulse, true);

        if (changeRotation) {
            const angle = Math.atan2(linvel.x, linvel.z);
            character.current.rotation.y = angle;
        }

        const keyPressedValues = Object.values(getKeys())

        const noKeyPressed = keyPressedValues.every(value => value === false)
    
        if(noKeyPressed){

            setCharacterState("idle");

        }else{

            setCharacterState("walking");

        }  
    })

    return <>

        <RigidBody 
            ref={rigidbody} 
            canSleep={false} 
            linearDamping={0.5} 
            angularDamping={0.5}
            enabledRotations={[false, false, false]}
            position={[0,0,14]}         
        >          

            <group ref={character} rotation-y={-Math.PI}>

                <Fox
                    state = {characterState}
                    scale={0.02}
                    
                />

            </group>

            
        </RigidBody>

    </>
}