// (function () {
//   console.log("IIFE 1");
// })();
// (() => {
//   console.log("IIFE 2");
// })();

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
