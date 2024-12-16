<script setup lang="ts">
import { ref, watch } from 'vue';
const frequency = ref(100);

let context: null | AudioContext = null;
let oscillator: OscillatorNode | null = null;
let freq = 200

function changeNote() {
  freq = freq * 1.5
  if (freq > 600) {
    freq = 200 + Math.random() * 200
  }
  if (!oscillator || !context) {
    return
  }
  oscillator.frequency.value = freq
  oscillator.frequency.setValueAtTime(freq, context.currentTime)
}

setInterval(changeNote, 145)
function play() {
  context = new AudioContext()
  oscillator = context.createOscillator()
  oscillator.type = 'triangle'
  oscillator.frequency.value = freq
  oscillator.frequency.setValueAtTime(freq, context.currentTime)
  oscillator.connect(context.destination)
  oscillator.start()
}

// Watch for changes in frequency and update oscillator frequency
watch(frequency, (newFrequency) => {
  if (oscillator) {
    oscillator.frequency.value = newFrequency;
  }
});
</script>

<template>
  <button @click="play">Play random notes</button>
</template>

<style scoped></style>