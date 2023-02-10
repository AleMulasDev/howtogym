<template>
<ion-page>
    <ion-content class="ion-padding">
		<h1 class="text-center text-4xl mt-12">HowToGym</h1>
		<div class="absolute top-0 right-0 mt-2 mr-2"><UserIcon/></div>
		<div class="w-full flex flex-row items-center mt-8">
			<ion-searchbar class="w-full inline" placeholder="Ricerca esercizio..." v-model="search"></ion-searchbar>
			<div @click="executeSearch">
				<FontAwesomeIcon size="lg" class="w-6 h-6 cursor-pointer" icon="search"></FontAwesomeIcon>
			</div>
		</div>
		<div v-if="search == ''">
			<div class="mt-3">
				<p class="text-neutral-100 text-xl">Allenamenti popolari</p>
				<div class="flex flex-row overflow-scroll">
					<div class="max-h-35 mr-2" v-for="scheda of schedeStore.schede" :key="scheda.id">
						<SchedaIcon :scheda="scheda"></SchedaIcon>
					</div>
					
				</div>
			</div>
			<div class="mt-3">
				<p class="text-neutral-100 text-xl">Allenamenti recenti</p>
				<div class="flex flex-col overflow-scroll mt-1">
					<SchedaCard :scheda="scheda"
						v-for="scheda of schedeStore.storiaFilled"
						:key="scheda?.nome"
					>
					</SchedaCard>
				</div>
			</div>
		</div>
		<div v-else>
			<EsercizioCard v-for="esercizio of esercizi" :esercizio="esercizio" :key="esercizio.nome"></EsercizioCard>
		</div>
    </ion-content>
</ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonImg } from '@ionic/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { IonSearchbar } from '@ionic/vue';
import UserIcon from '@/components/UserIcon.vue';
import { useSchedeStore } from '@/stores/schede'
import { ref, watch } from 'vue';
import SchedaCard from '@/components/SchedaCard.vue';
import SchedaIcon from '@/components/SchedaIcon.vue';
import EsercizioCard from '@/components/EsercizioCard.vue';
import { useEserciziStore } from '@/stores/esercizi';

const search = ref('')
const schedeStore = ref(useSchedeStore())

const esercizi = ref([])

watch(search, async (newSearch, oldSearch) => {
	esercizi.value = useEserciziStore().esercizi.filter(e => e.nome.toLowerCase().indexOf(newSearch.toLowerCase()) != -1)
		.map(e => ({esercizio: e.nome, _esercizio: e}))
})


const executeSearch = () => {
	return
}

</script>