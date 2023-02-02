<template>
	<div class="bg-slate-900 rounded-2xl p-4 relative mt-3"
		v-for="scheda of schedeStore.storiaFilled"
		:key="scheda?.nome"
		@click="goToScheda"
	>
		<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
		<div class="absolute left-28 top-4">
			<p class="text-lg">{{ scheda?.nome }}</p>
			<p class="text-sm text-slate-600">Durata: {{ hTempo(scheda) }}</p>
			<p class="text-sm text-slate-600">Intensità: {{ scheda?.intensita }} su 3</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { IonImg, useIonRouter } from '@ionic/vue';
import { useSchedeStore } from '@/stores/schede'
import { ref } from 'vue';
import type { Scheda } from '@/models/Schede';
import { defineProps } from 'vue';


const router = useIonRouter()
const props = defineProps(['scheda'])
const scheda = ref(props.scheda)
const routeTo = `/scheda/${scheda?.value.id}`
const schedeStore = ref(useSchedeStore())

function hTempo(scheda?: Scheda){
	if(!scheda) return ''
	const ore = Math.floor(+scheda.durata / 60)
	return `${ore}h e ${+scheda.durata-(ore*60)}min`
}

function goToScheda(){
	router.navigate(`/scheda/${scheda?.value.id}`, 'forward', `push`)
}

</script>