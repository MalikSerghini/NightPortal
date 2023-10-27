import { useKeyboardControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { addEffect } from "@react-three/fiber"

export default function Interface(){


    const forward = useKeyboardControls((state)=> state.forward)
    const backward = useKeyboardControls((state)=> state.backward)
    const leftward = useKeyboardControls((state)=> state.leftward)
    const rightward = useKeyboardControls((state)=> state.rightward)


    return <div className="interface">

        <div className="raw">
            <div className={`key ${forward ? "active" : ""}`}></div>
        </div>
        
        <div className="raw">
            <div className={`key ${leftward ? "active" : ""}`}></div>
            <div className={`key ${backward ? "active" : ""}`}></div>
            <div className={`key ${rightward ? "active" : ""}`}></div>
        </div>

    </div>
}
