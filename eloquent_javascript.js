// Chapter 1
let total = 0;
count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
//console.log(total);

// Chapter 3 Closures
const makeCounter = () => {
  let count = 0;
  return function () {
    count++;
    return count;
  };
};

counter1 = makeCounter();
counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
