<template>
	<EmptyContainer name="Lista esercizi" :help-str="`
		In questa schermata sarà possibile vedere tutti gli esercizi.
		<br>
		È inoltre possibile filtrare gli esercizi per muscolo lavorato
	`">
		<div class="w-full flex flex-row items-center mt-8">
			<ion-searchbar class="w-full inline" placeholder="Ricerca esercizio..." v-model="search"></ion-searchbar>
			<div @click="executeSearch">
				<FontAwesomeIcon size="lg" class="w-6 h-6 cursor-pointer" icon="search"></FontAwesomeIcon>
			</div>
		</div>
		<div class="w-full flex flex-row overflow-scroll mt-3">
			<div v-for="muscolo of categories" :key="muscolo" @click="toggleMuscolo(muscolo)" :class="'mr-3 p-2 rounded-3xl ' + (selectedMuscoli.has(muscolo) ? 'bg-gray-200 text-black' : 'bg-neutral-800')">
				{{ muscolo }}
			</div>
		</div>
		<EsercizioCard v-for="esercizio of esercizi" :esercizio="esercizio" :key="esercizio.esercizio"></EsercizioCard>
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
import { SchedaEsercizio } from '@/models/Schede';

const search = ref('')
const schedeStore = ref(useSchedeStore())

const esercizi = ref([])

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
	useEserciziStore().esercizi.forEach(s => s.muscoli.replace(' ', '').split(',').forEach(g => set.add(g)))
	return Array.from(set) as string[]
})

const hasMuscolo = (esercizio: SchedaEsercizio, muscolo: string) => {
	return esercizio._esercizio?.muscoli.toLowerCase().replace(' ', '').split(',').reduce(((p: boolean, c: string) => c.indexOf(muscolo.toLowerCase()) != -1 ? true : p), false)   
}


const executeSearch = (newSearch: string) => {
	if(newSearch == '') esercizi.value = useEserciziStore().esercizi.map(e => ({esercizio: e.nome, _esercizio: e}))
	esercizi.value = useEserciziStore().esercizi
		.filter(e => e.nome.toLowerCase().indexOf(newSearch.toLowerCase()) != -1)
		.filter(e => selectedMuscoli.size == 0 || selectedMuscoli.has(e.muscoli.toLowerCase()))
		.map(e => ({esercizio: e.nome, _esercizio: e}))
	
		console.log(esercizi.value)
}

onMounted(() => {executeSearch(search.value)})
</script>