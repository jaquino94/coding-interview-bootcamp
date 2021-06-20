// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// 2 Possible ways to solve:
//  1) Reverse the string and then compare the two strings
//  2) Using two pointers - compare each characters
//
//EX: using method 2
//  while leftPointer < rightPointer && leftPointer char == rightPointer char:
//      move leftPointer forward
//      move rightPointer forward
//
//  This means that both pointers have passed through the middle of the string
//  If they passed through the middle of the string - it means each character
//  were equal!
//  if leftPointer > rightPointer:
//      return true
//
//  return false
function palindrome(str) {
    let headPtr = 0;
    let tailPtr = str.length - 1;

    while ((headPtr <= tailPtr) && (str[headPtr] == str[tailPtr])) {
        headPtr++;
        tailPtr--;
    }

    if (headPtr >= tailPtr) {
        return true;
    }

    return false;
}

module.exports = palindrome;
