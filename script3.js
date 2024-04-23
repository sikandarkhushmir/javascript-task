function findMissingNumber(arr) {
    let expectedSum = (arr[0] * (arr[0] - 1)) / 2;
  
    for (let i = 1; i < arr.length; i++) {
      expectedSum += arr[i];
    }
  
    expectedSum += arr.length;
  
    for (let i = 0; i < arr.length; i++) {
      expectedSum -= arr[i];
  }
  
    return expectedSum;
  }
  
  // Test cases
  console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // 13
  console.log(findMissingNumber([1, 2, 3, 4, 5])); // null
  console.log(findMissingNumber([10, 11, 12])); // 6