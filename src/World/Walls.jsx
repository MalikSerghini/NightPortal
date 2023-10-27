import { CuboidCollider } from "@react-three/rapier"
import { RigidBody } from "@react-three/rapier"

export default function Walls(){
    return<>

        <RigidBody type="fixed">

            <CuboidCollider position={[18, 0, 0]} args={[0.5, 10, 18]} />
            <CuboidCollider position={[-18, 0, 0]} args={[0.5, 10, 18]} />
            <CuboidCollider position={[0, 0, -19]} args={[18, 10, 0.5]} />
            <CuboidCollider position={[0, 0, 20]} args={[18, 10, 0.5]} />           

        </RigidBody>
    </>    
}