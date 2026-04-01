function ControlPanel({
  isPlaying,
  setIsPlaying,
  speed,
  setSpeed,
  traversal,
  setTraversal,
  nextStep,
  prevStep,
  reset,
  insertValue,
  setInsertValue,
  addNode,
}) {
  return (
    <div className="absolute top-5 left-5 z-50 bg-gray-900 text-white p-4 rounded-xl space-y-3 shadow-lg w-64">

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="px-4 py-2 bg-blue-500 rounded w-full"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      <div className="flex gap-2">
        <button onClick={prevStep} className="bg-gray-700 px-2 py-1 rounded w-full">
          ⬅
        </button>
        <button onClick={nextStep} className="bg-gray-700 px-2 py-1 rounded w-full">
          ➡
        </button>
      </div>

      <button
        onClick={reset}
        className="bg-red-500 px-3 py-2 rounded w-full"
      >
        Reset
      </button>

      <div>
        <label>Speed:</label>
        <input
          type="range"
          min="200"
          max="1500"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Traversal:</label>
        <select
          value={traversal}
          onChange={(e) => setTraversal(e.target.value)}
          className="text-black w-full"
        >
          <option value="preorder">Preorder</option>
          <option value="inorder">Inorder</option>
          <option value="postorder">Postorder</option>
        </select>
      </div>

      <div className="space-y-2">
        <input
          type="number"
          value={insertValue}
          onChange={(e) => setInsertValue(e.target.value)}
          placeholder="Enter value"
          className="w-full px-2 py-1 text-black"
        />
        <button
          onClick={addNode}
          className="bg-green-500 w-full py-1 rounded"
        >
          Add Node
        </button>
      </div>
    </div>
  );
}

export default ControlPanel;