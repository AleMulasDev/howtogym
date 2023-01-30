<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <p>
          {{ name }}
        </p>
      </ion-title>
      <IonButtons slot="end">
        <UserIcon></UserIcon>
      </IonButtons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <slot></slot>
  </ion-content>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons } from '@ionic/vue';
import UserIcon from './UserIcon.vue'
defineProps({
  name: String,
});
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
