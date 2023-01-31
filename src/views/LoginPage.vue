<template>
	<EmptyContainer name="login">
	<div class="flex h-full items-center justify-center">
		<ion-list class="mb-5">
			<ion-item>
				<ion-label>Username:</ion-label>
				<ion-input placeholder="alemulas" v-model="username"></ion-input>
			</ion-item>
			<ion-item class="mt-5">
				<ion-label>Password</ion-label>
				<ion-input type="password" placeholder="123456" v-model="password"></ion-input>
			</ion-item>

		<div @click="login">
			<ion-button expand="block">
				Login
			</ion-button>
		</div>
		</ion-list>
	</div>
	</EmptyContainer>
</template>

<script lang="ts">
import { IonList, IonItem, IonLabel, IonInput, IonButton, toastController } from '@ionic/vue';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { useAuthStore } from '@/stores/auth';
import { defineComponent } from 'vue';

export default defineComponent({
	components:{
		IonList,
		IonItem,
		IonLabel,
		IonInput,
		IonButton,
		EmptyContainer
	},
	data(){
		return{
			username: '',
			password: ''
		}
	},
	methods:{
		async login(){
			const logged = useAuthStore().login(this.username, this.password)
			if(logged){
				const toast = await toastController.create({
					message: 'Login effettuato',
					duration: 1000,
					position: 'bottom'
				});
				await toast.present();
				await this.$router.push('/')
			}else{
				const toast = await toastController.create({
					message: 'Login errato',
					duration: 1000,
					position: 'bottom'
				});
				await toast.present();
			}
		}
	}
})
</script>