<template>
  <div id="app">
    <h1><vue-tinytyper :text="title"></vue-tinytyper><span class="line1"></span><span class="line2"></span></h1>
    <p>{{subHeader}}</p>
    <appNavbar></appNavbar>
    <router-view/>
  </div>
</template>

<script>
import VueTinytyper from 'vue-tinytyper'
import appNavbar from './components/navbar'
export default {
  name: 'App',
  components: {VueTinytyper, appNavbar},
  data () {
    return {
      title: 'ABRM',
      subHeader: 'Because we have nothing better to do.'
    }
  }
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
  margin: 0;
  padding: 0
}
html, body {
  background-color: #65c1c1;
  margin: 0;
  padding: 0;
}
h1 {
  font-weight: bold;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 8em;
  position: relative;
  margin: 0;
  margin-left: 50px;
  padding: 0;
}
.line1 {
    position: absolute;
    left: 0;
    right: 0;
    top: 35%;
    bottom: 55%;
    border-top: 5px solid #65c1c1;
    border-bottom: 5px solid #65c1c1;
}
.line2 {
    position: absolute;
    left: 0;
    right: 0;
    top: 55%;
    bottom: 35%;
    border-top: 5px solid #65c1c1;
    border-bottom: 5px solid #65c1c1;
}
.line1-sm {
    position: absolute;
    left: 0;
    right: 0;
    top: 35%;
    bottom: 55%;
    border-top: 2px solid #65c1c1;
    border-bottom: 2px solid #65c1c1;
}
.line2-sm {
    position: absolute;
    left: 0;
    right: 0;
    top: 55%;
    bottom: 35%;
    border-top: 2px solid #65c1c1;
    border-bottom: 2px solid #65c1c1;
}
</style>
