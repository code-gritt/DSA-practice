var twoSum = function (nums, target) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let neededNumber = target - nums[i];

    if (hashMap.has(neededNumber)) {
      return [i, hashMap.get(neededNumber)];
    }
    hashMap.set(nums[i], i);
  }
};

const result = twoSum([2, 7, 11, 15], 9);
console.log(result);
