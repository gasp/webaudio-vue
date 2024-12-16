<script setup lang="ts">
console.log('events')
</script>

<template>
  <div>
    <pre>list media events here</pre>
    <audio controls>
      <!-- <source src="horse.ogg" type="audio/ogg"> -->
      <source src="./assets/bip.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>

  <button>play</button>
  &nbsp;
  <button>pause</button>
  <p class="read-the-docs">Doc on mdn: <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#events">Audio
      events</a></p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
