<template>
	<EmptyContainer name="Preferiti">
		<p class="text-slate-100 text-sm">Le tue schede preferite</p>
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