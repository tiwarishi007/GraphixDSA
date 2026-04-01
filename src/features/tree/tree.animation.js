export function getPreorderSteps(root) {
  const steps = [];

  function dfs(node) {
    if (!node) return;
    steps.push(node.value);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return steps;
}

export function getInorderSteps(root) {
  const steps = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    steps.push(node.value);
    dfs(node.right);
  }

  dfs(root);
  return steps;
}

export function getPostorderSteps(root) {
  const steps = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    steps.push(node.value);
  }

  dfs(root);
  return steps;
}