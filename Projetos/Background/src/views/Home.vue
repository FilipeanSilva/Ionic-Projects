<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title slot="start" color="primary" >Background Tasks</ion-title>
        <ion-buttons slot="start">
            <ion-button @click="startTask()" color="success" fill="solid">
              Start
            </ion-button>
            <ion-button @click="stopTask()" color="danger" fill="solid">
              Stop
            </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-label>Valor 1º numero:</ion-label>
          <ion-note slot="end" color="primary" id="num1">0</ion-note>
        </ion-item>
        <ion-item>
           <ion-label>Valor 2º numero:</ion-label>
          <ion-note slot="end" color="primary" id="num2">0</ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonButtons,IonContent, IonHeader, IonPage, IonToolbar, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { manageTasks } from '@/composables/manageTasks';

export default defineComponent({
  name: 'Home',
  components: {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
  },
  setup() {
    const {startTask, stopTask} = manageTasks();

    return {
      startTask, 
      stopTask
    }
  }
});
</script>