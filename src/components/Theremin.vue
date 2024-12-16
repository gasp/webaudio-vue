<script setup lang="ts">
import { ref, watch } from 'vue';
const frequency = ref(100);

let oscillator: OscillatorNode | null = null;
function play() {
  const context = new AudioContext()
  oscillator = context.createOscillator()
  oscillator.frequency.value = 100
  oscillator.connect(context.destination)
  oscillator.start()
}

// Watch for changes in frequency and update oscillator frequency
watch(frequency, (newFrequency) => {
  if (oscillator) {
    oscillator.frequency.value = newFrequency
  }
})
</script>

<template>
  <button @click="play">Play the theremin</button>
  <input type="range" min="20" max="2000" v-model="frequency" />
</template>

<style scoped></style>