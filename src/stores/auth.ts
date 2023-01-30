import { defineStore } from 'pinia'
import { User } from '@/models/User'
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		loggedUser: useStorage('user', undefined as User|undefined),
		users: useStorage('users', [
			new User('Alessandro', 'Mulas', 'alemulas', '123456'),
			new User('Diego', 'Argiolas', 'diego', '123456')
		] as User[])
	}),
	getters: {
		isLogged: (state) => state.loggedUser != undefined
	},
	actions: {
		login(username: string, password: string): boolean {
			return this.users.reduce(((status: boolean, u: User) => {
				if(status) return true
				if(u.username == username && u.password == password){
					this.loggedUser = u
					return true
				}
				return false
			}), false)
		},
		logout(){
			this.loggedUser = undefined
		}
	},
})
