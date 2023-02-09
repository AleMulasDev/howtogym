<template>
<div class="bg-neutral-800 rounded-2xl p-4 relative mt-3" v-if="esercizio" :id="`open_modal_${esercizio.esercizio}`">
	<ion-img :src="`/assets/GIFs/${esercizio._esercizio.gif}`" class="overflow-hidden w-14 h-14 rounded-2xl"></ion-img>
	<div class="absolute left-20 top-4">
		<p class="text-sm">{{ esercizio.esercizio }}</p>
		<p class="text-xs text-neutral-600"> {{ esercizio._esercizio.muscoli }}</p>
	</div>
</div>

<div v-if="esercizio">
	<ion-modal ref="modal" :trigger="`open_modal_${esercizio.esercizio}`">
	<ion-header>
		<ion-toolbar>
		<ion-title>Spiegazione</ion-title>
		<ion-buttons slot="end">
			<ion-button @click="dismiss()">Close</ion-button>
		</ion-buttons>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		<div class="w-full mt-5 mb-5">
			<ion-img :src="`/assets/GIFs/${esercizio._esercizio.gif}`" class="overflow-hidden w-2/3 h-auto rounded-2xl mx-auto"></ion-img>
		</div>
		<div class="text-center text-lg font-bold">
			
		</div>
		<div class="bg-neutral-800 flex flex-row w-full p-5 rounded-2xl">
			<div class="flex items-center h-full">
				{{ esercizio.esercizio }}
			</div>
			<div class="flex ml-auto">
				<ion-img :src="`/assets/stockmuscles/${esercizio._esercizio.muscoli.split(',')[0]}.jpg`" class="overflow-hidden w-20 h-20 rounded-2xl mx-auto"></ion-img>
			</div>
		</div>
		<div class="bg-neutral-900 p-5 mt-5 rounded-2xl">
			{{ esercizio._esercizio.descrizione }}
		</div>
	</ion-content>
	</ion-modal>
</div>


</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { IonImg } from '@ionic/vue';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonContent } from '@ionic/vue';

const presenting = ref(false)
const modal = ref(null)

function dismiss(){
	presenting.value = false
	modal.value.$el.dismiss();
}

const props = defineProps(['esercizio'])
const esercizio = ref(props.esercizio)

</script>