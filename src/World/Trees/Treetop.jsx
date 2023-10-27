import { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

import fragmentShader from "../../shader/tree/fragmentShader.glsl";
import vertexShader from "../../shader/tree/vertexShader.glsl";

export const Treetop = forwardRef((props, ref) => {
  
  const { nodes } = useGLTF("/Trees/treetop.gltf");

  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: props.colors,
      },
      brightnessThresholds: {
        value: [0.6, 0.35, 0.001],
      },
      lightPosition: { value: new Vector3(15, 15, 15) },
    }),
    [props.colors]
  );

  return (
    <group {...props} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.33, -0.05, -0.68]}
      >

      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />

      </mesh>
    </group>
  );
});

useGLTF.preload("/Trees/treetop.gltf");