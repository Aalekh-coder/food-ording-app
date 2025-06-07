function countOccurrences(arr) {
  const counts = {};
  for (const element of arr) {
    counts[element] = (counts[element] || 0) + 1;
  }
  return counts;
}

// Example usage:
const myArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const occurrenceCounts = countOccurrences(myArray);
console.log(occurrenceCounts);