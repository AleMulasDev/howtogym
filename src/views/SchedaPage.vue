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
						<div class="text-center text-lg font-bold" v-if="Object.hasOwn(esercizio, 'ripetizioni') && Array.isArray(esercizio.ripetizioni)">
							<div v-for="(ripetizioniEs, index) in esercizio.ripetizioni" :key="ripetizioniEs + esercizio.esercizio">
								<p v-if="ripetizioniIndex == index">
									Ripetizioni: {{ripetizioni}} / {{ ripetizioniEs }}
								</p>
								<p v-if="ripetizioniIndex > index">
									Ripetizioni: {{ripetizioniEs}} / {{ ripetizioniEs }}
								</p>
								<p v-if="ripetizioniIndex < index">
									Ripetizioni: 0 / {{ ripetizioniEs }}
								</p>
							</div>

							<ion-progress-bar :value="progress"></ion-progress-bar>

							<div class="w-full flex flex-row justify-center mt-3">
								<div class="mr-5" @click="resetRipetizioni(esercizio)">
									<ion-button color="warning">Reset</ion-button>
								</div>
								<div class="mr-2" @click="removeRipetizioni(esercizio)" v-if="ripetizioni>0">
									<ion-button>Rimuovi 1</ion-button>
								</div>
								<div @click="addRipetizioni(esercizio)" v-if="ripetizioni<esercizio.ripetizioni[ripetizioniIndex]">
									<ion-button>Aggiungi 1</ion-button>
								</div>
								<div @click="nextRipetizioniIndex(esercizio)" v-if="ripetizioni==esercizio.ripetizioni[ripetizioniIndex] && ripetizioniIndex < esercizio.ripetizioni.length-1">
									<ion-button>Avanti</ion-button>
								</div>
								<div @click="forward()" v-if="ripetizioni==esercizio.ripetizioni[ripetizioniIndex] && ripetizioniIndex == esercizio.ripetizioni.length-1">
									<ion-button>Prossimo</ion-button>
								</div>
								
							</div>

						</div>
						<div class="text-center text-lg font-bold" v-if="Object.hasOwn(esercizio, 'ripetizioni') && !Array.isArray(esercizio.ripetizioni)">
							Ripetizioni: {{ripetizioni}} / {{ esercizio.ripetizioni }}

							<ion-progress-bar :value="progress"></ion-progress-bar>

							<div class="w-full flex flex-row justify-center mt-3">
								<div class="mr-5" @click="resetRipetizioni(esercizio)">
									<ion-button color="warning">Reset</ion-button>
								</div>
								<div class="mr-2" @click="removeRipetizioni(esercizio)" v-if="ripetizioni>0">
									<ion-button>Rimuovi 1</ion-button>
								</div>
								<div @click="addRipetizioni(esercizio)" v-if="ripetizioni<esercizio.ripetizioni">
									<ion-button>Aggiungi 1</ion-button>
								</div>
								<div @click="forward()" v-if="ripetizioni==esercizio.ripetizioni">
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
import { IonImg, alertController, useIonRouter, IonProgressBar, IonIcon, IonButton, IonModal, IonContent, IonHeader, IonButtons, IonToolbar, IonTitle } from '@ionic/vue';
import { star, starOutline, calendarClearOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
import { useSchedeStore } from '@/stores/schede';
import EsercizioCard from '@/components/EsercizioCard.vue'
import { computed, reactive, ref } from 'vue';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { Esercizio, SchedaEsercizio, SchedaEsercizioTempo } from '@/models/Schede';

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


/** RIPETIZIONI */
const ripetizioni = ref(0)
const ripetizioniIndex = ref(0)

const addRipetizioni = (esercizio: SchedaEsercizio) => {
	if(! Array.isArray(esercizio.ripetizioni)){
		ripetizioni.value++
		progress.value = ripetizioni.value/(+esercizio.ripetizioni)
	}else{
		ripetizioni.value++
		progress.value = esercizio.ripetizioni
						.map((r, index) => (index < ripetizioniIndex.value) ? r : 0)
						.reduce((p, c) => c+p, 0) / esercizio.ripetizioni.reduce((p,c) => p+c, 0)
	}
}
const nextRipetizioniIndex = async (esercizio: SchedaEsercizio) => {
	alert = await alertController.create({
			header: 'Attenzione',
			message: 'Stai proseguendo al prossimo set, ora devi diminuire il peso dell\'esercizio',
			buttons:[
				{
					text: 'Conferma',
					role: 'confirm',
					handler: () => {
						ripetizioniIndex.value++
						ripetizioni.value = 0
					}
				}
			]
		}) 
		await alert.present()
}
const removeRipetizioni = (esercizio: SchedaEsercizio) => {
	ripetizioni.value--
	progress.value = ripetizioni.value/(+esercizio.ripetizioni)
}
const resetRipetizioni = () => {
	ripetizioni.value = 0
	ripetizioniIndex.value = 0
	progress.value = 0
}


/** TIMER */

const paused = ref(false)
const started = ref(false)
let timer: any
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

const forward = async () => {
	let isDone = false
	const esercizio = scheda.esercizi[esNumber.value]
	const resetAndForward = () => {
		const tmp = esNumber.value
		esNumber.value = -1
		ripetizioni.value = 0
		ripetizioniIndex.value = 0
		progress.value = 0
		time.value = 0
		setTimeout(() => esNumber.value = tmp +1 , 100)
	}

	if(Object.hasOwn(esercizio, 'tempo')){
		isDone = esercizio.tempo == time.value
	}
	if(Object.hasOwn(esercizio, 'ripetizioni') && !Array.isArray(esercizio.ripetizioni)){
		isDone = esercizio.ripetizioni == ripetizioni.value
	}
	if(Object.hasOwn(esercizio, 'ripetizioni') && Array.isArray(esercizio.ripetizioni)){
		isDone = ripetizioni.value==esercizio.ripetizioni[ripetizioniIndex.value] && ripetizioniIndex.value >= esercizio.ripetizioni.length-1
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
					ripetizioni.value = 0
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
	box-shadow: #0f172a 0 0 20px 18px;
}
</style>