import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"

export default function Rabbit(props) {

    const model = useGLTF("./Rabbit/rabbit.gltf")
    const animations = useAnimations(model.animations, model.scene)

    model.scene.traverse(function (node) {
        if (node.isMesh) { node.castShadow = true; }
    });

    useEffect(() => {

        const actionWalk = animations.actions.walk
        const actionScratch = animations.actions.scratch

        const action = actionScratch
        action.reset().fadeIn(0.5).play()

        return () => {
            action.fadeOut(0.5)
        }

    })


    return (
        <primitive
            {...props}
            object={model.scene}

        />
    )
}

useGLTF.preload("./Rabbit/rabbit.gltf")