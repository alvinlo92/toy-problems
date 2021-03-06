/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
  if (!s.length) return 0;
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
      if (s[l] !== s[r]) return 2;
      l++;
      r--;
  }
  return 1;
};