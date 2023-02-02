<template>
	<EmptyContainer name="Visualizza scheda" v-if="scheda">
		<div class="flex items-center">
			<div class="mx-auto">
				<ion-img :src="scheda.pic" class="flex w-48 h-48"></ion-img>
			</div>
		</div>
		<div class="w-full relative mt-5">
			<div class="text-lg inline">
				{{ scheda.nome }}
			</div>
			<div class="absolute right-0 top-0">
				<FontAwesomeIcon class="mr-3" size="lg" icon="star"></FontAwesomeIcon>
				<FontAwesomeIcon size="lg" icon="calendar"></FontAwesomeIcon>
			</div>
		</div>
		<div class="mt-5">
			<EsercizioCard v-for="es of scheda.esercizi" :key="es.nome" :esercizio="es"></EsercizioCard>
		</div>
	</EmptyContainer>
</template>

<script lang="ts" setup>
import { IonImg, useIonRouter } from '@ionic/vue';
import { useRoute } from 'vue-router';
import { useSchedeStore } from '@/stores/schede';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import EsercizioCard from '@/components/EsercizioCard.vue'

const route = useRoute()
const router = useIonRouter()
const schedeS = useSchedeStore()

const scheda = schedeS.schede.filter(s => s.id == route.params.id)[0]


</script>