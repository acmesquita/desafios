class Numero{

	constructor(numero){
		this.numero = numero;
		this.arrayNmeros = []
	}

	isNumeroFeliz(numero = this.numero){
		let msg = "";
		if (this.arrayNmeros.includes(numero)){
			msg = `${this.numero} é um número triste =(`;
		}else if (numero == 1){
			msg = `${this.numero} é um número feliz =D`;
		}else{
			this.arrayNmeros.push(numero);
			let numeros = Array.from(numero.toString());
			// console.log(numeros);
			let arrayDobrado = numeros.map(e => Math.pow(e, 2));
			// console.log(arrayDobrado);
			let novoNumero = arrayDobrado.reduce((a,b) => {return a+b;}, 0);
			// console.log(novoNumero);
			return this.isNumeroFeliz(novoNumero);
		}
	    return msg;
	}
}

// var n = new Numero(7)
// var msg = n.isNumeroFeliz();

// console.log(msg)