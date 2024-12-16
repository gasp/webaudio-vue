<script setup lang="ts">
import { ref, watch } from 'vue';
const oscFreq = ref(50);
const lfoFreq = ref(50);
let amp: GainNode | null = null;
let osc: OscillatorNode | null = null;
let lfo: OscillatorNode | null = null;

function play() {
  const context = new AudioContext()
  osc = context.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = 430

  amp = context.createGain()
  amp.gain.setValueAtTime(1, context.currentTime)

  lfo = context.createOscillator()
  lfo.type = 'sine'
  lfo.frequency.value = 4

  lfo.connect(amp.gain)
  osc.connect(amp).connect(context.destination)
  lfo.start()
  osc.start()
}

watch(oscFreq, (newOscFreq) => {
  if (!amp || !osc) return
  osc.frequency.setValueAtTime(newOscFreq, amp.context.currentTime)
})

watch(lfoFreq, (newLfoFreq) => {
  if (!amp || !lfo) return
  lfo.frequency.setValueAtTime(newLfoFreq, amp.context.currentTime)
})
</script>

<template>
  <button @click="play">Start playing</button>
  <input type="range" min="0" max="1000" v-model="oscFreq" />
  <input type="range" min="0" max="50" v-model="lfoFreq" />
</template>

<style scoped>
button {
  display: block;
  margin-bottom: 1rem;
}

input {
  display: block
}
</style>