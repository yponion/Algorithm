const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }
  push(x) {
    this.queue[this.tail++] = x;
  }
  empty() {
    return this.head === this.tail ? 1 : 0;
  }
  pop() {
    return this.empty() ? -1 : this.queue[this.head++];
  }
  size() {
    return this.tail - this.head;
  }
  front() {
    return this.empty() ? -1 : this.queue[this.head];
  }
  back() {
    return this.empty() ? -1 : this.queue[this.tail - 1];
  }
}

const queue = new Queue();
const cmds = input.slice(1);
const res = [];

cmds.forEach((cmd) => {
  if (cmd.startsWith("push")) {
    queue.push(cmd.split(" ")[1]);
  } else if (cmd.startsWith("pop")) {
    res.push(queue.pop());
  } else if (cmd.startsWith("size")) {
    res.push(queue.size());
  } else if (cmd.startsWith("empty")) {
    res.push(queue.empty());
  } else if (cmd.startsWith("front")) {
    res.push(queue.front());
  } else if (cmd.startsWith("back")) {
    res.push(queue.back());
  }
});

console.log(res.join("\n"));
