import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Esercizio } from '@/models/Schede'

export const useEserciziStore = defineStore('esercizi', {
	state: () => ({
		_esercizi: useStorage('esercizi',
			[{
				"nome": "Cable one arm lat pulldown",
				"gif": "5895.gif",
				"descrizione": "Da seduti, si tira verso di sé una maniglia sospesa in presa supina fino a raggiungere l'altezza del mento, quindi la si rilascia verso l'alto con controllo per una ripetizione. Questo esercizio può essere eseguito come parte di un allenamento di forza per la parte superiore del corpo.",
				"muscoli": "dorsali",
			}, {
				"nome": "Barbell standing calf raise",
				"gif": "barbell-standing-leg-calf-raise.jpg",
				"descrizione": "Posizionare il bilanciere al livello del trapezio, e posizionare la punta del piede sopra uno step aerobico, scendere sino a sentire il completo tiramento del muscolo e dopodichè spingere su usando la forza del piede",
				"muscoli": "polpacci",
			}, {
				"nome": "Jumping jack",
				"gif": "jumping-jack-male.jpg",
				"descrizione": "Partire con le braccia e gambe chiuse, attaccate al corpo, effettuare un salto e divaricare sia gambe che braccia, sempre da questa posizione effettuare un altro salto e tornare nella posizione originale.",
				"muscoli": "cardio",
			}, {
				"nome": "Paused barbell benchpress",
				"gif": "21889.gif",
				"descrizione": "Consiste nello sdraiarsi su una panca e premere il peso verso l'alto utilizzando un bilanciere. Durante la distensione su panca, si abbassa il peso all'altezza del petto, si aspetta un secondo e poi si preme verso l'alto estendendo le braccia.",
				"muscoli": "petto",
			}, {
				"nome": "Barbell standing military press",
				"gif": "barbell-standing-military-press.jpg",
				"descrizione": "Mettersi in piedi e posizionare i piedi alla larghezza delle spalle, i palmi delle mani possono essere rivolti in avanti o verso il corpo. Una volta assunta la posizione corretta, iniziare a premere i manubri sopra la testa fino a estendere completamente le braccia.",
				"muscoli": "spalle",
			}, {
				"nome": "EZ bar standing french press",
				"gif": "7553.gif",
				"descrizione": "Consiste nel sedersi tenendo una barra EZ dietro la testa, con i gomiti rivolti verso l'alto, e poi estendere le braccia verso l'alto, in corrispondenza dei gomiti.",
				"muscoli": "tricipiti",
			}, {
				"nome": "Barbell spider curl",
				"gif": "21605.gif",
				"descrizione": "Appoggiare il busto a una panca inclinata con un angolo di 45 gradi, prendere il bilanciere con presa prona, bloccare i gomiti e portare il bilanciere verso se stessi.",
				"muscoli": "bicipiti",
			}, {
				"nome": "Barbell squat",
				"gif": "4774.gif",
				"descrizione": "Eseguire gli squat con bilanciere stando in piedi con i piedi alla larghezza delle spalle. Tenere il petto in alto e la schiena dritta mentre piegate le anche e le ginocchia per abbassare il corpo attraverso una gamma completa di movimenti fino a raggiungere la posizione di squat per poi spingere con le gambe e tornare nella posizione iniziale.",
				"muscoli": "quadricipiti",
			}, {
				"nome": "Standing leg curl",
				"gif": "21613.gif",
				"descrizione": "Mettersi in una posizione d'incastro in modo tale da usare il ginocchio come perno, usare la parte posteriore della caviglia per eseguire l'esercizio e lavorare il femorale",
				"muscoli": "femorale",
			}] as Array<Esercizio>
		),
		_eserciziFavourites: useStorage('eserciziFavourites', [] as Array<string>)
	}),
	getters: {
		esercizi: (state) => {
			return state._esercizi.map(e => {
				e.isFavourite = state._eserciziFavourites.find(es => es == e.nome) != undefined
				return e
			}) as Array<Esercizio>
		},
		eserciziFav: (state) => {
			state._eserciziFavourites.map(e => {
				return {...state._esercizi.find(e2 => e2.nome == e), isFavourite: true}
			})
		}
	},
	actions: {
		toggleFavEsercizio(es: Esercizio){
			if(this._eserciziFavourites.find(e => e == es.nome)){
				this._eserciziFavourites = this._eserciziFavourites.filter(e => e != es.nome)
			}else{
				this._eserciziFavourites.push(es.nome)
			}
		}
	},
})
