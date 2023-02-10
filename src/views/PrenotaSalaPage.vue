<template>
	<EmptyContainer name="Prenota Sala" :help-str="`
	In questa schermata hai la possibilità di prenotare un posto in palestra
	`">
		<div class="flex flex-row">
			<div class="w-1/4">
				<div>
					<p class="text-neutral-100 text-xl">Data</p>
				</div>
			</div>
			<div class="w-3/2">
				<ion-datetime-button datetime="datetime"></ion-datetime-button>
				<ion-modal :keep-contents-mounted="true">
					<ion-datetime id="datetime"></ion-datetime>
				</ion-modal>
			</div>
		</div>
		<div class="overflow-scroll">
			<div class="bg-neutral-800 rounded-2xl p-4 relative mt-3" v-for="n in 15" :key="n">
				<div class="flex flex-row">
					<ion-icon class="h-8 w-8 mr-3" size="large" :icon="timeOutline"></ion-icon>
					<p class="text-lg">
						{{ n+9 }}:00 - {{ n+10 }}:00
					</p>
					<ion-icon class="h-8 w-8 ml-auto mr-3" size="large" :icon="calendarOutline"></ion-icon>
				</div>
			</div>
		</div>
	</EmptyContainer>
</template>

<script lang="ts" setup>
import { IonDatetimeButton, IonModal, IonDatetime, IonIcon } from '@ionic/vue';
import { timeOutline, calendarOutline } from 'ionicons/icons';
import { useSchedeStore } from '@/stores/schede';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { ref } from 'vue';

const sStore = ref(useSchedeStore())



</script>