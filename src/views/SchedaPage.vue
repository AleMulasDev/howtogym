<template>
	<EmptyContainer>
		<div>{{ scheda.nome }}</div>
	</EmptyContainer>
</template>

<script lang="ts" setup>
import { IonImg, useIonRouter } from '@ionic/vue';
import { useRoute } from 'vue-router';
import { useSchedeStore } from '@/stores/schede';
import EmptyContainer from '@/components/EmptyContainer.vue';

const route = useRoute()
const router = useIonRouter()
const schedeS = useSchedeStore()

const scheda = schedeS.schede.filter(s => s.id == route.params.id)[0]

console.log(scheda)


</script>