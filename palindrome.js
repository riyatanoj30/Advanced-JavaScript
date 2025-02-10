function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const arr = str.split('');
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false; // Not a palindrome
      }
    } 
    return true; // It's a palindrome
  }
  console.log(isPalindrome("Racecar")); // true
  console.log(isPalindrome("hello"));   // false
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  