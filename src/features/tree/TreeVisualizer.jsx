import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";

import Node from "../../components/three/Node";
import Edge from "../../components/three/Edge";
import ControlPanel from "../../components/ui/ControlPanel";

import BinaryTree from "./tree.logic";
import { generateTreeLayout } from "./tree.layout";
import {
  getPreorderSteps,
  getInorderSteps,
  getPostorderSteps,
} from "./tree.animation";

function TreeVisualizer() {
  const [values, setValues] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [layout, setLayout] = useState({ nodes: [], edges: [] });

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(800);
  const [traversal, setTraversal] = useState("preorder");

  const [insertValue, setInsertValue] = useState("");
  const intervalRef = useRef(null);

  const buildTree = () => {
    const tree = new BinaryTree();
    values.forEach((v) => tree.insert(v));
    return tree;
  };

  useEffect(() => {
    const tree = buildTree();
    setLayout(generateTreeLayout(tree.root));
  }, [values]);

  useEffect(() => {
    const tree = buildTree();

    let result = [];
    if (traversal === "preorder") result = getPreorderSteps(tree.root);
    else if (traversal === "inorder") result = getInorderSteps(tree.root);
    else result = getPostorderSteps(tree.root);

    setSteps(result);
    setCurrentStep(0);
    setIsPlaying(false);
  }, [traversal, values]);

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(intervalRef.current);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, speed, steps]);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const reset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const addNode = () => {
    if (!insertValue) return;
    setValues((prev) => [...prev, Number(insertValue)]);
    setInsertValue("");
  };

  return (
    <div className="w-screen h-screen bg-black relative">
      <ControlPanel
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        speed={speed}
        setSpeed={setSpeed}
        traversal={traversal}
        setTraversal={setTraversal}
        nextStep={nextStep}
        prevStep={prevStep}
        reset={reset}
        insertValue={insertValue}
        setInsertValue={setInsertValue}
        addNode={addNode}
      />

      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />

          {layout.nodes.map((node, index) => {
            const isActive = steps[currentStep] === node.value;

            return (
              <Node
                key={index}
                position={node.position}
                value={node.value}
                color={isActive ? "red" : "orange"}
              />
            );
          })}

          {layout.edges.map((edge, index) => (
            <Edge key={index} start={edge.from} end={edge.to} />
          ))}

          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default TreeVisualizer;