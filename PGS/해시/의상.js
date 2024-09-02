const solution = (clothes) => {
  const map = new Map();
  clothes.forEach((element) => {
    const type = element[1];
    if (map.has(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  });
  const ary = [...map.values()];

  let result = 1;
  ary.forEach((v) => (result *= v + 1));
  return result - 1;
};

// console.log(
//   solution([
//     ["yellow_hat", "headgear"],
//     ["blue_sunglasses", "eyewear"],
//     ["green_turban", "headgear"],
//   ])
// ); // 5

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
