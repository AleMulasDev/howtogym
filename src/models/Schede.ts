export class Esercizio{
	nome: string
	gif: string
	descrizione: string
	muscoli: string

	constructor(nome: string, gif: string, descrizione: string, muscoli: string){
		this.nome = nome
		this.gif = gif
		this.descrizione = descrizione
		this.muscoli = muscoli
	}
}

export class SchedaEsercizio {
	esercizio: string
	_esercizio: Esercizio | undefined
	tempo_recupero: string
	ripetizioni: string
	serie: string

	constructor(esercizio: string, tempo_recupero: string, ripetizioni: string, serie: string){
		this.esercizio = esercizio
		this.tempo_recupero = tempo_recupero
		this.ripetizioni = ripetizioni
		this.serie = serie
	}
}

export class SchedaEsercizioTempo{
	esercizio: string
	_esercizio: Esercizio | undefined
	tempo: string

	constructor(esercizio: string, tempo: string){
		this.esercizio = esercizio
		this.tempo = tempo
	}
}

export class Scheda{
	id: string
	nome: string
	gruppo_muscolare: string
	pic: string
	durata: string
	intensita: string
	sala: string
	esercizi: Array<SchedaEsercizio | SchedaEsercizioTempo>

	constructor(id: string, nome: string, gruppo_muscolare: string, pic: string, esercizi: Array<SchedaEsercizio | SchedaEsercizioTempo>, durata: string, intensita: string, sala: string){
		this.id = id
		this.nome = nome
		this.gruppo_muscolare = gruppo_muscolare
		this.pic = pic
		this.esercizi = esercizi
		this.durata = durata
		this.intensita = intensita
		this.sala = sala
	}
}

export const schede = [{
	"id": "1",
	"nome": "Full body workout",
	"gruppo_muscolare": "tutto",
	"pic": "/assets/GIFs/jumping-jack-male.jpg",
	"esercizi": [{
		"esercizio": "Jumping jack",
		"tempo": "10",
	}, {
		"esercizio": "Paused barbell benchpress",
		"serie": "5",
		"ripetizioni": "5",
		"tempo_recupero": "2",
	}, {
		"esercizio": "EZ bar standing french press",
		"serie": "3",
		"ripetizioni": "12",
		"tempo_recupero": "1",
	}, {
		"esercizio": "Cable one arm lat pulldown",
		"serie": "4",
		"ripetizioni": "10",
		"tempo_recupero": "1",
	}, {
		"esercizio": "Barbell spider curl",
		"serie": "3",
		"ripetizioni": "12",
		"tempo_recupero": "1",
	}, {
		"esercizio": "Barbell squat",
		"serie": "5",
		"ripetizioni": "5",
		"tempo_recupero": "2",
	}, {
		"esercizio": "Standing leg curl",
		"serie": "4",
		"ripetizioni": "12",
		"tempo_recupero": "1",
	}, {
		"esercizio": "Barbell standing calf raise",
		"serie": "5",
		"ripetizioni": "20",
		"tempo_recupero": "1",
	}],
	"durata": "30", // in minuti, sarà il frontend a convertire 
	"intensita": "1", // da 1 a 3
	"sala": "Parte superiore, Parte inferiore, Cardio"
}] as Scheda[]