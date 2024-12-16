<script setup lang="ts">
let context: null | AudioContext = null
function play() {
  context = new AudioContext()
  const oscillator = context.createOscillator()
  // start playing 196.2 after 10 sec
  oscillator.frequency.setValueAtTime(196.2, 10)
  oscillator.type = "triangle"
  oscillator.connect(context.destination)
  oscillator.start()
  oscillator.connect(context.destination)
  oscillator.start()
}
</script>

<template>
  <button @click="play">Create oscillator</button>
</template>

<style scoped></style>