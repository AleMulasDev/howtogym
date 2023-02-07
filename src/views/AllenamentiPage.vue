<template>
	<EmptyContainer name="Allenamenti">
		<div v-for="cat in categories" :key="cat" class="mt-5">
			<p class="text-slate-100 text-sm">{{ cat }}</p>
			<div class="flex flex-row overflow-scroll h-35 w-full">
				<div v-for="es in sStore.schede.filter(s => s.gruppo_muscolare == cat)"
				:key="es.nome" class="mr-2">
					<SchedaIcon :scheda="es"></SchedaIcon>
				</div>
			</div>
		</div>
	</EmptyContainer>
</template>

<script lang="ts" setup>
import SchedaIcon from '@/components/SchedaIcon.vue'
import EmptyContainer from '@/components/EmptyContainer.vue';
import { useSchedeStore } from '@/stores/schede';
import { computed, ref } from 'vue';

const sStore = useSchedeStore()

const categories = computed(() => {
	const set = new Set()
	sStore.schede.forEach(s => set.add(s.gruppo_muscolare))
	return Array.from(set) as string[]
})

</script>