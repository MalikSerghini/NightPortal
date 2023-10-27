import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { AdditiveBlending } from "three";

import vertexShader from '../shader/fireflies/vertexShader.glsl';
import fragmentShader from '../shader/fireflies/fragmentShader.glsl';

export default function Fireflies(props){
  const { count, shape } = props;
  const radius = 2;
  const firefliesCount = 300;

  const points = useRef();

  const uniforms = useMemo(() => ({

    uTime: {
      value: 0.0
    },
    uRadius: {
      value: radius
    },
    uPixelRatio: { 
      value: Math.min(window.devicePixelRatio, 2)
    },
    uSize: { 
      value: 400
    }

  }), [])

  const positionArray = new Float32Array(firefliesCount * 3);
  const scaleArray = new Float32Array(firefliesCount);

  for (let i = 0; i < firefliesCount; i++) {
    positionArray[i * 3 + 0] = (Math.random() - 0.5) * 35;
    positionArray[i * 3 + 1] = Math.random() * 10;
    positionArray[i * 3 + 2] = (Math.random() - 0.5) * 35;

    scaleArray[i] = Math.random();
  }

  const firefliesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    geometry.setAttribute('aScale', new THREE.BufferAttribute(scaleArray, 1));
    return geometry;
  }, [positionArray, scaleArray]);

  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });


  return (
    <points ref={points}>

      <bufferGeometry attach="geometry" {...firefliesGeometry} />

      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        transparent= {true}
        blending= {AdditiveBlending}
        depthWrite= {false}
      />

    </points>
  );
};

