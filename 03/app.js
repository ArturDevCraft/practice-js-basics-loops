const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x) {
	randomNumber = Math.round(Math.random() * x);
	console.log('Random number: ' + randomNumber);
	iteration++;
}

console.log('Iterations: ' + iteration);
