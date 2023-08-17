const promises = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, Math.random() * 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, Math.random() * 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, Math.random() * 3000);
  }),
];

const allPromises = Promise.all(promises);

allPromises.then((results) => {
  // Remove the loading text
  document.querySelector('#loading').innerHTML = '';

  // Populate the table with the results
  const table = document.querySelector('#results');
  for (let i = 0; i < results.length; i++) {
    const row = table.insertRow(i + 1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = `Promise ${i + 1}`;
    cell2.innerHTML = results[i];
  }

  // Calculate and display the total time taken
  const totalTime = results.reduce((acc, val) => acc + val, 0);
  document.querySelector('#total-time').innerHTML = totalTime;
});
