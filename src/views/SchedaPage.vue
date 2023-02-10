<template>
	<EmptyContainer name="Visualizza scheda" v-if="scheda"
	help-str="In questa pagina hai la visualizzazione dei dettagli della scheda.
	<br><br>
	Di fianco al nome è presente una stella che, se vuota, indica che la scheda non è tra i preferiti.
	Premendo sulla stella è possibile aggiungere o rimuovere la scheda tra i preferiti.<br>
	Successivamente, potrai visionare le tue schede preferite nell'apposita sezione dell'applicazione.
	<br><br>
	Sempre di fianco al nome è presente anche l'icona di un calendario, premendoci potrai prenotare
	un appuntamento nella nostra palestra.
	<br><br>
	Non sai come eseguire un esercizio?<br>
	Premi sull'esercizio su cui ai dubbi, si aprirà una schermata dove ti verrà spiegato e avrai la possibilità
	di vedere una dimostrazione pratica.
	<br><br>
	Sotto il nome di ogni esercizio puoi vedere la parte che allenerà.
	<br><br>
	In basso alla schermata, trovi il tasto inizia allenamento.<br>
	Con questa funzionalità potrai essere seguito passo passo nell'esecuzione del tuo allenamento
	con la scheda visualizzata
	"
	>
		<div class="flex items-center">
			<div class="mx-auto">
				<ion-img :src="scheda.pic" class="flex w-48 h-48"></ion-img>
			</div>
		</div>
		<div class="w-full relative mt-5">
			<div class="text-2xl inline">
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
			<ion-content class="ion-padding overflow-scroll">
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
						<div v-if="!isRecupero">
						<div class="text-center text-lg font-bold" v-if="Object.hasOwn(esercizio, 'ripetizioni')">
							<p>Ripetizioni: {{ esercizio.ripetizioni }}</p>
							<p>Serie: {{serie}} / {{ esercizio.serie }}</p>

							<ion-progress-bar :value="progress"></ion-progress-bar>

							<div class="w-full flex flex-row justify-center mt-3">
								<div class="mr-5" @click="resetSerie(esercizio)">
									<ion-button color="warning">Reset</ion-button>
								</div>
								<div class="mr-2" @click="removeSerie(esercizio)" v-if="serie>0">
									<ion-button>Precedente</ion-button>
								</div>
								<div @click="addSerie(esercizio)" v-if="serie<esercizio.serie">
									<ion-button>Prossima serie</ion-button>
								</div>
								<div @click="forward()" v-if="serie == esercizio.serie">
									<ion-button>Prossimo</ion-button>
								</div>
								
							</div>

						</div>
						<div class="text-center text-lg font-bold mb-3" v-if="Object.hasOwn(esercizio, 'tempo') ">
							Tempo: {{ esercizio.tempo }} minuti

							<ion-progress-bar :value="progress" v-if="started"></ion-progress-bar>

							<div class="text-center mb-3 mt-3" v-if="started">
								{{ timerTime }}
							</div>

							<div class="w-full flex flex-row justify-center mt-3">
								<div @click="startTimer(esercizio)" v-if="time == 0">
									<ion-button v-if="paused">Azzera</ion-button>
									<ion-button v-if="!paused">Inizia</ion-button>
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
						<div v-if="isRecupero" class="flex flex-column align-center">
							<div class="mx-auto">
								<p>Tempo di recupero previsto: {{ esercizio['tempo di recupero'] }} minuti</p>
								<div class="mx-auto mt-5 relative" style="width:200px">
									<radial-progress-bar  :completed-steps="time" :total-steps="esercizio['tempo di recupero']*60"></radial-progress-bar>
									<p style="width: 200px; height: 10px; top: 90px; left: 0px; text-align: center; position: absolute">{{Math.floor(time/60)}}:{{ time-(Math.floor(time/60)*60) }}</p>
								</div>
								<div @click="skipRecupero" class="flex items-center">
									<ion-button class="mx-auto">Salta</ion-button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ion-content>
			</ion-modal>
		</div>
	</EmptyContainer>
</template>

<script lang="ts" setup>
import { IonImg, alertController, useIonRouter, IonProgressBar, IonIcon, IonButton, IonModal, IonContent, IonHeader, IonButtons, IonToolbar, IonTitle } from '@ionic/vue';
import { loadingController } from '@ionic/vue';
import { star, starOutline, calendarClearOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
import { useSchedeStore } from '@/stores/schede';
import EsercizioCard from '@/components/EsercizioCard.vue'
import { computed, reactive, ref } from 'vue';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { Esercizio, SchedaEsercizio, SchedaEsercizioTempo } from '@/models/Schede';
import RadialProgressBar from "vue3-radial-progress";

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


/** SERIE */
const serie = ref(0)
const isRecupero = ref(false)
let timerRecupero

const startRecupero = (recupero: any) => {
	time.value = 0
	timerRecupero = setInterval(() => {
		console.log(`Time: ${time.value} recupero: ${recupero}`)
		time.value +=1
		if((time.value/recupero) >= 1){
			clearInterval(timerRecupero)
			skipRecupero()
		}
	}, 1000)
}

const skipRecupero = () => {
	clearInterval(timerRecupero)
	isRecupero.value = false
	if(serie.value >= scheda.esercizi[esNumber.value].serie){
		forward()
	}
}

const addSerie = async (esercizio: SchedaEsercizio) => {
	serie.value++
	progress.value = serie.value/(+esercizio.serie)
	const recupero = esercizio["tempo di recupero"]*60
	isRecupero.value = true
	startRecupero(recupero)
	// const loading = await loadingController.create({
	// 	message: `Recupero di ${recupero} minuti`,
	// 	duration: (recupero*60*1000),
	// 	backdropDismiss: true,

	// });
	
	// await loading.present();
}
const removeSerie = (esercizio: SchedaEsercizio) => {
	serie.value--
	progress.value = serie.value/(+esercizio.serie)
}
const resetSerie = () => {
	serie.value = 0
	progress.value = 0
}


/** TIMER */

const paused = ref(false)
const started = ref(false)
let timer: any
const time = ref(0)
const startTimer = (esercizio: SchedaEsercizioTempo) => {
	clearInterval(timer)
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

let showLoading

const forward = async () => {
	let isDone = false
	const esercizio = scheda.esercizi[esNumber.value]
	const resetAndForward = () => {
		const tmp = esNumber.value
		esNumber.value = -1
		serie.value = 0
		progress.value = 0
		time.value = 0
		setTimeout(() => esNumber.value = tmp +1 , 100)
	}

	if(Object.hasOwn(esercizio, 'tempo')){
		isDone = esercizio.tempo == time.value
	}
	if(Object.hasOwn(esercizio, 'ripetizioni')){
		isDone = esercizio.serie == serie.value
	}
	
	if(isDone){
		resetAndForward()
	}else{
		alert = await alertController.create({
			header: 'Attenzione',
			message: 'Non hai ancora terminato l\'esercizio corrente, sei sicuro di voler andare avanti?',
			buttons:[
				{
					text: 'Annulla',
					role: 'cancel',
					handler: () => undefined
				},{
					text: 'Conferma',
					role: 'confirm',
					handler: () => {
						resetAndForward()
					}
				}
			]
		}) 
		await alert.present()
	}
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
let alert = null

async function dismiss(){
	alert = await alertController.create({
		header: 'Attenzione',
		message: 'Chiudendo la schermata terminerai il tuo allenamento.',
		buttons:[
			{
				text: 'Annulla',
				role: 'cancel',
				handler: () => undefined
			},{
				text: 'Conferma',
				role: 'confirm',
				handler: () => {
					serie.value = 0
					time.value = 0
					esNumber.value = 0
					progress.value = 0
					presenting.value = false
					modal.value.$el.dismiss();
				}
			}
		]
	}) 
	await alert.present()
}

const scheda = reactive(schedeS.schede.filter(s => s.id == route.params.id)[0])

</script>

<style scoped>
ion-button[slot="fixed"] {
	bottom: 1%;
	left: calc(50% - calc(256px / 2));
	box-shadow: #333333 0 0 20px 18px;
}
</style>