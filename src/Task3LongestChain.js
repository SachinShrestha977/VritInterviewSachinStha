function longestChainOfConsecutive(nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longestChain = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentChain = 1;

      // Continue the sequence
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentChain++;
      }

      longestChain = Math.max(longestChain, currentChain);
    }
  }

  return longestChain;
}

// Test
const nums = [100, 4, 200, 1, 7, 2];
console.log(longestChainOfConsecutive(nums)); // 2 should be output
