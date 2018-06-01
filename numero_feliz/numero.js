class Numero{

	constructor(numero){
		this.numero = numero;
	}

	isNumeroFeliz(numero = this.numero){
		let msg = "";
		if (numero == 2){
			msg = `${this.numero} é um número triste =(`;
		}else if (numero == 1){
			msg = `${this.numero} é um número feliz =D`;
		}else{
			let numeros = Array.from(numero.toString());
			console.log(numeros);
			let arrayDobrado = numeros.map(e => Math.pow(e, 2));
			console.log(arrayDobrado);
			let novoNumero = arrayDobrado.reduce((a,b) => {return a+b;}, 0);
			console.log(novoNumero);
			return this.isNumeroFeliz(novoNumero);
		}
	    return msg;
	}
}

var n = new Numero(7)
n.isNumeroFeliz();