<template>
	<ion-card>
		<ion-card-header>
			<ion-card-title>
				<p class="text-center">
					{{ title }}
				</p>
			</ion-card-title>
			<ion-card-subtitle>
				{{ subtitle }}
			</ion-card-subtitle>
		</ion-card-header>

		<ion-card-content>
			<slot></slot>
		</ion-card-content>
	</ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
defineProps({
	title: String,
	subtitle: String,

})
</script>