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
		<div class="mt-5 mb-16">
			<EsercizioCard v-for="es of scheda.esercizi" :key="es.nome" :esercizio="es"></EsercizioCard>
		</div>

		<ion-button slot="fixed" style="width: 256px;" :id="`open_modal_${scheda.nome}`">
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
					<div @click="backwards" class="mr-3" v-if="esNumber > 0">
						<ion-button>Indietro</ion-button>
					</div>
					<div @click="forward" class="ml-3" v-if="esNumber < scheda.esercizi.length-1">
						<ion-button>Avanti</ion-button>
					</div>
				</div>
				<div v-for="(esercizio, index) in scheda.esercizi" :key="esercizio.esercizio">
					<div v-if="esNumber == index">
						<div class="w-full mt-5 mb-5">
							<ion-img :src="`/assets/GIFs/${esercizio?._esercizio?.gif}`" class="overflow-hidden w-2/3 h-auto rounded-2xl mx-auto"></ion-img>
						</div>
						<div class="text-center text-lg font-bold" v-if="Object.hasOwn(esercizio, 'ripetizioni') ">
							Ripetizioni: {{ripetizioni}} / {{ esercizio.ripetizioni }}


						</div>
						<div class="text-center text-lg font-bold mb-3" v-if="Object.hasOwn(esercizio, 'tempo') ">
							Tempo: {{ esercizio.tempo }} minuti

							<ion-progress-bar :value="progress" v-if="started"></ion-progress-bar>

							<div class="text-center mb-3 mt-3" v-if="started">
								{{ timerTime }}
							</div>

							<div class="w-full flex flex-row justify-center mt-3">
								<div @click="startTimer(esercizio)">
									<ion-button>Inizia</ion-button>
								</div>
								<div @click="pauseTimer(esercizio)" v-if="!paused">
									<ion-button>Pausa</ion-button>
								</div>
								<div @click="resumeTimer(esercizio)" v-if="paused">
									<ion-button>Riprendi</ion-button>
								</div>
							</div>
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
import { IonImg, useIonRouter, IonProgressBar, IonIcon, IonButton, IonModal, IonContent, IonHeader, IonButtons, IonToolbar, IonTitle } from '@ionic/vue';
import { star, starOutline, calendarClearOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
import { useSchedeStore } from '@/stores/schede';
import EsercizioCard from '@/components/EsercizioCard.vue'
import { computed, reactive, ref } from 'vue';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { SchedaEsercizio, SchedaEsercizioTempo } from '@/models/Schede';

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

const progress = ref(0)
const paused = ref(false)
const started = ref(false)
let timer
const time = ref(0)
const startTimer = (esercizio: SchedaEsercizioTempo) => {
	const total = +esercizio.tempo * 60
	progress.value = 0
	time.value = 0
	paused.value = false
	started.value = true
	timer = setInterval(() => {
		time.value +=1
		progress.value = (time.value/total)
		if(progress.value >= 1){
			clearInterval(timer)
		}
	}, 1000)
}

const pauseTimer = (esercizio: SchedaEsercizioTempo) => {
	clearInterval(timer)
	paused.value = true
}

const resumeTimer = (esercizio: SchedaEsercizioTempo) => {
	const total = +esercizio.tempo * 60
	paused.value = false
	timer = setInterval(() => {
		time.value+=1
		progress.value = (time.value/total)
		if(progress.value >= 1){
			clearInterval(timer)
		}
	}, 1000)
}

const timerTime = computed(() => {
	const minutes = Math.floor(time.value / 60)
	const seconds = time.value - (minutes*60)
	console.log(time)
	return `${minutes}m : ${seconds}s`
})

const forward = () => {
	const tmp = esNumber.value
	esNumber.value = -1
	setTimeout(() => esNumber.value = tmp +1 , 100)
}

const backwards = () => {
	const tmp = esNumber.value
	esNumber.value = -1
	esNumber.value = tmp -1
	setTimeout(() => esNumber.value = tmp -1 , 100)
}

const esNumber = ref(0)
const presenting = ref(false)
const modal = ref(null)
const ripetizioni = ref(1)

function dismiss(){
	presenting.value = false
	modal.value.$el.dismiss();
}

const scheda = reactive(schedeS.schede.filter(s => s.id == route.params.id)[0])


</script>

<style scoped>
ion-button[slot="fixed"] {
	bottom: 1%;
	left: calc(50% - calc(256px / 2));
	box-shadow: #0f172a 0 0 20px 18px;
}
</style>