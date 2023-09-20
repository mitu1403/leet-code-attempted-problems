/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/
var strStr = function(haystack, needle) {
  if(haystack.includes(needle)){    
    for(let i=0 ; i<haystack.length ; i++){
      let count = 0
      let indexArr = []
      let newI = i
      for(let j=0 ; j<needle.length ; j++){
        if(haystack[newI] === needle[j]){
          indexArr.push(newI)
          newI++
          count++
        }
        else{
          break
        }
      }
      if(count === needle.length){
        return indexArr[0]
      }
    }
  }
  else{
    return -1
  }    
};