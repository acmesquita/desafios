class AmigoSecreto{

	constructor(participantes){
		this.participantes = participantes;
	}

	sortear() {
		let lista = this.shuffle(this.participantes);
		for (var i = 0; i < lista.length; ++i) {
			const amigo = i == lista.length-1 ? lista[0] : lista[i+1];
			lista[i].amigo = amigo;
		}
		this.imprimirParticipantes(lista);
		return lista;
	}

	imprimirParticipantes(lista = []){
		lista.forEach(p => console.log(p.nome + " tirou " + p.amigo.nome));
	}

	shuffle(lista = []) {	
		for (var i = lista.length - 1; i >= 0; i--) {
			let j = Math.floor(Math.random()*(i+1));
			[lista[i], lista[j]] = [lista[j], lista[i]]
		}
		return lista;
	}
}