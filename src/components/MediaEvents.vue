<script setup lang="ts">
import audioUrl from '../assets/bip.mp3'
import { ref, useTemplateRef, onMounted, watch } from 'vue';

const eventsDisplay = ref('');
const audio = useTemplateRef('audio');
const play = () => {
  audio.value!.play();
};

const pause = () => {
  audio.value!.pause();
};

onMounted(() => {
  if (!audio.value) return
  audio.value.addEventListener('play', () => eventsDisplay.value += 'play\n')
  audio.value.addEventListener('pause', () => eventsDisplay.value += 'pause\n')
  audio.value.addEventListener('ended', () => eventsDisplay.value += 'ended\n')
  audio.value.addEventListener('audioprocess', () => eventsDisplay.value += 'audioprocess\n')
  audio.value.addEventListener('canplay', () => eventsDisplay.value += 'canplay\n')
  audio.value.addEventListener('canplaythrough', () => eventsDisplay.value += 'canplaythrough\n')
  audio.value.addEventListener('complete', () => eventsDisplay.value += 'complete\n')
  audio.value.addEventListener('loadeddata', () => eventsDisplay.value += 'loadeddata\n')
  audio.value.addEventListener('loadedmetadata', () => eventsDisplay.value += 'loadedmetadata\n')
  audio.value.addEventListener('loadstart', () => eventsDisplay.value += 'loadstart\n')
  audio.value.addEventListener('playing', () => eventsDisplay.value += 'playing\n')
  audio.value.addEventListener('seeked', () => eventsDisplay.value += 'seeked\n')
  audio.value.addEventListener('seeking', () => eventsDisplay.value += 'seeking\n')

})

watch(eventsDisplay, (newEventsDisplay) => {
  eventsDisplay.value = newEventsDisplay
})
</script>

<template>
  <div>
    <audio controls ref="audio">
      <source :src="audioUrl" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>

  <button @click="play">play</button>
  &nbsp;
  <button @click="pause">pause</button>
  <pre>{{ eventsDisplay }} </pre>
  <p class="read-the-docs">Doc on mdn: <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#events">Audio
      events</a></p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
