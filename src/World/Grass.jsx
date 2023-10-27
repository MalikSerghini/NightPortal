import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, Vector2 } from "three";
import React from "react";

import vertexShader from '../shader/grass/vertexShader.glsl';
import fragmentShader from '../shader/grass/fragmentShader.glsl';

export default function Grass(){

    const mesh = useRef();

    const uniforms = useMemo(
      () => ({
        uTime: { value: 0 },
        uDepthColor: { value: new Color('#5ca364') },
        uSurfaceColor: { value: new Color('#cde7bc') },
        
        uBigWavesElevation: { value: 0.268 },
        uBigWavesFrequency: { value: new Vector2(0.279, 0.202) },
        uBigWavesSpeed: { value: 0.297 },

        uSmallWavesElevation: { value: 1 },
        uSmallWavesFrequency: { value: 1000 },
        uSmallWavesSpeed: { value: 0.235 },
        uSmallIterations: { value: 5 },
        uColorOffset: { value: 0.6 },
        uColorMultiplier: { value: 1.486}

      }), []
    );

    useFrame((state) => {
      const { clock } = state;
      mesh.current.material.uniforms.uTime.value = clock.getElapsedTime();
    });

    return <>

    <mesh ref={mesh} position={[0, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[36, 36, 1024, 1024]}/>
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>

  </>;
}