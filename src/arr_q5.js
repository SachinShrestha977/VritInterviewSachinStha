function counts(nums) {
  const result = new Array(nums.length).fill(0);
  const indexedNums = nums.map((num, index) => ({ num, index }));

  function mergeSort(start, end) {
    if (end - start <= 1) return indexedNums.slice(start, end);

    const mid = Math.floor((start + end) / 2);
    const left = mergeSort(start, mid);
    const right = mergeSort(mid, end);

    let i = 0,
      j = 0;
    const merged = [];

    while (i < left.length && j < right.length) {
      if (left[i].num <= right[j].num) {
        merged.push(left[i]);
        result[left[i].index] += j;
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }

    while (i < left.length) {
      merged.push(left[i]);
      result[left[i].index] += j;
      i++;
    }

    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }

    for (let k = start; k < end; k++) {
      indexedNums[k] = merged[k - start];
    }

    return merged;
  }

  mergeSort(0, nums.length);
  return result;
}

const nums = [5, 4, 1, 3]; // 3 2 0 0
const arr = [9, 8, 7, 6]; // 3 2 1 0
console.log(counts(nums));
console.log(counts(arr));
