class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 노드의 인덱스를 반환
  getParentNodeIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 노드의 인덱스를 반환
  getLeftChildNodeIndex(index) {
    return index * 2 + 1;
  }

  // 오른쪽 자식 노드의 인덱스를 반환
  getRightChildNodeIndex(index) {
    return index * 2 + 2;
  }

  // 두개의 인덱스를 받아서 인덱스의 값을 스왑
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // 배열의 끝에 요소를 삽입
  // 부모 노드와 값을 비교하여 부모 노드보다 값이 크면 스왑 (반복)
  insert(x) {
    this.heap.push(x);
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[this.getParentNodeIndex(index)] < this.heap[index]
    ) {
      this.swap(this.getParentNodeIndex(index), index);
      index = this.getParentNodeIndex(index);
    }
  }

  // 루트 노드 반환, 삭제
  // 마지막 노드를 루트 노드로 옮김
  // 루트노드와 자식 노드를 비교하여 자식 노드 중 더 큰 노드와 스왑 (반복)
  remove() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;
    while (this.getLeftChildNodeIndex(index) < this.heap.length) {
      let largerChildNodeIndex = this.getLeftChildNodeIndex(index);
      if (
        this.getRightChildNodeIndex(index) < this.heap.length &&
        this.heap[this.getRightChildNodeIndex(index)] >
          this.heap[largerChildNodeIndex]
      ) {
        largerChildNodeIndex = this.getRightChildNodeIndex(index);
      }

      if (this.heap[index] > this.heap[largerChildNodeIndex]) break;
      this.swap(index, largerChildNodeIndex);
      index = largerChildNodeIndex;
    }

    return root;
  }

  print() {
    console.log(this.heap);
  }
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const maxHeap = new MaxHeap();

const answer = [];

input.forEach((element) => {
  if (element === 0) {
    answer.push(maxHeap.remove());
  } else {
    maxHeap.insert(element);
  }
});

console.log(answer.join("\n"));
