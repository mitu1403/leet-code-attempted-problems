/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function (strs) {
  let firstStr = strs[0]
  let output = []
  for (let i = 0; i < firstStr.length; i++) {
    let count = 0
    for (let j = 1; j < strs.length; j++) {
      if (firstStr[i] === strs[j][i]) {
        count++
      }
    }
    if (count === strs.length - 1) {
      output.push(firstStr[i])
    }
    else {
      break
    }
  }
  return output.join("")
};