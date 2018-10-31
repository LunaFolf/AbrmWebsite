<template>
  <div style="max-width: 100vw">
    <span style="margin:0; padding:0;">
      <br>
      <h2>Donate</h2>
      <p>Thank you for considering donating to ABRM.</p>
      <p>However, we feel like accepting donations from people wouldn't be right,</p>
      <p>So, feel free to donate to any charity below, or choose your own!</p>
      <br>
      <div class="charities">
        <h2 v-for="charity in charities" v-bind:key="charity.url"><a :href="charity.url" target="_blank">{{charity.name}}</a></h2>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Donate',
  data () {
    return {
      charities: [
        {name: 'Marie Curie', url: 'http://mariecurie.org.uk/donate'},
        {name: 'Macmillan', url: 'https://www.macmillan.org.uk/donate'},
        {name: 'British Heart Foundation', url: 'https://www.bhf.org.uk/how-you-can-help/donate/donate-form'},
        {name: 'Cancer Research UK', url: 'https://www.cancerresearchuk.org/get-involved/donate'}
      ]
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.charities {
  width: 50vw;
  margin-left: 25vw;
  text-decoration: none;
}
.charities h2, .charities a {
  color: white;
  text-decoration: none
}
.charities a:hover {
  text-decoration: underline
}
</style>
