<script setup lang="ts">
import { ref } from 'vue';


const recordDisplayDisplay = ref('⏸️');
let context: null | AudioContext = null

const rec = () => {
  context = new AudioContext()
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(stream => {
      const micro = context!.createMediaStreamSource(stream)
      micro.connect(context!.destination)
    })
  recordDisplayDisplay.value = '🔴'
}

</script>

<template>
  <pre>{{ recordDisplayDisplay }}</pre>
  <button @click="rec">Record (and play)</button>
</template>

<style scoped></style>