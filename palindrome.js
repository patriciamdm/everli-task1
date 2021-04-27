
const isPalindrome = str => {
  if (!str) return false
  
  const string = str.toLowerCase()
  const invertedStr = string.split('').reverse().join('')
  
  if (string === invertedStr) return true
  else return false
}
