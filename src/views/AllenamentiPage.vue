<template>
	<EmptyContainer name="Allenamenti"
		help-str="In questa pagina puoi visionare varie schede di allenamento
		suddivise per muscoli che vengono allenati. 
		<br><br>
		Cliccando su una scheda la si può aprire e visionare gli esercizi in essa contenuti.
		<br><br>
		Una volta trovata la scheda desiderata, premi avvia esercizio e inizia subito il tuo allenamento!"
	>
		<div class="w-full flex flex-row items-center mt-8">
			<ion-searchbar class="w-full inline" placeholder="Ricerca scheda..." v-model="search"></ion-searchbar>
			<div @click="executeSearch">
				<FontAwesomeIcon size="lg" class="w-6 h-6 cursor-pointer" icon="search"></FontAwesomeIcon>
			</div>
		</div>
		<div class="w-full flex flex-row overflow-scroll mt-5">
			<div v-for="muscolo of categories" :key="muscolo" @click="toggleMuscolo(muscolo)" :class="'mr-3 p-2 rounded-3xl ' + (selectedMuscoli.has(muscolo) ? 'bg-gray-200 text-black' : 'bg-neutral-800')">
				{{ muscolo }}
			</div>
		</div>
		<SchedaCard v-for="esercizio of schede" :scheda="esercizio" :key="esercizio.id"></SchedaCard>
	</EmptyContainer>
</template>

<script lang="ts" setup>
import { useSchedeStore } from '@/stores/schede';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { IonSearchbar } from '@ionic/vue';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import EsercizioCard from '@/components/EsercizioCard.vue';
import { useEserciziStore } from '@/stores/esercizi';
import { Scheda, SchedaEsercizio } from '@/models/Schede';
import SchedaCard from '@/components/SchedaCard.vue';

const search = ref('')
const schedeStore = useSchedeStore()

const schede = ref([])

watch(search, async (newSearch, oldSearch) => {
	executeSearch(newSearch)
})

const selectedMuscoli = reactive(new Set())


const toggleMuscolo = (muscolo: any) => {
	if(selectedMuscoli.has(muscolo)) selectedMuscoli.delete(muscolo)
	else selectedMuscoli.add(muscolo)

	executeSearch(search.value)
}

const categories = computed(() => {
	const set = new Set()
	schedeStore.schede.forEach(s => s.gruppo_muscolare.replace(' ', '').split(',').forEach(g => set.add(g)))
	return Array.from(set) as string[]
})

const hasMuscolo = (scheda: Scheda, muscolo: string) => {
	return scheda?.gruppo_muscolare.toLowerCase().replace(' ', '').split(',').reduce(((p: boolean, c: string) => c.indexOf(muscolo.toLowerCase()) != -1 ? true : p), false)   
}


const executeSearch = (newSearch: string) => {
	if(newSearch == '') schede.value = schedeStore.schede
	schede.value = schedeStore.schede
		.filter(e => e.nome.toLowerCase().indexOf(newSearch.toLowerCase()) != -1)
		.filter(e => selectedMuscoli.size == 0 || e.gruppo_muscolare.toLowerCase().replace(' ', '').split(',').reduce((p,c) => (selectedMuscoli.has(c) ? true : p), false))
	
		console.log(schede.value)
}

onMounted(() => {executeSearch(search.value)})

</script>