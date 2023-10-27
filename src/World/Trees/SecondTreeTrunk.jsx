import { useGLTF} from "@react-three/drei";
import { useMemo } from "react";

export default function SecondTreeTrunk(props) {    

    const model = useGLTF("/Trees/treetrunk.gltf");

    const copiedScene = useMemo(() => model.scene.clone(), [model])

    copiedScene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });

    return (<>
        <primitive {...props}  object={copiedScene} dispose={null}/>    
    </>

    );
}

useGLTF.preload("/Trees/treetrunk.gltf");