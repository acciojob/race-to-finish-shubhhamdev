const promises = [];

for (let i = 0; i < 5; i++) {
  promises.push(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, Math.random() * 5000);
  }));
}

Promise.any(promises).then((result) => {
  document.querySelector('#output').innerHTML = result;
});
