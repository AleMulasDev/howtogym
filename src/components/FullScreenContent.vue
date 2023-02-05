<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<IonButtons slot="start" class="m-3 h-4 w-4 cursor-pointer">
					<div @click="goBack">
						<FontAwesomeIcon size="lg" icon="fa-chevron-left"></FontAwesomeIcon>
					</div>
				</IonButtons>
				<ion-title>
					<p>
						{{ name }}
					</p>
				</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content class="ion-padding">
			<slot></slot>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useIonRouter } from '@ionic/vue';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonFooter } from '@ionic/vue';

defineProps({
	name: String,
});

const router = useIonRouter()

async function goBack(){
	await router.back()
}
</script>

<style scoped>
#container {
	text-align: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}

#container strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;
	color: #8c8c8c;
	margin: 0;
}

#container a {
	text-decoration: none;
}
</style>
