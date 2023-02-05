import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { useEserciziStore } from './esercizi'
import { Esercizio, Scheda, schede as schedeDefault} from '@/models/Schede'

export const useSchedeStore = defineStore('schede', {
	state: () => ({
		storia: useStorage('storia', ['Full body workout']),
		esercizi: useEserciziStore(),
		_schedeFavouries: useStorage('schedeFavourites', [] as Array<string>),
	}),
	getters: {
		schede: (state) => {
			return schedeDefault.map((s: any) => {
				return {...s,
					isFavourite: state._schedeFavouries.find(sc => sc == s.nome) != undefined,
					esercizi: s.esercizi.map((e: any) => {
					return {
						...e,
						_esercizio: state.esercizi.esercizi.find(e2 => e2.nome == e.esercizio)
					}
				})}
			}) as Array<Scheda>
		},
		storiaFilled: function(state): Array<Scheda> {
			return state.storia.map(s => this.schede.find((sc: Scheda) => sc.nome == s)) as Array<Scheda>
		},
		schedeFav: (state) => {
			return state._schedeFavouries.map(s => {
				return {...schedeDefault.find(s2 => s2.nome == s), isFavourite: true}
			})
		}
	},
	actions: {
		toggleFavScheda(sc: Scheda){
			if(this._schedeFavouries.find(s => s == sc.nome)){
				this._schedeFavouries = this._schedeFavouries.filter(s => s != sc.nome)
			}else{
				this._schedeFavouries.push(sc.nome)
			}
		},
		
	},
})
