import { useGLTF} from "@react-three/drei";

export default function Treetrunk(props) {    

    const model = useGLTF("/Trees/treetrunk.gltf");

    model.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;

        }
    });

    return (<>
        <primitive {...props}  object={model.scene} dispose={null}/>    
    </>

    );
}

useGLTF.preload("/Trees/treetrunk.gltf");