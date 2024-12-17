<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <ol>
      <li>
        <RouterLink to="/media">Media event</RouterLink>
      </li>
      <li>
        <RouterLink to="/audio-context">Audio context</RouterLink>
      </li>
      <li>
        <RouterLink to="/oscillator">Oscillator</RouterLink> and
        <RouterLink to="/oscillator-start-time">Oscillator start time</RouterLink>
      </li>
      <li>
        <RouterLink to="/theremin">Theremin</RouterLink>
      </li>
      <li>
        <RouterLink to="/random-synth">Random Synth</RouterLink>
      </li>
      <li>
        <RouterLink to="/gain">Gain</RouterLink>
      </li>
      <li>
        <RouterLink to="/lfo">Low Frequency Oscillator</RouterLink>
      </li>
      <li>
        <RouterLink to="/sample-rate">Sample Rate</RouterLink>
      </li>
      <li>
        <RouterLink to="/buffer">Buffer</RouterLink>
      </li>
      <li>
        <RouterLink to="/decode-audio">Decode audio</RouterLink>
      </li>
      <li>
        <RouterLink to="/microphone">Microphone</RouterLink>
      </li>
      <li>
        <RouterLink to="/effects">Effects</RouterLink>
      </li>
    </ol>

  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}
</style>
