const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const reverseStr = (str) => str.split('').reverse().join('');

const calculator = (() => {
  const add = (n1, n2) => n1 + n2;

  const subtract = (n1, n2) => n1 - n2;

  const divide = (n1, n2) => n1 / n2;

  const multiply = (n1, n2) => n1 * n2;

  return { add, subtract, divide, multiply };
})();

const caesarCipher = (str, shift) => {
  const shiftChar = (char, shift) => {
    const code = char.charCodeAt();
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    return char;
  };

  return str
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
};

const analyzeArray = (arr) => ({
  average: arr.reduce((acc, curr) => acc + curr) / arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

export { capitalize, reverseStr, calculator, caesarCipher, analyzeArray };
