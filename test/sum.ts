const sum = (a: number, b: number) => {
  return a + b;
};

function sumOf(numbers: number[]) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

export default {sum, sumOf};
