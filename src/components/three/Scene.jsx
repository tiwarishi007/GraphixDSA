import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Node from "./Node";
import Edge from "./Edge";

function Scene() {
  const nodes = [
    { id: 1, position: [0, 1, 0] },
    { id: 2, position: [-1, -1, 0] },
    { id: 3, position: [1, -1, 0] },
  ];

  const edges = [
    { from: nodes[0], to: nodes[1] },
    { from: nodes[0], to: nodes[2] },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Nodes */}
      {nodes.map((node) => (
        <Node key={node.id} position={node.position} />
      ))}

      {/* Edges */}
      {edges.map((edge, index) => (
        <Edge
          key={index}
          start={edge.from.position}
          end={edge.to.position}
        />
      ))}

      <OrbitControls />
    </Canvas>
  );
}

export default Scene;