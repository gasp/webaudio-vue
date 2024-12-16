<script setup lang="ts">
let audioContext: null | AudioContext = null
function play() {
  audioContext = new AudioContext()
  const oscillator = audioContext.createOscillator()
  // oscillator.frequency.value = 196.2
  oscillator.connect(audioContext.destination)
  oscillator.start()
}
</script>

<template>
  <button @click="play">Create oscillator</button>
</template>

<style scoped></style>