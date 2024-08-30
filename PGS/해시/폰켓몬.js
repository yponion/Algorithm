function solution(nums) {
  const set = new Set(nums);

  const max = nums.length / 2;
  const cnt = set.size;

  return cnt < max ? cnt : max;
}
