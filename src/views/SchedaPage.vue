<template>
	<FullScreenContent name="Visualizza scheda" v-if="scheda">
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
		<div class="mt-5">
			<EsercizioCard v-for="es of scheda.esercizi" :key="es.nome" :esercizio="es"></EsercizioCard>
		</div>

		<ion-button slot="fixed" style="width: 128px;">
			Inizia allenamento
		</ion-button>
	</FullScreenContent>
</template>

<script lang="ts" setup>
import { IonImg, useIonRouter, IonIcon, IonButton } from '@ionic/vue';
import { star, starOutline, calendarClearOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
import { useSchedeStore } from '@/stores/schede';
import EsercizioCard from '@/components/EsercizioCard.vue'
import { computed, reactive } from 'vue';
import FullScreenContent from '@/components/FullScreenContent.vue';

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

const scheda = reactive(schedeS.schede.filter(s => s.id == route.params.id)[0])


</script>

<style scoped>
ion-button[slot="fixed"] {
	bottom: 1%;
	right: calc(50% - calc(128px / 2));
	box-shadow: #0f172a 0 0 20px 18px;
}
</style>