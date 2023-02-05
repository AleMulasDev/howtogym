<template>
	<EmptyContainer name="Visualizza scheda" v-if="scheda">
		<div class="flex items-center">
			<div class="mx-auto">
				<ion-img :src="scheda.pic" class="flex w-48 h-48"></ion-img>
			</div>
		</div>
		<div class="w-full relative mt-5">
			<div class="text-lg inline">
				{{ scheda.nome }}
			</div>
			<div class="absolute right-0 top-0 h-6">
				<ion-icon class="mr-3 h-full" size="large" :icon="icon" @click="toggleFav"></ion-icon>
				<ion-icon class="mr-3 h-full" size="large" :icon="calendarClearOutline"></ion-icon>
			</div>
		</div>
		<div class="mt-5">
			<EsercizioCard v-for="es of scheda.esercizi" :key="es.nome" :esercizio="es"></EsercizioCard>
		</div>

		<ion-button slot="fixed" style="width: 128px;" :id="`open_modal_${scheda.nome}`">
			Inizia allenamento
		</ion-button>

		<div v-if="scheda">
			<ion-modal ref="modal" :trigger="`open_modal_${scheda.nome}`">
			<ion-header>
				<ion-toolbar>
				<ion-title>Allenamento</ion-title>
				<ion-buttons slot="end">
					<ion-button @click="dismiss()">Close</ion-button>
				</ion-buttons>
				</ion-toolbar>
			</ion-header>
			<ion-content class="ion-padding">
				<div class="flex flex-row w-full justify-center">
					<div @click="esNumber--" class="mr-3">
						<ion-button>Indietro</ion-button>
					</div>
					<div @click="esNumber++" class="ml-3">
						<ion-button>Avanti</ion-button>
					</div>
				</div>
				<div v-for="(esercizio, index) in scheda.esercizi" :key="esercizio.esercizio">
					<div v-if="esNumber == index">
						<div class="w-full mt-5 mb-5">
							<ion-img :src="`/assets/GIFs/${esercizio?._esercizio?.gif}`" class="overflow-hidden w-2/3 h-auto rounded-2xl mx-auto"></ion-img>
						</div>
						<div class="text-center text-lg font-bold">
							
						</div>
						<div class="bg-slate-900 flex flex-row w-full p-5 rounded-2xl">
							<div class="flex items-center h-full">
								{{ esercizio.esercizio }}
							</div>
							<div class="flex ml-auto">
								<ion-img :src="`/assets/GIFs/${esercizio?._esercizio?.gif}`" class="overflow-hidden w-20 h-20 rounded-2xl mx-auto"></ion-img>
							</div>
						</div>
						<div class="bg-slate-900 p-5 mt-5 rounded-2xl">
							{{ esercizio?._esercizio?.descrizione }}
						</div>
					</div>
				</div>
			</ion-content>
			</ion-modal>
		</div>
	</EmptyContainer>
</template>

<script lang="ts" setup>
import { IonImg, useIonRouter, IonIcon, IonButton, IonModal, IonContent, IonHeader, IonButtons, IonToolbar, IonTitle } from '@ionic/vue';
import { star, starOutline, calendarClearOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
import { useSchedeStore } from '@/stores/schede';
import EsercizioCard from '@/components/EsercizioCard.vue'
import { computed, reactive, ref } from 'vue';
import EmptyContainer from '@/components/EmptyContainer.vue';

const route = useRoute()
const router = useIonRouter()
const schedeS = useSchedeStore()

const icon = computed(() => {
	return scheda.isFavourite ? star : starOutline
})

const toggleFav = () => {
	schedeS.toggleFavScheda(scheda)
	scheda.isFavourite = !scheda.isFavourite
}

const esNumber = ref(0)
const presenting = ref(false)
const modal = ref(null)

function dismiss(){
	presenting.value = false
	modal.value.$el.dismiss();
}

const scheda = reactive(schedeS.schede.filter(s => s.id == route.params.id)[0])


</script>

<style scoped>
ion-button[slot="fixed"] {
	bottom: 1%;
	right: calc(50% - calc(128px / 2));
	box-shadow: #0f172a 0 0 20px 18px;
}
</style>