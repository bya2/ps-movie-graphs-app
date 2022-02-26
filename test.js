const pages__num = 8;

const pages__arr = Array(pages__num)
  .fill(0)
  .reduce((arr, num, i) => [...arr, i + 1], []);

console.log(pages__arr);

const promise_a = new Promise((resolve, reject) => {
  resolve(() => 1);
});

const promise_b = async () => {
  return 1;
};

(async () => {
  const a = await Promise.all(
    pages__arr.map((_page) => {
      return `${promise_b}`;
    })
  );
  console.log(a);
})();
