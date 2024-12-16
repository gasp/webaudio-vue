<script setup lang="ts">
import { ref } from 'vue';
const bufferSizeDisplay = ref(0);
let context: null | AudioContext = null
function play() {
  context = new AudioContext()
  // 3 seconds of buffer
  const bufferSize = context.sampleRate * 3
  const buffer = context.createBuffer(2, bufferSize, context.sampleRate)


  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const data = buffer.getChannelData(channel)
    //fill the buffer with noise
    for (let i = 0; i < buffer.length; i++) {
      // data[i] = Math.random() * 2 - 1 // white noise :-)
      // data[i] = Math.sin(i / 10) // an oscillator
      // data[i] = Math.sin(i * i) // a strange oscillator
      // data[i] = Math.log(Math.sin(i / 10)) // something strange and not pleasent
      data[i] = Math.sin((1 / i) * bufferSize) // lazer noise https://i0.wp.com/www.methodemaths.fr/limite_inverse.jpg
    }
  }

  const noise = context.createBufferSource()
  noise.buffer = buffer

  noise.connect(context.destination)
  bufferSizeDisplay.value = buffer.length
  noise.start()
}
</script>

<template>
  <pre>{{ bufferSizeDisplay }}</pre>
  <button @click="play">Play buffer</button>
</template>

<style scoped></style>