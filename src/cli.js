import readlineSync from 'readline-sync';
const whatName = () => {
	const name = readlineSync.question('May I have your name? ');
	return console.log(`Hello, ${name}!`);
};

export { whatName };
