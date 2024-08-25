class AbsHeap {
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
      (Math.abs(this.heap[this.getParentNodeIndex(index)]) >
        Math.abs(this.heap[index]) ||
        (Math.abs(this.heap[this.getParentNodeIndex(index)]) ===
          Math.abs(this.heap[index]) &&
          this.heap[this.getParentNodeIndex(index)] > this.heap[index]))
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
      let smallerIndex = this.getLeftChildNodeIndex(index);

      if (
        this.getRightChildNodeIndex(index) < this.heap.length &&
        (Math.abs(this.heap[this.getRightChildNodeIndex(index)]) <
          Math.abs(this.heap[smallerIndex]) ||
          (Math.abs(this.heap[this.getRightChildNodeIndex(index)]) ===
            Math.abs(this.heap[smallerIndex]) &&
            this.heap[this.getRightChildNodeIndex(index)] <
              this.heap[smallerIndex]))
      ) {
        smallerIndex = this.getRightChildNodeIndex(index);
      }

      if (
        Math.abs(this.heap[index]) < Math.abs(this.heap[smallerIndex]) ||
        (Math.abs(this.heap[index]) === Math.abs(this.heap[smallerIndex]) &&
          this.heap[index] <= this.heap[smallerIndex])
      ) {
        break;
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }

    return root;
  }
}

const absHeap = new AbsHeap();
const answer = [];

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

input.forEach((value, index) => {
  if (value === 0) answer.push(absHeap.pop());
  else absHeap.insert(value);
});

console.log(answer.join("\n"));
