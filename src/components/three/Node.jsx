import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Node({ position, color = "orange", value }) {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) return;

    const targetScale = color === "red" ? 1.4 : 1;
    meshRef.current.scale.lerp(
      { x: targetScale, y: targetScale, z: targetScale },
      0.1
    );
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color={color} />

      <Text
        position={[0, 0, 0.6]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {value}
      </Text>
    </mesh>
  );
}

export default Node;