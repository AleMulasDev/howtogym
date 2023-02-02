<template>
<div class="bg-slate-900 rounded-2xl p-4 relative mt-3" v-if="esercizio">
	<ion-img :src="`/assets/GIFs/${esercizio._esercizio.gif}`" class="overflow-hidden w-14 h-14 rounded-2xl"></ion-img>
	<div class="absolute left-20 top-4">
		<p class="text-sm">{{ esercizio.esercizio }}</p>
		<p class="text-xs text-slate-600"> {{ esercizio._esercizio.muscoli }}</p>
	</div>
</div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';


const props = defineProps(['esercizio'])
const esercizio = ref(props.esercizio)
console.log(esercizio)

</script>