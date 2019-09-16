/**
 * @desc this is a program to check if a String is Paindrome or not.
 */


/**
 * @param {string} str this is a string that is checked
 */
function checkIfPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  
  console.log(checkIfPalindrome('dog'));
  
  
  /**
   * @param {string} letters this is a string that is checked
   */
  function isPalindrome(letters) {
  
    var characters = letters.split(''),
      firstLetter = characters.shift(),
      lastLetter = characters.pop();
  
    if (firstLetter !== lastLetter) {
      return false;
    }
  
    if (characters.length < 2) {
      return true;
    }
  
    return isPalindrome(characters.join(''));
  
  }
  
  console.log(isPalindrome('Human'));
  console.log(isPalindrome('HummuH'));
  
  /**
   * @param {String} str this is a string that is checked
   */
  function isPal(str) {
    const num = str.length;
    const mid = Math.floor(str.length / 2);
    var string1 = str.slice(0, mid);
    var string2 = str.slice(mid);
    var string3 = string2.split('').reverse().join('');
    if (string1 !== string3)
      console.log("It's not Palindrome")
    else console.log("It's a Palindrome"); 
  }
  
  isPal('HeyyeH');
  
  
  
  
  
  