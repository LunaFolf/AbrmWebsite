<template>
  <div>
    <span style="margin:0; padding:0">
      <h1>ABRM<span class="line1"></span><span class="line2"></span></h1>
      <p>Because we have nothing better to do.</p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 10em;
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
</style>
