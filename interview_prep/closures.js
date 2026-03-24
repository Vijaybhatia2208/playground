function outer() {
  let name = "Vijay";
  let message = `Name is ${name}`;

  function inner() {
    console.log(message);
  }

  function changeName() {
    name = "test";
  }

  return { changeName, inner };
}

const fn = outer();

// fn.changeName();
// fn.inner();
// array destructuring vs object destructring
// array deestructring order matter and object name matter

function useState(input = undefined) {
  let value = input;
  let message = `Value is ${value}`;

  function print() {
    console.log(message, value); // here message value will be same since function declaration it is stale closure
  }

  function setValue(input) {
    value = input;
  }

  return [value, setValue, print];
}

const [increment, setIncrement, printCount] = useState(1);

setIncrement(increment + 10);
printCount();
