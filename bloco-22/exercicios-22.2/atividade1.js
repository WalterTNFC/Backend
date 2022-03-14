function atividade1(a, b, c) {
	// para a promise poder ser rejeitada é necessária a criação dela
	// é preciso usar o 'new Promise e passar uma função com dois parameto'
	return new Promise((resolve, reject) => {
		if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
			reject('Informe apenas tipos numericos')

		const some = (a + b) * c;

		if (some < 50)
			reject('Valor muito baixo')

		resolve(result);
	})
};

atividade1(10, 10, 'a')
	.then(resolve => console.log(resolve))
	.catch(error => console.log(error));
