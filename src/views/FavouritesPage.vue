<template>
	<EmptyContainer name="Preferiti"
		help-str="In questa pagina avrai la possibilità di visionare le schede che hai salvato nei tuoi preferiti.
		<br><br>
		Non avrai bisogno di cercare la tua scheda ogni volta, salvale quelle che ti interessano comodamente tra i preferiti
		e potrai iniziare i tuoi allenamenti anche da questa schermata.
		<br><br>
		Per aggiungere una scheda tra i preferiti, premi sulla stellina vuota presente nella pagina della scheda o di fianco
		al suo nome.
		<br><br>
		Se vedi una scheda con una stella piena, vuol dire che è già tra i tuoi preferiti."
		>
		<p class="text-neutral-100 text-sm">Il più recente allenamento:</p>
		<div class="flex flex-col overflow-scroll mt-1">
			<SchedaCard :scheda="sStore.storiaFilled[0]"
				v-if="sStore.storiaFilled[0]"
			>
			</SchedaCard>
		</div>
		<p class="text-neutral-100 text-sm mt-5">Le tue schede preferite</p>
		<div class="flex flex-col overflow-scroll mt-1">
			<SchedaCard :scheda="scheda"
				v-for="scheda of sStore.schedeFav"
				:key="scheda?.nome"
			>
			</SchedaCard>
		</div>
	</EmptyContainer>
</template>

<script lang="ts" setup>
import SchedaCard from '@/components/SchedaCard.vue';
import { useSchedeStore } from '@/stores/schede';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { ref } from 'vue';

const sStore = ref(useSchedeStore())
</script>