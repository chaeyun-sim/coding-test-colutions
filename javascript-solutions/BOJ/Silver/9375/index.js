/** @format */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let arr = input.slice(1);

Array.from({ length: n }).forEach(() => {
  const numberOfClothes = Number(arr[0]);
  const clothes = arr.slice(1, numberOfClothes + 1);
  const clothesMap = new Map();

  for (let i = 0; i < numberOfClothes; i++) {
    const [name, category] = clothes[i].split(' ');

    clothesMap.set(category, (clothesMap.get(category) || 0) + 1);
  }

  let totalCombinations = 1;
  clothesMap.forEach(count => {
    totalCombinations *= count + 1;
  });

  console.log(totalCombinations - 1);

  arr = arr.slice(numberOfClothes + 1);
});
