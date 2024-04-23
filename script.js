function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  // Test cases
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false
  console.log(isPalindrome(" ")); // true
  console.log(isPalindrome("A")); // true