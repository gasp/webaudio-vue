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
        <RouterLink to="/oscillator">Oscillator</RouterLink>
        <RouterLink to="/oscillator-start-time">Oscillator start time</RouterLink>
      </li>
      <li>
        <RouterLink to="/theremin">Theremin</RouterLink>
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
