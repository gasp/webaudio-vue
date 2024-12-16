<script setup lang="ts">
import { ref, watch } from 'vue';
const gain = ref(50);
let amp: GainNode | null = null;
let oscillator: OscillatorNode | null = null;

function play() {
  const context = new AudioContext()
  oscillator = context.createOscillator()
  oscillator.type = 'sine'
  oscillator.frequency.value = 430

  amp = context.createGain()
  // amp.gain.setValueAtTime(gain.value / 100, context.currentTime) 
  oscillator.connect(amp).connect(context.destination)
  oscillator.start()
}

// Watch for changes in gain and 
watch(gain, (newGain) => {
  if (!amp) return
  // you can use other AudioParams here
  amp.gain.setValueAtTime(newGain / 100, amp.context.currentTime)
})
</script>

<template>
  <pre>{{ gain }}/100</pre>
  <button @click="play">Play an annoying tone</button>
  <input type="range" min="0" max="100" v-model="gain" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
