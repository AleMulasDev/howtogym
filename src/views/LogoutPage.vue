<template>
	<EmptyContainer name="Logout">
	<div class="flex h-full items-center justify-center">
		<ion-list class="mb-5">
		<div @click="logout">
			<ion-button expand="block">
				Logout
			</ion-button>
		</div>
		</ion-list>
	</div>
	</EmptyContainer>
</template>

<script lang="ts">
import { IonList, IonButton, useIonRouter } from '@ionic/vue';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
	components:{
		EmptyContainer,
		IonList,
		IonButton
	},
	setup(){
		const router = ref(useIonRouter())
		return {
			router
		}
	},
	methods:{
		async logout(){
			useAuthStore().logout()
			await this.router.push('/')
		}
	}
})
</script>