<template>
  <div class="navBar">
    <a href="/#/">Home</a>
    <a href="/#/portfolio">Portfolio / Gallery</a>
    <a href="/#/legal">The legal bit</a>
    <a href="/#/donate">Donate</a>
  </div>
</template>

<script>
export default {
  name: 'appNavbar',
  mounted () {
  }
}
</script>

<style scoped>
.navBar {
  /* background-color: red; */
  width: 100%;
  /* margin-left: 12.5vw; */
  margin-bottom: 10px;
  padding: 20px 0px 20px 0px;
  /* border: 0.02px solid white; */
  font-weight: bold
}
.navBar a {
  text-decoration: none;
  color: #fafafa;
  /* background-color: green; */
  display: inline-block;
  margin-top: -20px;
  margin-bottom: -20px;
  padding: 10px;
}
.navBar a:hover {
  background-color: rgba(0,0,0,0.1)
}
</style>
