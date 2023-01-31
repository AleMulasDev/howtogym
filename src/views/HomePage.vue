<template>
<ion-page>
    <ion-content class="ion-padding">
		<h1 class="text-center text-3xl mt-12">HowToGym</h1>
		<div class="absolute top-0 right-0 mt-2 mr-2"><UserIcon/></div>
		<div class="w-full flex flex-row items-center mt-8">
			<ion-searchbar class="w-full inline" placeholder="Ricerca esercizio..." v-model="search"></ion-searchbar>
			<div @click="executeSearch">
				<FontAwesomeIcon size="lg" class="w-6 h-6 cursor-pointer" icon="search"></FontAwesomeIcon>
			</div>
		</div>
		<div class="mt-3">
			<p class="text-slate-700 text-sm">Allenamenti popolari</p>
			<div class="flex flex-row overflow-scroll">
				<div class="max-w-24 max-h-24 m-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-24 h-24 rounded-2xl"></ion-img>
				</div>
				<div class="max-w-24 max-h-24 m-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-24 h-24 rounded-2xl"></ion-img>
				</div>
				<div class="max-w-24 max-h-24 m-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-24 h-24 rounded-2xl"></ion-img>
				</div>
				<div class="max-w-24 max-h-24 m-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-24 h-24 rounded-2xl"></ion-img>
				</div>
				<div class="max-w-24 max-h-24 m-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-24 h-24 rounded-2xl"></ion-img>
				</div>
				<div class="max-w-24 max-h-24 m-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-24 h-24 rounded-2xl"></ion-img>
				</div>
				<div class="max-w-24 max-h-24 m-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-24 h-24 rounded-2xl"></ion-img>
				</div>
				<div class="max-w-24 max-h-24 m-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-24 h-24 rounded-2xl"></ion-img>
				</div>
				<div class="max-w-24 max-h-24 m-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-24 h-24 rounded-2xl"></ion-img>
				</div>
			</div>
		</div>
		<div class="mt-3">
			<p class="text-slate-700 text-sm">Allenamenti recenti</p>
			<div class="flex flex-col overflow-scroll mt-1">
				<div class="bg-slate-100 rounded-2xl p-4 relative mt-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
					<div class="absolute left-28 top-4">
						<p class="text-lg">Nome workout</p>
						<p class="text-sm text-slate-600">Durata: 1 ora</p>
						<p class="text-sm text-slate-600">Intensità: media</p>
					</div>
				</div>
				<div class="bg-slate-100 rounded-2xl p-4 relative mt-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
					<div class="absolute left-28 top-4">
						<p class="text-lg">Nome workout</p>
						<p class="text-sm text-slate-600">Durata: 1 ora</p>
						<p class="text-sm text-slate-600">Intensità: media</p>
					</div>
				</div>
				<div class="bg-slate-100 rounded-2xl p-4 relative mt-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
					<div class="absolute left-28 top-4">
						<p class="text-lg">Nome workout</p>
						<p class="text-sm text-slate-600">Durata: 1 ora</p>
						<p class="text-sm text-slate-600">Intensità: media</p>
					</div>
				</div>
				<div class="bg-slate-100 rounded-2xl p-4 relative mt-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
					<div class="absolute left-28 top-4">
						<p class="text-lg">Nome workout</p>
						<p class="text-sm text-slate-600">Durata: 1 ora</p>
						<p class="text-sm text-slate-600">Intensità: media</p>
					</div>
				</div>
				<div class="bg-slate-100 rounded-2xl p-4 relative mt-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
					<div class="absolute left-28 top-4">
						<p class="text-lg">Nome workout</p>
						<p class="text-sm text-slate-600">Durata: 1 ora</p>
						<p class="text-sm text-slate-600">Intensità: media</p>
					</div>
				</div>
				<div class="bg-slate-100 rounded-2xl p-4 relative mt-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
					<div class="absolute left-28 top-4">
						<p class="text-lg">Nome workout</p>
						<p class="text-sm text-slate-600">Durata: 1 ora</p>
						<p class="text-sm text-slate-600">Intensità: media</p>
					</div>
				</div>
				<div class="bg-slate-100 rounded-2xl p-4 relative mt-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
					<div class="absolute left-28 top-4">
						<p class="text-lg">Nome workout</p>
						<p class="text-sm text-slate-600">Durata: 1 ora</p>
						<p class="text-sm text-slate-600">Intensità: media</p>
					</div>
				</div>
				<div class="bg-slate-100 rounded-2xl p-4 relative mt-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
					<div class="absolute left-28 top-4">
						<p class="text-lg">Nome workout</p>
						<p class="text-sm text-slate-600">Durata: 1 ora</p>
						<p class="text-sm text-slate-600">Intensità: media</p>
					</div>
				</div>
				<div class="bg-slate-100 rounded-2xl p-4 relative mt-3">
					<ion-img src="assets/GIFs/4774.gif" class="overflow-hidden w-20 h-20 rounded-2xl"></ion-img>
					<div class="absolute left-28 top-4">
						<p class="text-lg">Nome workout</p>
						<p class="text-sm text-slate-600">Durata: 1 ora</p>
						<p class="text-sm text-slate-600">Intensità: media</p>
					</div>
				</div>
			</div>
		</div>
    </ion-content>
</ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonImg } from '@ionic/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { IonSearchbar } from '@ionic/vue';
import UserIcon from '@/components/UserIcon.vue';

const search = ''

const executeSearch = () => {
	return
}

</script>