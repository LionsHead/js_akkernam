// BEGIN (write your solution here)
const akkerman = (m, n) => {
  if (m < 0 || n < 0) return undefined;
  if (m === 0) {
    return n + 1;
  } else if (n === 0 && m > 0) {
    return akkerman(m - 1, 1);
  }

  return akkerman(m - 1, akkerman(m, n - 1));
};

export default akkerman;
// END
