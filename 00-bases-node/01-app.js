console.clear();

const {createdFile} = require('./helpers/multiply');
const arg = process.argv;
const base = arg[2];

createdFile(base)
	.then(nameFile => console.log(nameFile, 'created'))
	.catch(err => console.log(err));
