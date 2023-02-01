import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { useEserciziStore } from './esercizi'
import { schede } from '@/models/Schede'

export const useSchedeStore = defineStore('schede', {
	state: () => ({
		storia: useStorage('storia', ['Full body workout']),
		esercizi: useEserciziStore(),
	}),
	getters: {
		schede: (state) => {
			return schede.map((s: any) => {
				return {...s,
					esercizi: s.esercizi.map((e: any) => {
					return {
						...e,
						_esercizio: state.esercizi.esercizi.find(e2 => e2.nome == e.esercizio)
					}
				})}
			})
		},
		storiaFilled: (state) => {
			return state.storia.map(s => schede.find(sc => sc.nome == s))
		}
	},
	actions: {
	},
})
