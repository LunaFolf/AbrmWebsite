<template>
  <div style="max-width: 100vw">
    <span style="margin:0; padding:0;">
      <div class="imagesAI">
        <img src="@/assets/img/AiPoster01.png">
        <img src="@/assets/img/AiPoster02.png">
      </div>
      <br>
      <div class="images">
        <img src="@/assets/img/Poster01.png">
        <img src="@/assets/img/Poster02.png">
        <img src="@/assets/img/Poster03.png">
        <img src="@/assets/img/Poster04.png">
        <!-- <img src="@/assets/img/Poster05.png"> -->
        <img src="@/assets/img/Poster06.png">
        <img src="@/assets/img/Poster07.png">
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.images img {
  height: 75vh;
  border: 1px solid black;
  filter: drop-shadow(-2px 5px 5px black);
}
.imagesAI img {
  width: 75vw;
  border: 1px solid black;
  filter: drop-shadow(-2px 5px 5px black);
}
</style>
