import * as THREE from "three";

function Edge({ start, end }) {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end),
  ];

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="white" />
    </line>
  );
}

export default Edge;