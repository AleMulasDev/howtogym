<template>
	<div class="bg-neutral-800 rounded-2xl p-4 relative mt-3"
		v-for="scheda of schedeStore.storiaFilled"
		:key="scheda?.nome"
		@click="goToScheda"
	>
		<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
		<div class="absolute left-28 top-4">
			<p class="text-lg">{{ scheda?.nome }}</p>
			<p class="text-sm text-neutral-400">Durata: {{ hTempo(scheda) }}</p>
			<p class="text-sm text-neutral-400">Intensità: {{ intensitaWord }}</p>
		</div>
		<div class="absolute right-0" style="top: calc(50% - calc(1.25rem /2))">
			<div class="h-6">
				<ion-icon class="h-full mr-3" size="large" :icon="icon" @click.stop="toggleFav"></ion-icon>
			</div>
		</div>
	</div>


	
</template>

<script lang="ts" setup>
import { star, starOutline } from 'ionicons/icons';
import { IonImg, useIonRouter, IonIcon } from '@ionic/vue';
import { useSchedeStore } from '@/stores/schede'
import { computed, reactive, ref } from 'vue';
import type { Scheda } from '@/models/Schede';
import { defineProps } from 'vue';


const router = useIonRouter()
const props = defineProps(['scheda'])
const scheda = reactive(props.scheda)
const routeTo = `/scheda/${scheda?.id}`
const schedeStore = ref(useSchedeStore())

const icon = computed(() => {
	return scheda.isFavourite ? star : starOutline
})

const toggleFav = () => {
	schedeStore.value.toggleFavScheda(scheda)
	scheda.isFavourite = !scheda.isFavourite
}

const intensitaWord = computed(() => {
	switch(+ scheda.intensita){
		case 1: return 'Bassa'
		case 2: return 'Media'
		case 3: return 'Alta'
	}
	return 'Altissima'
})


function hTempo(scheda?: Scheda){
	if(!scheda) return ''
	const ore = Math.floor(+scheda.durata / 60)
	return `${ore}h e ${+scheda.durata-(ore*60)}min`
}

function goToScheda(){
	router.navigate(`/scheda/${scheda?.id}`, 'forward', `replace`)
}

</script>