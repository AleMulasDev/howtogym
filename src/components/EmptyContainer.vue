<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<IonButtons slot="start" class="m-3 h-4 w-4 cursor-pointer">
					<div @click="goBack">
						<!-- <FontAwesomeIcon size="lg" icon="fa-chevron-left"></FontAwesomeIcon> -->
						<ion-icon :icon="chevronBack" size="large"></ion-icon>
					</div>
				</IonButtons>
				<IonButtons slot="end" class="m-3 mr-5 h-4 w-4 cursor-pointer" v-if="helpStr">
					<div id="open_modal_help">
						<ion-icon :icon="help" size="large"></ion-icon>
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

			<ion-modal ref="modal" :trigger="`open_modal_help`">
			<ion-header>
				<ion-toolbar>
				<ion-title>Allenamento</ion-title>
				<ion-buttons slot="end">
					<ion-button @click="dismiss()">Close</ion-button>
				</ion-buttons>
				</ion-toolbar>
			</ion-header>
			<ion-content class="ion-padding">
				<div class="flex flex-row w-full justify-center" v-html="helpStr">
				</div>
			</ion-content>
			</ion-modal>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { help, chevronBack } from 'ionicons/icons';
import { IonButton, IonIcon, IonModal, useIonRouter } from '@ionic/vue';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons,  } from '@ionic/vue';
import { ref } from 'vue';

defineProps({
	name: String,
	helpStr: String,
});

const router = useIonRouter()

const presenting = ref(false)
const modal = ref(null)

function dismiss(){
	presenting.value = false
	modal.value.$el.dismiss();
}

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
