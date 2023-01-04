module.exports = function reverse(reverseIntN) {
  return Number(String(Math.abs(reverseIntN)).split("").reverse().join(""));
};
