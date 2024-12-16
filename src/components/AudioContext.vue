<script setup lang="ts">
import { ref } from 'vue';
const audioContextJson = ref('');
let audioContext: null | AudioContext = null
function create() {
  audioContext = new AudioContext()
  console.log('audioContext', audioContext)
  audioContextJson.value = JSON.stringify({
    baseLatency: audioContext.baseLatency,
    currentTime: audioContext.currentTime,
    sampleRate: audioContext.sampleRate,
    outputLatency: audioContext.outputLatency,
    state: audioContext.state
  }, null, 2)
}
</script>

<template>
  <pre>{{ audioContextJson }}</pre>
  <button @click="create">Create audio context</button>
</template>

<style scoped></style>