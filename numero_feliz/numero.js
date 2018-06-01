class Numero{

	constructor(numero){
		this.numero = numero;
	}

	isNumeroFeliz(numero){
		if (numero == 0){
			return false;
		}else if (numero == 1){
			return true;
		}else{
			let array = Array.from(numero.toString());
			let arrayDobrado = array.map(e => Math.pow(e, 2))
			let novoNumero = arrayDobrado.reduce((a,b) => {return a+b}, 0)
			this.isNumeroFeliz(novoNumero);
		}

	}
}