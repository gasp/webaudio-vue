<script setup lang="ts">
import { ref } from 'vue';
import audioUrl from '../assets/bip.mp3'

const bufferSizeDisplay = ref(0);
let context: null | AudioContext = null

async function play() {
  context = new AudioContext()
  let player = context.createBufferSource()
  player.connect(context.destination)

  const response = await fetch(audioUrl)
  const binAudio = await response.arrayBuffer()
  const buffer = await context!.decodeAudioData(binAudio)

  player.buffer = buffer
  player.loop = false
  player.start()

}
</script>

<template>
  <pre>{{ bufferSizeDisplay }}</pre>
  <button @click="play">Play buffer</button>
</template>

<style scoped></style>