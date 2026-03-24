const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Asyn task is completed");
    reject();
  }, 1000);
});

promiseOne
  .then(() => {
    console.log("Promised Consumed");
  })
  .catch(() => console.error("Fuck you"));

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Asyn task is completed");
    resolve({ username: "Lord Vijay" });
  }, 1000);
});

promiseTwo
  .then((res) => {
    console.log("Username is ", res.username);
  })
  .catch((error) => {
    console.log("ERROR IS ", error);
  })
  .finally(() => console.log("The promise is resolved or rejected "));

const promiseThree = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Asyn task is completed");
    resolve({ username: "Lord Vijay" });
  }, 1000);
});

const consumePromiseFive = async () => {
  try {
    const response = await promiseThree();
  } catch (err) {
  } finally {
  }
};

promiseThree
  .then((res) => {
    console.log("Username is ", res.username);
  })
  .catch((error) => {
    console.log("ERROR IS ", error);
  })
  .finally(() => console.log("The promise is resolved or rejected "));

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response?.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", error);
  } finally {
  }
}

getAllUsers();
