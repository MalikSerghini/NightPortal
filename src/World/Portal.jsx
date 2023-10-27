import * as THREE from "three"
import { useGLTF, shaderMaterial, Float} from "@react-three/drei";
import { useRef} from "react";
import { useFrame, extend } from "@react-three/fiber";

import vertexShader from "../shader/portal/vertexShader.glsl";
import fragmentShader from "../shader/portal/fragmentShader.glsl";

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#C70039'),
        uColorEnd: new THREE.Color('#900C3F')
    },
    vertexShader,
    fragmentShader
)

extend({ PortalMaterial })

export default function Portal(props) {

    const portalMaterial = useRef()

    const model = useGLTF("./Portal/portal.gltf");

    model.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });

    useFrame((state, delta)=>{
        portalMaterial.current.uTime += delta
    })

    return (<>

            <Float speed={2} rotationIntensity={0.2} floatIntensity={2}>

                <primitive {...props} object={model.scene} dispose={null}/>    

                <mesh 
                    geometry={model.nodes.Portal.geometry}
                    {...props} 
                    position={[0, 9.4, -31.4]}
                >
                    <portalMaterial ref={portalMaterial} />
                </mesh>

            </Float>
            
    </>

    );
}

useGLTF.preload("./Portal/portal.gltf");