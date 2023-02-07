export class Esercizio {
	nome: string
	gif: string
	descrizione: string
	muscoli: string
	isFavourite: boolean

	constructor(nome: string, gif: string, descrizione: string, muscoli: string, isFavourite: boolean) {
		this.nome = nome
		this.gif = gif
		this.descrizione = descrizione
		this.muscoli = muscoli
		this.isFavourite = isFavourite
	}
}

export class SchedaEsercizio {
	esercizio: string
	_esercizio: Esercizio | undefined
	tempo_recupero: string
	ripetizioni: string | Array<number>
	serie: string

	constructor(esercizio: string, tempo_recupero: string, ripetizioni: string, serie: string) {
		this.esercizio = esercizio
		this.tempo_recupero = tempo_recupero
		this.ripetizioni = ripetizioni
		this.serie = serie
	}
}

export class SchedaEsercizioTempo {
	esercizio: string
	_esercizio: Esercizio | undefined
	tempo: string

	constructor(esercizio: string, tempo: string) {
		this.esercizio = esercizio
		this.tempo = tempo
	}
}

export class Scheda {
	id: string
	nome: string
	gruppo_muscolare: string
	pic: string
	durata: string
	intensita: string
	sala: string
	esercizi: Array<SchedaEsercizio | SchedaEsercizioTempo>
	isFavourite: boolean

	constructor(isFavourite: boolean, id: string, nome: string, gruppo_muscolare: string, pic: string, esercizi: Array<SchedaEsercizio | SchedaEsercizioTempo>, durata: string, intensita: string, sala: string) {
		this.isFavourite = isFavourite
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
	"pic": "/assets/workoutcover/forza1.png",
	"durata": "30",
	"intensita": "1",
	"sala": "Parte superiore, Parte inferiore, Cardio",
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
}, {
	"id": "2",
	"nome": "Upper body destroyer",
	"gruppo_muscolare": "petto, spalle, braccia",
	"pic": "/assets/workoutcover/upperbody.png",
	"durata": "90",
	"intensita": "2",
	"sala": "Petto, spalle, braccia",
	"esercizi": [{
		"esercizio": "Paused barbell benchpress",
		"serie": "8",
		"ripetizioni": "3",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Bench dip",
		"serie": "5",
		"ripetizioni": "15",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Barbell pullover",
		"serie": "5",
		"ripetizioni": "10",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Barbell military press",
		"serie": "5",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Lateral raises",
		"serie": "3",
		"ripetizioni": ["8", "8", "8"],
		"tempo di recupero": "1",
	}, {
		"esercizio": "EZ bar standing french press",
		"serie": "3",
		"ripetizioni": "10",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Skullcrusher",
		"serie": "4",
		"ripetizioni": "8",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Strict curl",
		"serie": "5",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Barbell spider curl",
		"serie": "4",
		"ripetizioni": "12",
		"tempo di recupero": "1",
	}]
}, {
	"id": "3",
	"nome": "Heavy leg day",
	"gruppo_muscolare": "quadricipiti, femorali, polpacci",
	"pic": "/assets/workoutcover/upperbody.png",
	"durata": "90",
	"intensita": "2",
	"sala": "Quadricipiti, femorali, polpacci",
	"esercizi": [{
		"esercizio": "Barbell squat",
		"serie": "5",
		"ripetizioni": "10",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Leg press",
		"serie": "4",
		"ripetizioni": "12",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Dumbbell walking lunges",
		"serie": "5",
		"ripetizioni": "12",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Straight leg deadlift",
		"serie": "6",
		"ripetizioni": "8",
		"tempo di recupero": "2",
	}, {
		"esercizio": "Romanian deadlift",
		"serie": "4",
		"ripetizioni": "8",
		"tempo di recupero": "1",
	}, {
		"esercizio": "Standing Leg curl",
		"serie": "4",
		"ripetizioni": ["8", "8", "8"],
		"tempo di recupero": "1",
	}, {
		"esercizio": "Barbell standing calf raise",
		"serie": "6",
		"ripetizioni": "24",
		"tempo di recupero": "1",
	}]
}] as Scheda[]