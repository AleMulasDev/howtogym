import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Esercizio } from '@/models/Schede'
import { esercizi } from '@/models/Schede'

export const useEserciziStore = defineStore('esercizi', {
	state: () => ({
		_esercizi: esercizi,
		_eserciziFavourites: useStorage('eserciziFavourites', [] as Array<string>)
	}),
	getters: {
		esercizi: (state) => {
			return state._esercizi.map(e => {
				e.isFavourite = state._eserciziFavourites.find(es => es.toLowerCase() == e.nome.toLowerCase()) != undefined
				return e
			}) as Array<Esercizio>
		},
		eserciziFav: (state) => {
			state._eserciziFavourites.map(e => {
				return { ...state._esercizi.find(e2 => e2.nome.toLowerCase() == e.toLowerCase()), isFavourite: true }
			})
		}
	},
	actions: {
		toggleFavEsercizio(es: Esercizio) {
			if (this._eserciziFavourites.find(e => e == es.nome)) {
				this._eserciziFavourites = this._eserciziFavourites.filter(e => e != es.nome)
			} else {
				this._eserciziFavourites.push(es.nome)
			}
		}
	},
})
