// print the table of 5

const fs = require('fs');

const createdFile = async(base) => {
	try{
		let output = '';
		const message = `============\n TABLE OF ${base} \n============\n`;
		const fileName = `table-${base}.txt`

		for(let i = 1; i <= 10; i++){
			output += `${base} x ${i} = ${base * i}\n`;
		}

		fs.writeFileSync(fileName, `${message}\n${output}`);

		console.log(message);
		console.log(output);
		return fileName;

	} catch(err){
		throw err;
	}
}

module.exports = {
	createdFile
}
