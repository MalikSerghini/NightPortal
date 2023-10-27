import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"

export default function Fox(props) {

    const model = useGLTF("./Fox/glTF/Fox.gltf")
    const animations = useAnimations(model.animations, model.scene)

    model.scene.traverse(function (node) {
        if (node.isMesh) { node.castShadow = true; }
    });

    useEffect(() => {

        const actionSurvey = animations.actions.Survey
        const actionWalk = animations.actions.Walk
        const actionRun = animations.actions.Run

        let characterState = actionSurvey

        switch (props.state) {
            case "idle":
                characterState = actionSurvey
                break
            case "walking":
                characterState = actionWalk
                break
        }

        const action = characterState
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

useGLTF.preload("./Fox/glTF/Fox.gltf")