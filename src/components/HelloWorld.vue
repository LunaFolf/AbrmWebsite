<template>
  <div style="max-width: 100vw">
    <span style="margin:0; padding:0;">
      <h1><vue-tinytyper v-if="msg1 !== ''" :text="msg1"></vue-tinytyper><span class="line1"></span><span class="line2"></span></h1>
      <h2><vue-tinytyper v-if="msg2 !== ''" :text="msg2"></vue-tinytyper><span class="line1-sm"></span><span class="line2-sm"></span></h2>
      <p>Because we have nothing better to do.</p>
      <div class="images">
        <img src="@/assets/img/Advert01.png">
        <img src="@/assets/img/Advert02.png">
        <img src="@/assets/img/Advert03.png">
        <img src="@/assets/img/Advert04.png">
      </div>
    </span>
  </div>
</template>

<script>
import VueTinytyper from 'vue-tinytyper'
export default {
  name: 'HelloWorld',
  components: {VueTinytyper},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1: 'ABRM',
      msg2: ''
    }
  },
  mounted () {
    var self = this
    window.setInterval(function () {
      if (self.msg2 === '') {
        self.msg1 = ''
        self.msg2 = 'JD8202010123/M91'
      } else {
        self.msg1 = 'ABRM'
        self.msg2 = ''
      }
    }, 10000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 75vh;
  border: 1px solid black;
  filter: drop-shadow(-2px 5px 5px black);
}
h1 {
  font-weight: bold;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 8em;
  position: relative;
  margin: 0;
  padding: 0;
}
h2 {
  font-weight: bold;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 3em;
  position: relative;
  margin: 0;
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
