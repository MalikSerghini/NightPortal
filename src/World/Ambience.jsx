import { Float, useGLTF} from "@react-three/drei"

export default function Ambience(props) {
    const model = useGLTF("./Ambience/ambience.gltf")

    const sceneClone = model.scene.clone()
  
    const testNode = sceneClone.getObjectByName("CubeA")
  
    if (testNode) {
      sceneClone.remove(testNode);
      sceneClone.remove(sceneClone.getObjectByName("CubeB"))  
      sceneClone.remove(sceneClone.getObjectByName("CubeC"))   
      sceneClone.remove(sceneClone.getObjectByName("CubeD"))   
      sceneClone.remove(sceneClone.getObjectByName("CubeE"))   
      sceneClone.remove(sceneClone.getObjectByName("CubeF"))  
    }
  
    return (
      <>

        <primitive object={sceneClone} dispose={null} {...props} />
  
        {/* //- Floating Rocks */}
        <Float speed={0.5} floatIntensity={0}>
          <mesh
            geometry={model.nodes.CubeA.geometry}
            position={[20, 3, -10]}
            material={model.nodes.CubeA.material}
            rotation={model.nodes.CubeA.rotation}
          />
        </Float>

        <Float speed={0.5} floatIntensity={0}>
          <mesh
            geometry={model.nodes.CubeB.geometry}
            position={[22, 0, 10]}
            material={model.nodes.CubeB.material}
            rotation={model.nodes.CubeB.rotation}
          />
        </Float>

        <Float speed={0.5} floatIntensity={0}>
          <mesh
            geometry={model.nodes.CubeC.geometry}
            position={[-22, 0, 0]}
            material={model.nodes.CubeC.material}
            rotation={model.nodes.CubeC.rotation}

          />
        </Float>

        <Float speed={0.5} floatIntensity={0}>
          <mesh
            geometry={model.nodes.CubeD.geometry}
            position={[-22, 0, -15]}
            material={model.nodes.CubeD.material}
            rotation={model.nodes.CubeD.rotation}

          />
        </Float>

        <Float speed={5} rotationIntensity={0} floatIntensity={2}>
          <mesh
            geometry={model.nodes.CubeE.geometry}
            position={[-8, 2, -25]}
            material={model.nodes.CubeE.material}
            rotation={model.nodes.CubeE.rotation}

          />
        </Float>

        <Float speed={3} floatIntensity={10} rotationIntensity={0}>
          <mesh
            geometry={model.nodes.CubeF.geometry}
            position={[6, 3, -25]}
            material={model.nodes.CubeF.material}
            rotation={model.nodes.CubeF.rotation}

          />
        </Float>
      </>
    );
  }
  
  useGLTF.preload("./Ambience/ambience.gltf")