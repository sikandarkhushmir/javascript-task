function findMinMax(arr) {
    if (arr.length === 0) return null;
  
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }
  
    return { min, max };
  }
  
  // Test cases
  console.log(findMinMax([5, 3, 8, 1, 6])); // { min: 1, max: 8 }
  console.log(findMinMax([])); // null
  console.log(findMinMax([10])); // { min: 10, max: 10 }