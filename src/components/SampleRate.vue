<script setup lang="ts">
let context: null | AudioContext = null
function create() {
  context = new AudioContext({ sampleRate: 8000, })
  console.log('audioContext', context)

  const oscillator = context.createOscillator()
  // oscillator.frequency.value = 196.2
  oscillator.connect(context.destination)
  oscillator.start()
}
</script>

<template>

  <button @click="create">Listen with a sample rate</button>
</template>

<style scoped></style>