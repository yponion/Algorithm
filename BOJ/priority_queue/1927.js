class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentNodeIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildNodeIndex(index) {
    return index * 2 + 1;
  }

  getRightChildNodeIndex(index) {
    return index * 2 + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(x) {
    this.heap.push(x);

    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentNodeIndex(index)]
    ) {
      this.swap(index, this.getParentNodeIndex(index));
      index = this.getParentNodeIndex(index);
    }
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;
    while (this.getLeftChildNodeIndex(index) < this.heap.length) {
      let smallerChildNodeIndex = this.getLeftChildNodeIndex(index);
      if (
        this.getRightChildNodeIndex(index) < this.heap.length &&
        this.heap[this.getRightChildNodeIndex(index)] <
          this.heap[smallerChildNodeIndex]
      ) {
        smallerChildNodeIndex = this.getRightChildNodeIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildNodeIndex]) break;
      this.swap(index, smallerChildNodeIndex);
      index = smallerChildNodeIndex;
    }
    return root;
  }
}

input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const minheap = new MinHeap();

const answer = [];

input.forEach((element) => {
  if (element === 0) {
    answer.push(minheap.pop());
  } else {
    minheap.insert(element);
  }
});

console.log(answer.join("\n"));
