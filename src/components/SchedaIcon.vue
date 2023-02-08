<template>
	<div class="from-slate-700 to-transparent rounded-2xl p-0 relative mt-3"
		@click="goToScheda"
	>
		<ion-img :src="scheda.pic" class="overflow-hidden w-28 h-28 rounded-2xl"></ion-img>
	</div>


	
</template>

<script lang="ts" setup>
import { IonImg, useIonRouter } from '@ionic/vue';
import { useSchedeStore } from '@/stores/schede'
import { reactive, ref } from 'vue';
import type { Scheda } from '@/models/Schede';
import { defineProps } from 'vue';


const router = useIonRouter()
const props = defineProps(['scheda'])
const scheda = reactive(props.scheda)
const routeTo = `/scheda/${scheda?.id}`
const schedeStore = ref(useSchedeStore())



function hTempo(scheda?: Scheda){
	if(!scheda) return ''
	const ore = Math.floor(+scheda.durata / 60)
	return `${ore}h e ${+scheda.durata-(ore*60)}min`
}

function goToScheda(){
	router.navigate(`/scheda/${scheda?.id}`, 'forward', `push`)
}

</script>