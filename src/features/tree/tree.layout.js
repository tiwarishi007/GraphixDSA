export function generateTreeLayout(root) {
  const nodes = [];
  const edges = [];

  function traverse(node, x = 0, y = 0, level = 0, parent = null) {
    if (!node) return;

    const currentPos = [x, y, 0];

    nodes.push({
      value: node.value,
      position: currentPos,
    });

    if (parent) {
      edges.push({
        from: parent,
        to: currentPos,
      });
    }

    const offset = 2 / (level + 1);

    traverse(node.left, x - offset, y - 2, level + 1, currentPos);
    traverse(node.right, x + offset, y - 2, level + 1, currentPos);
  }

  traverse(root);

  return { nodes, edges };
}