window.promises = [];
// Add your promises to the array 'promises'
for (let i = 0; i < 5; i++) {
    promises.push(new Promise((resolve) => {
        const randomTime = getRandomTime(1000, 5000);
        setTimeout(() => {
            resolve(`Promise ${i + 1} resolved after ${randomTime / 1000} seconds`);
        }, randomTime);
    }));
}

// Do not change the code above this
// add your promises to the array `promises`
