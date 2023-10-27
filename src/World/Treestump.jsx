import { useGLTF} from "@react-three/drei";

export default function Treestump(props) {

    const model = useGLTF("./Treestump/treestump.gltf");

    return (<>
        <primitive {...props} object={model.scene} dispose={null}/>
    
    </>

    );
}

useGLTF.preload("./Treestump/treestump.gltf");