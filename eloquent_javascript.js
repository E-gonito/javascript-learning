// Chapter 1
let total = 0;
count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
//console.log(total);

// Chapter 3 Closures
/* 
Closures are nested functions, bindings are private and cannot
be accessed outside the closure. Similar to an object,
they encapsulate methods and values, saves
their own lexical environment (parent scope) in memory. 
 */
const makeCounter = () => {
  let count = 0;
  return function () {
    count++;
    return count;
  };
};

// FizzBuzzBazz with closure
const FIZZBUZZBAZZ_RULES = {
  3: "Fizz",
  5: "Buzz",
  7: "Bazz",
};
const makeFizzBuzzBazz = (rules) => {
  const checkNumber = (n) => {
    let result = "";
    for (const divisor in rules) {
      if (n % divisor === 0) {
        result += rules[divisor];
      }
    }
    return result || n;
  };
  return (printFizzBuzzBazz = (limit) => {
    for (let i = 1; i <= limit; i++) {
      console.log(checkNumber(i));
    }
  });
};

//const fizzBuzzBazz = makeFizzBuzzBazz(FIZZBUZZBAZZ_RULES);
//fizzBuzzBazz(10);

const createCounter = () => {
  let count = 0;
  const increment = () => count++;
  const getValue = () => count;
  return { increment, getValue };
};

//counter = createCounter();
//counter.increment();
//console.log(counter.getValue());
