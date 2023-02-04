<template>
	<ion-page>
		<ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
			<ion-tab-bar slot="bottom">
				<!-- Home  -->
				<ion-tab-button tab="home" href="/tabs/home">
					<ion-icon :icon="homeOutline"></ion-icon>
					<ion-label></ion-label>
				</ion-tab-button>

				<!-- Preferiti -->
				<ion-tab-button tab="favourites" href="/tabs/favourites">
					<ion-icon :icon="starOutline"></ion-icon>
					<ion-label></ion-label>
				</ion-tab-button>

				<!-- Esercizi -->
				<ion-tab-button tab="esercizi" href="/tabs/esercizi">
					<ion-icon :icon="barbellOutline"></ion-icon>
					<ion-label></ion-label>
				</ion-tab-button>

				<!-- Schede -->
				<ion-tab-button tab="schede" href="/tabs/schede">
					<ion-icon :icon="newspaperOutline"></ion-icon>
					<ion-label></ion-label>
				</ion-tab-button>

				<!-- Prenotazioni -->
				<ion-tab-button tab="reservations" href="/tabs/reservations">
					<ion-icon :icon="calendar"></ion-icon>
					<ion-label></ion-label>
				</ion-tab-button>
			</ion-tab-bar>

			<ion-router-outlet></ion-router-outlet>
		</ion-tabs>
	</ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import {
	IonIcon,
	IonLabel,
	IonPage,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonRouterOutlet
} from '@ionic/vue';
import { homeOutline, starOutline, barbellOutline, newspaperOutline, calendar } from 'ionicons/icons';

export default defineComponent({
	components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs, IonRouterOutlet },
	setup() {
		const beforeTabChange = () => {
			// do something before tab change
		}
		const afterTabChange = () => {
			// do something after tab change
		}
		return {
			calendar,
			homeOutline, 
			starOutline, 
			barbellOutline, 
			newspaperOutline,
			beforeTabChange,
			afterTabChange
		}
	}
});
</script>