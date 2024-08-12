class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.nodes = {};
  }

  addNode(data, left, right) {
    if (!this.nodes[data]) {
      this.nodes[data] = new Node(data);
    }
    if (!this.root) {
      this.root = this.nodes[data];
    }
    if (left !== ".") {
      this.nodes[left] = new Node(left);
      this.nodes[data].left = this.nodes[left];
    }
    if (right !== ".") {
      this.nodes[right] = new Node(right);
      this.nodes[data].right = this.nodes[right];
    }
  }

  preOrder(node, result = []) {
    if (!node) return;
    result.push(node.data);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }

  inOrder(node, result = []) {
    if (!node) return;
    this.inOrder(node.left, result);
    result.push(node.data);
    this.inOrder(node.right, result);
    return result;
  }

  postOrder(node, result = []) {
    if (!node) return;
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.data);
    return result;
  }
}

const tree = new BinaryTree();

input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());

for (let i = 0; i < N; i++) {
  const [data, left, right] = input[i].split(" ");
  tree.addNode(data, left, right);
}

console.log(tree.preOrder(tree.root).join(""));
console.log(tree.inOrder(tree.root).join(""));
console.log(tree.postOrder(tree.root).join(""));
