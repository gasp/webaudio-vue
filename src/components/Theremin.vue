<script setup lang="ts">
function create() {
  const context = new AudioContext()
  const oscillator = context.createOscillator()
  oscillator.frequency.value = 100
  oscillator.connect(context.destination)
  oscillator.start()

  setInterval(() => {
    oscillator.frequency.value = Math.floor(Math.random() * 1000)
  }, 100)
}
</script>

<template>
  <button @click="create">Play randomized theremin</button>
</template>

<style scoped></style>