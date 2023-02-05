<template>
	<EmptyContainer name="Lista esercizi">
		
	</EmptyContainer>
</template>

<script lang="ts" setup>
import { useSchedeStore } from '@/stores/schede';
import EmptyContainer from '@/components/EmptyContainer.vue';
import { ref } from 'vue';

const sStore = ref(useSchedeStore())

</script>