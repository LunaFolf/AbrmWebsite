<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans:700');
#app {
  font-family: 'IBM Plex Mono', monospace;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #fafafa;
  /* margin-top: 60px; */
}
html, body {
  background-color: #65c1c1;
}
</style>
