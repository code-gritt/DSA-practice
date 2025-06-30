var findMin = function (nums) {
  let s = 0,
    e = nums.length - 1;

  while (s <= e) {
    let m = Math.floor((s + e) / 2);

    if (s === e) return nums[s];

    if (nums[m] >= nums[s] && nums[s] > nums[e]) {
      s = m + 1;
    } else {
      e = m;
    }
  }

  return -1;
};

const result = findMin([1, 2, 3, 4]);
console.log(result);
